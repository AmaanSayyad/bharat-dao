import React from "react";

const Newsletter = () => {
  return <section id="newsletter" className="bg-white py-0">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">05</span>
              <span>Connect With Us</span>
            </div>
          </div>
          
          <h2 className="text-5xl font-display font-bold mb-4 text-left">Join the Bharat DAO community</h2>
          <p className="text-xl text-gray-700 mb-10 text-left">
            Stay updated with our latest news, events, and opportunities by following us on social media
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
            <a href="https://discord.gg/F3pHyeP3wq" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" x2="12" y1="8" y2="8"></line><line x1="3.95" x2="8.54" y1="6.06" y2="14"></line><line x1="10.88" x2="15.46" y1="21.94" y2="14"></line></svg>
              <span className="mt-2 font-medium">Discord</span>
            </a>
            <a href="https://x.com/bharat_dao_" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              <span className="mt-2 font-medium">Twitter</span>
            </a>
            <a href="https://t.me/daobharat" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
              <span className="mt-2 font-medium">Telegram</span>
            </a>
            <a href="https://chat.whatsapp.com/HLLdthucrWOAOq7ylUtkVJ" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              <span className="mt-2 font-medium">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default Newsletter;