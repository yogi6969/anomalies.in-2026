---
title: "Lighthouse Learning — Invoice Reconciliation Automation"
description: "How we automated invoice processing for a 200+ crore education group, reducing cycle time from 15 days to 2 days with AI OCR and automated 3-way matching."
client: "Lighthouse Learning"
industry: "Education"
results:
  - "Invoice processing: 15 days → 2 days"
  - "6-check automated reconciliation"
  - "Multi-vendor, multi-format invoice handling"
  - "Zero manual data entry for supported formats"
tags: ["invoice-automation", "ocr", "education", "gemini"]
order: 1
---

## The Challenge

Lighthouse Learning is a major education group in India managing operations across multiple schools. Every month, hundreds of invoices arrive from a diverse vendor base — manpower suppliers, transport contractors, utility providers, and equipment vendors. These invoices come in every format imaginable: PDFs from email, scanned paper documents, WhatsApp photos from vendors in the field, and email attachments with no consistent structure.

The finance team of 5+ people manually typed data from each invoice into Excel, then cross-referenced against purchase orders and goods receipt notes to perform 3-way matching. Discrepancies required back-and-forth with vendors. Missing documents delayed payment runs. Month-end close took 15 or more days — a painful cycle that repeated every month with no relief in sight.

The leadership team knew AI could help. What they needed was a system that actually worked in their messy, multi-format, multi-vendor reality — not a proof of concept that only handled clean PDFs.

## What We Built

Three interconnected automated workflows that handle the entire invoice lifecycle from submission to approval.

### Workflow 1: Invoice Collection

Vendors submit invoices through a structured form, or forward emails to a dedicated invoice inbox. The system accepts PDFs, images, and attachments without requiring vendors to change their existing behavior. An IMAP trigger monitors the inbox continuously and routes new documents into the processing pipeline.

### Workflow 2: AI OCR and Classification

Every document passes through Gemini 2.5 Pro, which extracts all relevant fields: vendor name, invoice number, date, line items, quantities, tax amounts, GSTIN, and totals. The model classifies each document by type — Tax Invoice, Utility Bill, Transport Invoice, or Manpower Bill — and validates the extracted GSTIN against the vendor master.

This step handles the hardest part: documents with no consistent layout, poor scan quality, or partial information. The model returns structured JSON, not raw text, making downstream processing reliable.

### Workflow 3: Reconciliation Engine

The extracted data feeds a 6-check matching engine:

1. **Vendor verification** — Supplier exists in approved vendor master
2. **Amount validation** — Invoice total matches line item sum
3. **Quantity check** — Quantities match the associated Purchase Order
4. **Tax validation** — GST components are correctly calculated and applied
5. **PO validity** — Purchase Order exists, is open, and has sufficient remaining value
6. **GRN verification** — Goods Receipt Note confirms delivery before payment is triggered

Invoices that pass all six checks route automatically for payment processing. Exceptions are flagged with specific failure reasons and routed to the appropriate team member for human review. Every outcome — approved, flagged, or rejected — triggers an email notification to the vendor and internal team.

## System Architecture

The data flow moves through discrete, auditable stages:

**Vendor Form or Email Inbox** receives the invoice document. A webhook or IMAP trigger fires immediately on receipt. The document is sent to the **AI OCR Agent**, which calls Gemini 2.5 Pro for extraction and classification. A **Document Router** handles type-specific processing rules. Success or failure notifications go to the vendor. Approved documents enter the **Reconciliation Engine**, which performs the PO lookup and GRN check before running all six validation checks. The final result — reconciled or exception — triggers the appropriate email and updates the central **Invoice Tracker** in Google Sheets with status, timestamps, and any failure notes.

Every step is logged. The tracker gives the finance team a live view of every invoice in the system.

## Results

**Processing time:** 15 days reduced to 2 days for the full monthly cycle.

**Manual effort:** Estimated 80% reduction in hours spent on invoice data entry and initial matching.

**Accuracy:** Automated GSTIN validation and tax calculation checks catch mismatches that were previously missed during manual review — reducing downstream payment errors.

**Vendor experience:** Vendors receive automated acknowledgment and status updates, reducing inbound queries to the finance team.

**Scalability:** The system handles any invoice volume without additional headcount. A month with 200 invoices costs the same in staff time as a month with 500.

## What Leadership Can Present

"We deployed AI-powered invoice automation that reduced our processing cycle from 15 days to 2 days, eliminated manual data entry for 90% of invoices, and automated 3-way matching with a 6-check reconciliation engine. The system handles invoices in any format — PDF, scan, or WhatsApp image — and routes exceptions automatically. Our finance team now focuses on exceptions and vendor relationships rather than data entry."
