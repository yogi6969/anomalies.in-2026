/**
 * Post-build SEO injection script
 * Injects semantic HTML content into the built index.html so that
 * search engine crawlers see actual content, not just an empty <div id="root">
 *
 * Google's crawler CAN execute JS, but:
 * - It deprioritizes JS-rendered content
 * - Bing/Yahoo often can't render SPAs
 * - Having content in HTML is always better for SEO
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const distDir = resolve(process.cwd(), 'dist');
const indexPath = resolve(distDir, 'index.html');

const seoContent = `
    <!-- SEO: Static content for crawlers (hidden when JS renders) -->
    <noscript>
      <style>.seo-content { display: block !important; }</style>
    </noscript>
    <div id="seo-content" style="position:absolute;left:-9999px;top:-9999px;" aria-hidden="true">
      <h1>Your Sales Workflow, Upgraded by AI</h1>
      <p>We plug into your existing sales tools — email, WhatsApp, CRM — and use AI to find what's not working and suggest what will. Built for Indian SMB founders.</p>

      <h2>How It Works</h2>
      <h3>Audit</h3>
      <p>We map your current sales workflow to find where leads drop off and where manual work is slowing you down.</p>
      <h3>Architect</h3>
      <p>We design AI improvements that layer onto your existing tools — no rip-and-replace required.</p>
      <h3>Automate</h3>
      <p>We deploy automation that works with what you already use — WhatsApp, CRM, email, all connected.</p>
      <h3>Accelerate</h3>
      <p>Your upgraded workflow runs 24/7 with AI-suggested improvements, turning leads into revenue on autopilot.</p>

      <h2>Why Anomalies?</h2>
      <h3>Works With Your Stack</h3>
      <p>Integrates with the tools you already use — WhatsApp, your CRM, email, spreadsheets. No migration needed.</p>
      <h3>AI Improvement Engine</h3>
      <p>Our AI analyzes your sales workflow and suggests what to change for better outcomes.</p>
      <h3>Built for India</h3>
      <p>INR pricing, WhatsApp-native workflows, Hinglish-ready messaging. Designed for how Indian businesses actually sell.</p>
      <h3>24/7 Response Engine</h3>
      <p>Never miss an inquiry again. Your customers get instant responses, even after hours.</p>
      <h3>No Rip-and-Replace</h3>
      <p>Keep your CRM, email, and WhatsApp setup. We layer AI on top of what's already working.</p>
      <h3>Outcome-Focused</h3>
      <p>We measure results, not features. Every automation is tied to a business outcome.</p>

      <h2>Ready to Upgrade Your Sales Workflow?</h2>
      <p>Share your biggest bottleneck. We'll show you exactly where AI can improve your existing process.</p>

      <footer>
        <p>Anomalies — Your sales workflow, upgraded by AI.</p>
        <p>AI-powered sales automation for Indian businesses. anomalies.in</p>
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
