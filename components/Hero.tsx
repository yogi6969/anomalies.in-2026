import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <div className="relative isolate overflow-hidden bg-slate-50 pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pb-32">
      {/* Background Decorative Elements */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div 
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-slate-600 ring-1 ring-slate-900/10 hover:ring-slate-900/20 bg-white/50 backdrop-blur">
              Fixing Sales Operations <span className="font-semibold text-primary-600 ml-1">AI-First</span>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-tight">
            Stop Losing Deals to <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">
              Communication Chaos
            </span>
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
            We architect AI-powered systems that turn your scattered sales processes into 24/7 revenue engines. Seamlessly integrate WhatsApp, CRM, and inventory.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4">
            <button
              onClick={onOpenModal}
              className="w-full sm:w-auto rounded-full bg-primary-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/30 hover:bg-primary-500 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Start a Conversation
              <MessageSquare className="h-4 w-4" />
            </button>
            <a 
              href="#process" 
              className="w-full sm:w-auto text-sm font-semibold leading-6 text-slate-900 flex items-center justify-center gap-1 hover:text-primary-600 transition-colors group"
            >
              Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </div>
  );
};
