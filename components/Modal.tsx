import React, { useState, useEffect, useRef } from 'react';
import { X, Loader2, CheckCircle, AlertCircle, FileText } from 'lucide-react';
import { FormStatus } from '../types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);
  const [formData, setFormData] = useState({
    email: '',
    company: '',
    whatsapp: '',
    preferWhatsapp: false,
    inquiry: ''
  });
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.SUBMITTING);

    const payload = {
      email: formData.email,
      company: formData.company || 'Not provided',
      whatsapp: formData.whatsapp || 'Not provided',
      preferredChannel: formData.preferWhatsapp ? 'WhatsApp' : 'Email',
      challenge: formData.inquiry,
      timestamp: new Date().toISOString(),
      source: 'anomalies.in',
      stage: 'conversation_starter'
    };

    try {
      const response = await fetch('https://n8n.srv1148691.hstgr.cloud/webhook/cda2f05a-4f2d-4a33-a636-583eb1cbe76f', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (response.ok || response.status === 200) {
        setStatus(FormStatus.SUCCESS);
        setTimeout(() => {
          onClose();
          // Reset form after close animation
          setTimeout(() => {
            setStatus(FormStatus.IDLE);
            setFormData({ 
              email: '', 
              company: '', 
              whatsapp: '', 
              preferWhatsapp: false, 
              inquiry: '' 
            });
          }, 300);
        }, 3500); // Increased time to read success message
      } else {
        throw new Error('Webhook failed');
      }
    } catch (error) {
      console.error(error);
      setStatus(FormStatus.ERROR);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      <div 
        ref={modalRef}
        className="relative w-full max-w-lg transform overflow-hidden rounded-2xl bg-white shadow-2xl transition-all animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 flex-shrink-0">
          <h2 className="text-xl font-semibold text-slate-900">Let's Start a Conversation</h2>
          <button 
            onClick={onClose}
            className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          <div className="mb-6 rounded-lg bg-primary-50 p-4 border border-primary-100">
             <div className="flex items-start gap-3">
               <FileText className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
               <p className="text-sm text-slate-700">
                 Share the sales bottleneck you want to automate. We'll send you <strong>free workflows and blueprints</strong> tailored to your business model—no sales pitch.
               </p>
             </div>
          </div>

          {status === FormStatus.SUCCESS ? (
            <div className="flex flex-col items-center justify-center py-8 text-center animate-in fade-in slide-in-from-bottom-4">
              <div className="mb-4 rounded-full bg-green-100 p-3 text-green-600">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Request Received!</h3>
              <p className="mt-2 text-sm text-slate-500 max-w-xs mx-auto">
                We'll review your bottleneck and email your custom blueprints within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
              </div>

              <div>
                <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Your company (optional)"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="mb-1.5 block text-sm font-medium text-slate-700">
                  WhatsApp Number <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  placeholder="+1 (555) 000-0000"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
                <div className="mt-2 flex items-center">
                  <input
                    id="preferWhatsapp"
                    name="preferWhatsapp"
                    type="checkbox"
                    checked={formData.preferWhatsapp}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 rounded border-slate-300 text-primary-600 focus:ring-primary-600 focus:ring-offset-2"
                  />
                  <label htmlFor="preferWhatsapp" className="ml-2 text-sm text-slate-600 cursor-pointer select-none">
                    Prefer to be contacted via WhatsApp
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="inquiry" className="mb-1.5 block text-sm font-medium text-slate-700">
                  What sales bottleneck do you want to automate? <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="inquiry"
                  name="inquiry"
                  required
                  rows={3}
                  placeholder="e.g., Manual follow-ups, qualifying leads on WhatsApp, checking inventory..."
                  value={formData.inquiry}
                  onChange={handleChange}
                  className="w-full resize-none rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
              </div>

              {status === FormStatus.ERROR && (
                <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4" />
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={status === FormStatus.SUBMITTING}
                className="mt-2 flex w-full items-center justify-center rounded-lg bg-primary-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === FormStatus.SUBMITTING ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Get My Free Blueprints'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};