---
title: "Oracle EBS Procurement Automation"
description: "Connecting Oracle EBS to automated procurement workflows via ORDS, enabling real-time PO, PR, GRN, and SRN data pipelines — eliminating 5-7 days of manual MIS compilation."
client: "Education Group (NDA)"
industry: "Education"
results:
  - "MIS compilation: 5-7 days → real-time"
  - "Zero manual ERP data extraction"
  - "60% reduction in integration maintenance"
  - "Live 3-way reconciliation against procurement records"
tags: ["erp-integration", "oracle", "procurement", "ords"]
order: 2
---

## The Challenge

This engagement is with the same education group behind the [Invoice Reconciliation project](/case-studies/lighthouse-learning-invoice-ocr/) (client name under NDA). Their Oracle EBS instance is the system of record for procurement — every Purchase Order, Purchase Requisition, Goods Receipt Note, and Store Receipt Note flows through it.

But accessing that data was manual and slow:

- **5-7 business days** to compile month-end MIS from ERP data
- CSV exports and pivot tables were the primary "integration" method
- By the time reports reached the accounts team, data was days stale
- Invoice reconciliation required manual PO lookups — one at a time, copying values from Oracle screens into Excel
- **3 full-time staff** dedicated to ERP data extraction and report formatting

The root problem was not Oracle EBS itself — it is a robust, mature system. The problem was the lack of a programmatic access layer connecting ERP data to modern automation workflows.

## What We Built

### ORDS API Layer

Oracle REST Data Services (ORDS) was deployed on top of the existing Oracle EBS instance, exposing key procurement entities as secure REST endpoints. No changes to the existing Oracle database schema were required — ORDS acts as a controlled interface layer that authorises and routes API requests to the underlying data.

Four core entities are now accessible via API:

- **Purchase Orders (PO)** — Full PO header and line-item data including vendor, amounts, status, and remaining open value
- **Purchase Requisitions (PR)** — Internal approval records and requisition status
- **Goods Receipt Notes (GRN)** — Delivery confirmations against open POs
- **Store Receipt Notes (SRN)** — Internal receipt and inspection records

All endpoints are secured with authentication and scoped access controls — only authorised workflow agents can query procurement data.

### Automated Data Pipelines

Automated n8n workflows pull procurement data on defined schedules and in response to specific triggers. When the invoice reconciliation engine needs to validate a PO before approving an invoice, it queries the ORDS endpoint directly — receiving current data, not a stale export.

This eliminates the manual extraction step entirely. Procurement data flows automatically into reconciliation checks, reporting dashboards, and approval workflows.

## Architecture

The integration follows a clean separation of concerns:

1. **Oracle EBS** remains the single source of truth for all procurement data
2. **ORDS** sits as a controlled API layer, exposing only the entities and fields that downstream workflows need
3. **n8n workflows** authenticate against ORDS endpoints and fetch data on demand or on schedule
4. **Downstream consumers** — reconciliation engines, dashboards, notification systems — receive current data without human involvement

## Results

**MIS compilation time:** Reduced from 5-7 business days to real-time automated dashboards. Month-end reports that required a dedicated team now generate themselves.

**Manual data extraction:** Completely eliminated. The 3 staff members previously dedicated to ERP data extraction have been redeployed to exception handling and vendor management — higher-value work.

**Invoice reconciliation speed:** The 6-check reconciliation engine validates PO status, open value, and GRN confirmation in real time. What previously required manual Oracle screen lookups now happens in under 2 seconds per invoice.

**Integration maintenance:** 60% reduction. The ORDS layer is a reusable infrastructure component — any future workflow that needs procurement data queries the same endpoints. The integration cost is paid once.

**Error reduction:** Eliminated stale-data errors that previously caused payment discrepancies. Live PO validation catches over-invoicing and duplicate submissions before they reach accounts payable.

## What the VP Can Present

> "We deployed an API layer on top of Oracle EBS that reduced our MIS compilation from 5-7 days to real-time, eliminated manual data extraction for 3 staff, and enabled live 3-way invoice reconciliation — all without modifying the ERP schema."
