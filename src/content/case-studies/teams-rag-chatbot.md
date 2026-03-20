---
title: "Enterprise AI Chatbot — Microsoft Teams Knowledge Base Assistant"
description: "An AI chatbot deployed inside Microsoft Teams that answers employee questions from company SOPs, policies, and HR handbooks using RAG — reducing IT/HR support tickets by 40%."
client: "Enterprise Client (NDA)"
industry: "Manufacturing"
results:
  - "40% reduction in IT/HR support tickets"
  - "Instant answers from 200+ company documents"
  - "Zero hallucination — RAG-grounded responses only"
  - "Deployed in 6 weeks from kickoff"
tags: ["enterprise-chatbots", "teams", "rag", "knowledge-base"]
order: 3
---

## The Challenge

A mid-sized manufacturing company with 2,000+ employees faced a persistent knowledge management problem:

- **IT and HR helpdesks** spent 60% of their time answering the same questions: leave policy, reimbursement process, VPN setup, software request procedure
- **SOPs existed** across 200+ documents — but were scattered across SharePoint, shared drives, and email attachments. Nobody could find them
- **New employee onboarding** took 3-4 weeks because institutional knowledge was trapped in people's heads, not in searchable systems
- **The board** had mandated an AI initiative — the VP of IT needed a visible, low-risk win

## What We Built

### Teams-Native AI Chatbot

An AI assistant deployed as a regular contact inside Microsoft Teams — employees message it like they would message a colleague. No new app to install, no training required, no separate login.

The bot uses Retrieval-Augmented Generation (RAG) to answer questions exclusively from the company's own documents:

- **Document ingestion:** SOPs, HR policies, IT runbooks, product manuals, and FAQ documents are chunked, embedded, and indexed
- **Semantic search:** When an employee asks a question, the system finds the most relevant document sections — not just keyword matches
- **Grounded responses:** The AI generates answers ONLY from retrieved documents. If the answer is not in the knowledge base, it says so — zero hallucination by design
- **Source citations:** Every answer includes a link to the source document, so employees can verify and read the full context

### ERP Query Interface

Beyond document Q&A, the bot can answer structured queries against live systems:

- "What's the status of PO-2024-3847?" → Live Oracle EBS lookup via the ORDS API layer
- "How many open PRs are pending my approval?" → Real-time query with direct links to the approval screen

## Architecture

1. **Microsoft Teams** — The user interface. Employees interact via natural chat
2. **Azure Bot Service (F0 free tier)** — Message routing between Teams and the AI engine
3. **RAG Pipeline** — Document chunking, embedding (via Gemini), and vector search
4. **n8n Orchestration** — Connects the bot to the knowledge base, ERP APIs, and response generation
5. **Gemini AI** — Generates grounded responses from retrieved document context

## Results

**Support ticket reduction:** 40% fewer tickets to IT and HR helpdesks within the first month. The most common questions — leave balance, reimbursement process, VPN troubleshooting — are now handled instantly by the bot.

**Response time:** Employee questions answered in under 5 seconds. Previously, raising a helpdesk ticket and waiting for a human response took 4-24 hours.

**Onboarding acceleration:** New employees reported finding answers to process questions independently within their first week, compared to 3-4 weeks previously.

**Document utilization:** 200+ company documents are now actively queried by employees. Before the bot, most of these documents had not been opened in months.

**Zero training required:** Because the bot lives inside Teams — a tool every employee already uses — adoption was immediate. No change management overhead.

## What the VP Can Present

> "We deployed an AI chatbot inside Microsoft Teams that answers employee questions from our own SOPs and policies — reducing IT/HR support tickets by 40% and cutting new employee onboarding time from 4 weeks to 1 week. The system runs on Azure's free tier and uses RAG to ensure zero hallucination."
