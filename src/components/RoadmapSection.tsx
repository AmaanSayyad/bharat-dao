import React from "react";

const RoadmapSection = () => {
  // Roadmap data with quarters, years, and milestones focused on $BDAO token
  const roadmapItems = [
    {
      id: 1,
      period: "July 2025",
      title: "Token Foundation",
      completed: false,
      milestones: [
        "$BDAO token smart contract audit and deployment",
        "Initial DEX offering and liquidity provision",
        "Minimum 3 Tier-3 exchange listings for $BDAO"
      ]
    },
    {
      id: 2,
      period: "Aug 2025",
      title: "Ecosystem Development",
      completed: false,
      milestones: [
        "Staking program launch with tiered rewards",
        "Minimum 3 Tier-2 exchange listings for $BDAO",
        "First governance proposals and voting"
      ]
    },
    {
      id: 3,
      period: "Sep 2025",
      title: "Utility Expansion",
      completed: false,
      milestones: [
        "Protocol fee sharing mechanism for $BDAO holders",
        "Integration with major DeFi protocols",
        "Launch of $BDAO-backed grants program"
      ]
    },
    {
      id: 4,
      period: "Oct 2025",
      title: "Global Scaling",
      completed: false,
      milestones: [
        "Minimum 2 Tier-1 exchange listings for $BDAO",
        "DAO treasury diversification strategy",
        "Launch of $BDAO incubator for Indian blockchain startups"
      ]
    }
  ];

  return (
    <section
      className="relative w-full py-10 sm:py-16 bg-gradient-to-b from-white via-pulse-50 to-white overflow-hidden"
      id="roadmap"
    >
      {/* Decorative background blur */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-pulse-100 rounded-full opacity-30 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-pulse-50 rounded-full opacity-40 blur-3xl -z-10"></div>

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16 animate-on-scroll">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">
              04
            </span>
            <span>$BDAO Roadmap</span>
          </div>
          <div className="flex-1 h-[1px] bg-gray-200"></div>
        </div>

        {/* Main content */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6 sm:mb-10 animate-on-scroll">
            <span className="block bg-clip-text text-transparent bg-[url('/text-mask-image.jpg')] bg-cover bg-center">
              The Future of <span className="text-pulse-500">$BDAO Token</span><br className="hidden md:inline" /> 
              Development Roadmap
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-700 font-medium max-w-3xl mb-10 animate-on-scroll">
            Our strategic plan for $BDAO token development and ecosystem growth, focusing on utility, governance, and value creation for token holders.
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-pulse-300 to-pulse-500 rounded-full"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {roadmapItems.map((item, index) => (
                <div 
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row animate-on-scroll ${
                    index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                  </div>
                  
                  {/* Content */}
                  <div className={`pl-16 sm:pl-0 sm:w-1/2 ${
                    index % 2 === 0 ? "sm:pr-12" : "sm:pl-12"
                  }`}>
                    <div className="p-6 rounded-xl shadow-lg bg-gray-50 border-l-4 border-pulse-500">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold px-3 py-1 rounded-full bg-pulse-100 text-pulse-700">
                          {item.period}
                        </span>
                        <span className="text-sm font-medium text-gray-500">
                          Upcoming
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <ul className="space-y-2">
                        {item.milestones.map((milestone, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mt-1 mr-2 text-pulse-500">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                              </svg>
                            </span>
                            <span className="text-gray-700">{milestone}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection; 