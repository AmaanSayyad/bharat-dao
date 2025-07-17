import React from 'react';

const Partners: React.FC = () => {
  return (
    <section className="py-16 bg-white relative" id="partners">
      <div className="absolute -top-20 left-0 w-72 h-72 bg-pulse-50 rounded-full opacity-60 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-10 w-64 h-64 bg-gray-100 rounded-full opacity-70 blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="flex items-center gap-4 mb-8 animate-on-scroll">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">10</span>
            <span>Partnerships</span>
          </div>
        </div>
        
        <h2 className="section-title mb-6 animate-on-scroll">Our <span className="text-pulse-500">Partners</span></h2>
        <p className="text-lg text-gray-700 max-w-3xl mb-12 animate-on-scroll">
          Bharat DAO is building a strong network of partnerships across the blockchain ecosystem. 
          We collaborate with leading protocols, exchanges, and communities to accelerate India's Web3 adoption.
        </p>
        
        {/* Coming Soon Section */}
        <div className="glass-card p-12 text-center mb-12 animate-on-scroll">
          <div className="w-20 h-20 bg-pulse-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-pulse-600"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          
          <h3 className="text-2xl font-bold mb-4">Partnerships Coming Soon</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We're currently finalizing partnerships with leading protocols, exchanges, and communities in the Web3 space.
            Check back soon to see our growing network of collaborators.
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center">
            <div className="bg-gray-100 rounded-full px-4 py-2 text-gray-600 text-sm font-medium">Protocols</div>
            <div className="bg-gray-100 rounded-full px-4 py-2 text-gray-600 text-sm font-medium">Exchanges</div>
            <div className="bg-gray-100 rounded-full px-4 py-2 text-gray-600 text-sm font-medium">Communities</div>
            <div className="bg-gray-100 rounded-full px-4 py-2 text-gray-600 text-sm font-medium">Media</div>
            <div className="bg-gray-100 rounded-full px-4 py-2 text-gray-600 text-sm font-medium">Developers</div>
          </div>
        </div>
        
        <div className="text-center animate-on-scroll">
          <h3 className="text-xl font-semibold mb-6">Interested in partnering with Bharat DAO?</h3>
          <a 
            href="https://twitter.com/bharat_dao_" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-pulse-600 hover:bg-pulse-700 text-white py-3 px-6 rounded-lg transition-colors"
          >
            Get in Touch
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="ml-2"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners; 