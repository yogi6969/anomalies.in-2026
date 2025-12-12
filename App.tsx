import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Process } from './components/Process';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onOpenModal={openModal} />
      
      <main className="flex-grow">
        <Hero onOpenModal={openModal} />
        
        <Process />
        
        <Features />

        {/* CTA Section */}
        <section id="contact" className="scroll-mt-24 relative isolate overflow-hidden bg-slate-900 py-24 sm:py-32">
          {/* Background effects */}
          <div className="absolute top-1/2 left-[20%] -translate-y-1/2 -translate-x-1/2 blur-3xl opacity-20 pointer-events-none">
            <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]" style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}} />
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Fix Your Communication Chaos?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Share your biggest bottleneck and let's explore how we architect solutions that actually work for your business model.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <button
                  onClick={openModal}
                  className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  Start a Conversation
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;