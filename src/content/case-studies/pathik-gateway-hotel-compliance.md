---
title: "Pathik Gateway — Hotel Police Registration Compliance System"
description: "A multi-tenant SaaS platform automating Gujarat hotel police registration compliance. Digital guest verification, automated form submission, and real-time compliance tracking."
client: "Multi-Hotel Group"
industry: "Hospitality"
results:
  - "Police registration: 15 min → 2 min per guest"
  - "100% compliance rate across properties"
  - "Multi-tenant: single system serves all hotels"
  - "Zero missed submissions"
tags: ["compliance", "hospitality", "saas", "automation"]
order: 4
---

## The Challenge

Hotels in Gujarat are legally required to register every guest with the local police station within hours of check-in. The process was entirely manual:

- **Front desk staff** filled out paper Form C for every guest, recording passport/ID details, arrival time, and stay duration
- **Daily submissions** to the police station required physical visits or manual data entry into the police portal
- **Compliance tracking** was non-existent — hotels discovered missed submissions only when police inspectors raised complaints
- **Multi-property groups** had no centralised view of compliance status across their hotels
- **Peak season** (weddings, festivals) meant 50-100 check-ins per day per property — staff could not keep up with manual registration

The penalty for non-compliance: fines, license risk, and reputational damage.

## What We Built

### Multi-Tenant Compliance Platform

Pathik Gateway is a cloud-hosted platform that automates the entire police registration workflow:

- **Digital guest capture:** Front desk staff enter guest details into a simple web form — ID type, number, photo, arrival/departure dates
- **Automated validation:** GSTIN and ID number format validation before submission
- **Police portal integration:** Automated form submission to the Gujarat police registration system
- **Real-time dashboard:** Property managers see compliance status across all hotels — submitted, pending, flagged
- **Multi-tenant architecture:** A single Pathik Gateway instance serves multiple hotels, each with isolated data and separate admin access

### Compliance Monitoring

- **Zero-miss guarantee:** Every check-in triggers a registration workflow. If submission fails (network issue, portal downtime), the system retries and alerts the manager
- **Audit trail:** Complete record of every registration — when captured, when submitted, submission confirmation number
- **Daily compliance report:** Automated email to property managers showing registration completion rate

## Architecture

1. **Supabase** — Multi-tenant database with row-level security per hotel
2. **Web Application** — Responsive form for front desk use on tablets and desktops
3. **n8n Workflows** — Automated submission to police portal, retry logic, notification system
4. **Google Sheets** — Backup data store and reporting layer for property managers
5. **Google Forms** — Alternative intake for properties that prefer form-based entry

## Results

**Registration time:** Reduced from 15 minutes per guest (manual Form C + portal entry) to 2 minutes (digital capture + automated submission).

**Compliance rate:** 100% across all connected properties. Zero missed submissions since deployment — compared to an estimated 10-15% miss rate under the manual process.

**Staff productivity:** Front desk staff reclaimed 2-3 hours per day previously spent on registration paperwork. Time redirected to guest service.

**Multi-property visibility:** Property managers can see compliance status across all hotels from a single dashboard — previously impossible without calling each front desk individually.

**Audit readiness:** Complete digital trail of every registration. Police inspections now take minutes instead of hours of paper-digging.

## What the VP Can Present

> "We deployed an automated police registration system across our hotel properties that reduced per-guest registration from 15 minutes to 2 minutes, achieved 100% compliance rate, and gave us real-time visibility across all properties — eliminating the compliance risk that previously required dedicated staff at each location."
