import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen 
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2 group">
              <span className={`text-2xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-primary-600' : 'text-primary-600'}`}>
                Anomalies
              </span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#process" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">How it Works</a>
              <a href="#features" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Features</a>
              <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Contact</a>
              <button 
                onClick={onOpenModal}
                className="rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                Get Started
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-primary-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
             <a 
              href="#process" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-600"
            >
              How it Works
            </a>
            <a 
              href="#features" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-600"
            >
              Features
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-600"
            >
              Contact
            </a>
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenModal();
              }}
              className="mt-4 block w-full rounded-md bg-primary-600 px-3 py-3 text-center text-base font-medium text-white hover:bg-primary-700"
            >
              Start Conversation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};