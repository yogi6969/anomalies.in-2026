import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold text-white mb-2">Anomalies</p>
          <p className="text-sm">Architecting your sales transformation.</p>
        </div>
        <p className="text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Anomalies. All rights reserved.
        </p>
      </div>
    </footer>
  );
};