/**
 * Post-build SEO injection script
 * Injects semantic HTML content into the built index.html so that
 * search engine crawlers see actual content, not just an empty <div id="root">
 *
 * Google's crawler CAN execute JS, but:
 * - It deprioritizes JS-rendered content
 * - Bing/Yahoo often can't render SPAs
 * - Having content in HTML is always better for SEO
 *
 * Approach: visible-to-noscript via <noscript> + clip-based hiding for JS clients.
 * Content is IDENTICAL to what React renders to avoid any cloaking risk.
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const distDir = resolve(process.cwd(), 'dist');
const indexPath = resolve(distDir, 'index.html');

const seoContent = `
    <!-- SEO: Static content for non-JS crawlers and Google bot fallback -->
    <noscript>
      <style>
        #seo-content { clip: auto !important; height: auto !important; overflow: visible !important; position: static !important; width: auto !important; }
      </style>
    </noscript>
    <div id="seo-content" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);">
      <h1>AI Sales Automation for Indian Businesses — Anomalies</h1>
      <p>We plug into your existing sales tools — email, WhatsApp, CRM — and use AI to find what's not working and fix it. Built for Indian SMB founders. No rip-and-replace.</p>

      <h2>How Our AI Sales Automation Works</h2>
      <h3>Step 1: Audit Your Sales Workflow</h3>
      <p>We map your current sales workflow to find where leads drop off and where manual work is slowing you down. Our AI sales audit identifies the highest-impact automation opportunities for your Indian business.</p>
      <h3>Step 2: Architect AI Improvements</h3>
      <p>We design AI improvements that layer onto your existing tools — no rip-and-replace required. Whether you use WhatsApp, a CRM, or spreadsheets, we build automation that fits your workflow.</p>
      <h3>Step 3: Automate Your Sales Process</h3>
      <p>We deploy automation that works with what you already use — WhatsApp, CRM, email, all connected. Indian SMBs see faster lead response times and fewer manual follow-ups.</p>
      <h3>Step 4: Accelerate Revenue</h3>
      <p>Your upgraded workflow runs 24/7 with AI-suggested improvements, turning leads into revenue on autopilot. Never miss an inquiry again — even after business hours.</p>

      <h2>Why Indian SMBs Choose Anomalies for Sales Automation</h2>
      <h3>Works With Your Existing Stack</h3>
      <p>Integrates with the tools you already use — WhatsApp Business, your CRM, email, spreadsheets. No migration needed. AI sales automation that fits into your current workflow.</p>
      <h3>AI Improvement Engine</h3>
      <p>Our AI analyzes your sales workflow and suggests what to change for better outcomes — from follow-up timing to WhatsApp message content optimized for Indian buyers.</p>
      <h3>Built for India — INR Pricing, WhatsApp-Native</h3>
      <p>INR pricing, WhatsApp-native workflows, Hinglish-ready messaging. Designed for how Indian businesses actually sell. We understand the Indian SMB sales process.</p>
      <h3>24/7 Automated Response Engine</h3>
      <p>Never miss an inquiry again. Your customers get instant responses on WhatsApp and email, even after hours, turning lost leads into revenue. Automated sales for Indian businesses that never sleep.</p>
      <h3>No Rip-and-Replace — Keeps Your Existing Tools</h3>
      <p>Keep your CRM, email, and WhatsApp setup. We layer AI on top of what's already working — no painful migrations. The most cost-effective AI sales automation for Indian SMBs.</p>
      <h3>Outcome-Focused AI Automation</h3>
      <p>We measure results, not features. Every automation is tied to a business outcome — more replies, faster closes, fewer drop-offs. AI sales automation that pays for itself.</p>

      <h2>Frequently Asked Questions About AI Sales Automation for India</h2>
      <h3>What is AI sales automation for Indian businesses?</h3>
      <p>AI sales automation for Indian businesses means using artificial intelligence to handle repetitive sales tasks — WhatsApp follow-ups, lead qualification, CRM updates — so your team can focus on closing deals. Anomalies integrates with your existing tools without requiring platform migration.</p>
      <h3>How does WhatsApp CRM automation work?</h3>
      <p>WhatsApp CRM automation connects your WhatsApp Business account to your CRM. Every conversation is logged, leads are qualified automatically, and follow-ups are sent on schedule — in Hinglish or English, in INR context, designed for Indian buyer behavior.</p>
      <h3>Do I need to replace my existing sales tools?</h3>
      <p>No. Anomalies layers AI automation on top of your existing tools — WhatsApp, your CRM, email, and spreadsheets. There's no migration required. We work with what you already have.</p>
      <h3>How do I get started with Anomalies AI sales automation?</h3>
      <p>Share your biggest sales bottleneck on our website. We'll send you free automation blueprints tailored to your business within 24 hours — no sales pitch, no commitment required.</p>

      <h2>Get Free AI Sales Automation Blueprints for Your Business</h2>
      <p>Share your biggest sales bottleneck. We'll design a custom AI automation workflow for your Indian SMB and send you the blueprints free within 24 hours. No commitment, no sales pitch — just practical automation you can implement immediately.</p>

      <footer>
        <p>Anomalies — AI Sales Automation for Indian Businesses</p>
        <p>AI-powered sales workflow automation built for Indian SMBs. WhatsApp automation, CRM integration, lead follow-up automation. anomalies.in</p>
      </footer>
    </div>`;

let html = readFileSync(indexPath, 'utf-8');

// Inject SEO content right after <div id="root"></div>
html = html.replace(
  '<div id="root"></div>',
  `<div id="root"></div>${seoContent}`
);

writeFileSync(indexPath, html);
console.log('✅ SEO content injected into dist/index.html');
