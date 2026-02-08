import React from 'react';
import { Search, PenTool, Zap, BarChart3, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: '01',
    name: 'Audit',
    description: 'We map your current sales workflow to find where leads drop off and where manual work is slowing you down.',
    icon: Search,
  },
  {
    id: '02',
    name: 'Architect',
    description: 'We design AI improvements that layer onto your existing tools — no rip-and-replace required.',
    icon: PenTool,
  },
  {
    id: '03',
    name: 'Automate',
    description: 'We deploy automation that works with what you already use — WhatsApp, CRM, email, all connected.',
    icon: Zap,
  },
  {
    id: '04',
    name: 'Accelerate',
    description: 'Your upgraded workflow runs 24/7 with AI-suggested improvements, turning leads into revenue on autopilot.',
    icon: BarChart3,
  },
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="scroll-mt-24 py-24 bg-slate-50 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary-600">How It Works</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            From Chaos to Clarity
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            We don't replace your tools — we upgrade how they work together.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.name} className="relative flex flex-col bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-4xl font-bold text-slate-100">{step.id}</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50">
                    <step.icon className="h-5 w-5 text-primary-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>

                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 text-slate-300">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
