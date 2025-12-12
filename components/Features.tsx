import React from 'react';
import { Bot, Clock, Link2, TrendingUp, Target, Lightbulb } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    icon: Bot,
    title: "AI-Powered Architecture",
    description: "Enterprise-grade automation systems built with the latest AI models to handle complex sales workflows at scale."
  },
  {
    icon: Clock,
    title: "24/7 Response Engine",
    description: "Never miss an inquiry again. Your customers get instant responses, even after hours, turning lost leads into revenue."
  },
  {
    icon: Link2,
    title: "Seamless Integration",
    description: "Connects your WhatsApp, CRM, inventory systems, and sales teams into one coordinated revenue engine."
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "50+ distributors and stockists have transformed their daily operations with our transformation approach."
  },
  {
    icon: Target,
    title: "Custom Solutions",
    description: "We don't sell tools. We architect systems tailored to your specific communication bottlenecks and business model."
  },
  {
    icon: Lightbulb,
    title: "Domain Expertise",
    description: "Deep experience with B2B sales operations, WhatsApp workflows, and multi-team collaboration at scale."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="scroll-mt-24 py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Why Anomalies?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Architecting Your Sales Transformation
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            We don't just plug in a chatbot. We rebuild your communication layer to remove friction and accelerate deals.
          </p>
        </div>
        
        <div className="mx-auto max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col group p-6 rounded-2xl bg-slate-50 border border-slate-100 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 group-hover:bg-primary-500 transition-colors">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};