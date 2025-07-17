import React from 'react';

const PastEvents: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 relative" id="events">
      <div className="absolute -top-20 right-0 w-72 h-72 bg-pulse-50 rounded-full opacity-60 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-gray-100 rounded-full opacity-70 blur-3xl -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-pulse-50 rounded-full opacity-40 blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="flex items-center gap-4 mb-8 animate-on-scroll">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">11</span>
            <span>Events</span>
          </div>
        </div>
        
        <h2 className="section-title mb-6 animate-on-scroll">Our Past <span className="text-pulse-500">Events</span></h2>
        <p className="text-lg text-gray-700 max-w-3xl mb-12 animate-on-scroll">
          Bharat DAO hosts and participates in various events across India and globally to foster Web3 adoption, 
          build community, and create opportunities for collaboration.
        </p>
        
        {/* Coming Soon Section */}
        <div className="glass-card p-12 text-center mb-12 animate-on-scroll">
          <div className="w-20 h-20 bg-gradient-to-br from-pulse-100 to-pulse-200 rounded-full flex items-center justify-center mx-auto mb-6">
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
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          
          <h3 className="text-2xl font-bold mb-4">Event Gallery Coming Soon</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We're compiling highlights from our past events and meetups. 
            Soon you'll be able to explore our community gatherings, hackathons, 
            and educational workshops from across World.
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center">
            <div className="bg-pulse-50 text-pulse-700 rounded-full px-4 py-2 text-sm font-medium">Meetups</div>
            <div className="bg-pulse-50 text-pulse-700 rounded-full px-4 py-2 text-sm font-medium">Hackathons</div>
            <div className="bg-pulse-50 text-pulse-700 rounded-full px-4 py-2 text-sm font-medium">Workshops</div>
            <div className="bg-pulse-50 text-pulse-700 rounded-full px-4 py-2 text-sm font-medium">Twitter Spaces</div>
            <div className="bg-pulse-50 text-pulse-700 rounded-full px-4 py-2 text-sm font-medium">Community Calls</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastEvents; 