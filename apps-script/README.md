# CLAT Possible CRM — Apps Script deployment & ops guide

Downstream Meta CAPI event engine for the **3-Day CLAT Rank Roadmap** webinar
funnel. The Next.js backend fires the tripwire `Purchase` + `sales` events on the
₹49 seat purchase and writes one CRM row per lead via Pabbly. This Apps Script
fires the three **downstream lifecycle** events as the sales/ops team marks the
Sheet:

| Lifecycle stage | Meta event name | Fires when |
|---|---|---|
| Attended the 3-day masterclass | `LeadShowUp` | col **X** `attended` → TRUE |
| Showed intent for a sales call | `QualifiedLead` | col **AB** `qualified` → TRUE |
| Bought the high-ticket course | `HighTicketPurchase` | col **AF** `sale_closed` → TRUE (+ value) |

---

## 1. Google Sheet schema (one row per lead)

### A–W — auto-filled by Pabbly (23 cols, written on every purchase)

```
A lead_id | B created_at | C first_name | D last_name | E email | F phone |
G city | H country_code | I fbc | J fbp | K client_ip_address |
L client_user_agent | M external_id | N event_source_url | O amount |
P is_test | Q purchase_event_id | R utm_source | S utm_medium |
T utm_campaign | U utm_content | V utm_term | W fbclid
```

### X–AJ — webinar lifecycle (manual + Apps Script)

| Col | Field | Written by | Notes |
|---|---|---|---|
| X | `attended` | Ops | Dropdown TRUE/FALSE, **blank default**. Fires `LeadShowUp`. |
| Y | `showup_time` | Ops | Webinar scheduled datetime (IST). **Same for all attendees** — fill once, copy down. Fill BEFORE flipping X. |
| Z | `leadshowup_capi_event_id` | Script | `<lead_id>_showup` |
| AA | `leadshowup_capi_sent` | Script | `TRUE` after fire (dedup flag) |
| AB | `qualified` | Sales | Dropdown TRUE/FALSE, blank default. Fires `QualifiedLead`. |
| AC | `qualified_time` | Sales | Datetime intent captured (IST). Fill BEFORE flipping AB. |
| AD | `qualified_capi_event_id` | Script | `<lead_id>_qualified` |
| AE | `qualified_capi_sent` | Script | `TRUE` after fire |
| AF | `sale_closed` | Sales | Dropdown TRUE/FALSE, blank default. Fires `HighTicketPurchase`. |
| AG | `contracted_value` | Sales | Plain integer INR (e.g. `60000`), no symbols/commas. Full **contracted** amount. Fill BEFORE flipping AF. |
| AH | `sales_time` | Sales | Datetime sale closed (IST). |
| AI | `htsale_capi_event_id` | Script | `<lead_id>_htsale` |
| AJ | `htsale_capi_sent` | Script | `TRUE` after fire |

### AK–AL — optional extras (sent by the backend, ignored by this script)

| Col | Field | Notes |
|---|---|---|
| AK | `grade` | Student's class/status from checkout — sales context only |
| AL | `all_params` | JSON blob of every landing-page URL param (gclid etc.) |

> Map `grade` + `all_params` to columns **after AJ** in Pabbly so they never
> overwrite the lifecycle cells. This script reads only A–AJ (`COL_COUNT = 36`).

**Use a Data Validation _dropdown_ (TRUE/FALSE), not a checkbox**, for X / AB / AF.
Pabbly's "Add Row" must leave these blank on insert; a checkbox would default to
unchecked=FALSE and muddy "never touched" vs. "explicitly FALSE".

**Column formats:** X/AB/AF dropdown TRUE/FALSE (blank default) · Y/AC/AH
date-time `yyyy-mm-dd hh:mm` IST · AG plain number · Z/AA/AD/AE/AI/AJ Script-written.

Also create a hidden tab **`_Errors`** with header:
`timestamp | row_number | event_type | http_status | response_body | retry_count`.

Set the **spreadsheet timezone** (File → Settings) to **Asia/Kolkata**.

---

## 2. Deploy

1. Open the CRM Sheet → **Extensions → Apps Script**.
2. Paste [`Code.gs`](./Code.gs) as `Code.gs`. Paste [`appsscript.json`](./appsscript.json)
   into the manifest (enable "Show appsscript.json" in Project Settings first).
3. **Project Settings → Script Properties**, add:

   | Property | Value |
   |---|---|
   | `META_PIXEL_ID` | CLAT Possible pixel/dataset ID (same as the backend) |
   | `META_CAPI_ACCESS_TOKEN` | CAPI access token (same dataset) |
   | `EVENT_SOURCE_URL_DEFAULT` | `https://<production-domain>/checkout` |
   | `MAIN_SHEET_NAME` | *(optional)* tab name if not `Sheet1` |
   | `TEST_EVENT_CODE` | *(optional)* set during smoke test, remove for prod |

4. In the editor run **`setupTriggers`** once and authorize the scopes. This
   installs the `onSheetEdit` installable trigger (a simple `onEdit` can't make
   external requests — the installable trigger is required).

---

## 3. Smoke test (Meta → Events Manager → Test Events)

Generate a test code, set it as `TEST_EVENT_CODE`, then on a dummy row:

1. Fill `showup_time` (Y) → flip `attended` (X) TRUE → expect `LeadShowUp`.
2. Fill `qualified_time` (AC) → flip `qualified` (AB) TRUE → expect `QualifiedLead`.
3. Fill `contracted_value` (AG) + `sales_time` (AH) → flip `sale_closed` (AF) TRUE →
   expect `HighTicketPurchase` with `value`.

Each should arrive with **EMQ 9+** and auto-populate its `*_capi_event_id` +
`*_capi_sent` columns. Remove `TEST_EVENT_CODE` when done.

---

## 4. Ops notes

- **Dedup:** per-row `*_capi_sent` flag + deterministic `event_id`
  (`<lead_id>_<suffix>`). Meta dedupes same name+id within 48h.
- **Errors:** non-200 → `_Errors` tab, flag stays unset, row stays retry-able.
- **Batch show-up marking after the webinar:** the script fires one event per row
  as `attended` flips TRUE. To mark hundreds at once, run **`replayPendingEvents`**
  from the editor — it self-throttles at 500 ms/event.
- **Token rotation:** update `META_CAPI_ACCESS_TOKEN` in Script Properties; no
  redeploy needed.
