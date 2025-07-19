import React, { useRef } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Calendar, Clock, Twitter } from "lucide-react";

interface AMAEvent {
  title: string;
  description: string;
  date: string;
  time: string;
  speakers: Array<{name: string, handle: string}>;
  host: {name: string, handle: string};
  coHost?: {name: string, handle: string};
  link: string;
  twitterLink: string;
  bannerImage: string;
}

const AMASection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const amaEvents: AMAEvent[] = [
    {
      title: "Everyone's Shilling. Few Are Closing💯",
      description: "Real stories, raw insights, and people who've actually built communities and closed deals in Web3. 🫖 Pull up for chai with Bharat DAO.",
      date: "18th July",
      time: "10:00 PM IST",
      speakers: [
        {name: "Charchit", handle: "@Charchit_WEB3"},
        {name: "Pratibha", handle: "@Pratibha0x"},
        {name: "Xyphor", handle: "@Xyphor0x"},
        {name: "Centroid", handle: "@therealcentroid"},
      ],
      host: {name: "Shagun Oberoi", handle: "@shagunoberoi_"},
      link: "https://x.com/bharat_dao_/status/1946246219392487932",
      twitterLink: "https://x.com/bharat_dao_/status/1946190274545193447",
      bannerImage: "/AMA4.jpeg"
    },
    {
      title: "Too Iconic to Ignore 🔥",
      description: "Bharat DAO x Baddies Call. Not a panel. A power room. 5 women in Web3 sharing what it really takes - the wins, the mess, and everything in between.",
      date: "17th July",
      time: "10 PM IST",
      speakers: [
        {name: "Daavya", handle: "@Daavya_vaishnav"},
        {name: "Medusa", handle: "@MedusaOnchain"},
        {name: "Victorya", handle: "@Justvictorya"},
        {name: "Ifee", handle: "@Ifee_lovee"},
      ],
      host: {name: "Bhumi Mishra", handle: "@bhumi_125"},
      link: "https://x.com/i/spaces/1jMJgkLzWdgJL",
      twitterLink: "https://x.com/bharat_dao_/status/1945497313599697138",
      bannerImage: "/AMA3.jpeg"
    },
    {
      title: "Bharat DAO Ambassador Program 💸",
      description: "$10,000 reward pool - Questions? Doubts? Curious if it's real or just hype? This is your moment to get all the answers- unfiltered, honest, and straight from the team.",
      date: "9th July",
      time: "10 PM IST",
      speakers: [
        {name: "Alok Pandey", handle: "@alok_inj"},
        {name: "Shagun Oberoi", handle: "@shagunoberoi_"},
        {name: "Shivangi Singh", handle: "@kaafi_shivangi"},
      ],
      host: {name: "Bhumi Mishra", handle: "@bhumi_125"},
      link: "https://x.com/i/spaces/1DXxyqRAmMbxM",
      twitterLink: "https://x.com/bharat_dao_/status/1942741493741150685",
      bannerImage: "/AMA2.jpeg"
    },
    {
      title: "Memes, Mistakes & Making it in Web3 🎯",
      description: "Unfiltered. Unhinged. Unmissable.",
      date: "6th July",
      time: "10 PM IST",
      speakers: [
        {name: "Tony Klor", handle: "@TonyCatoff"},
        {name: "Fardeen Khan", handle: "@thelastknown_"},
        {name: "Trivikram Tiwari", handle: "@trivikram214"},
      ],
      host: {name: "Bhumi Mishra", handle: "@bhumi_125"},
      link: "https://x.com/i/spaces/1ZkKzYmqVANxv/peek",
      twitterLink: "https://x.com/bharat_dao_/status/1941211138643181760",
      bannerImage: "/AMA1.jpeg"
    },
  ];

  return (
    <section id="ama" className="py-16 bg-white relative" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute -top-20 right-0 w-72 h-72 bg-pulse-50 rounded-full opacity-60 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-gray-100 rounded-full opacity-70 blur-3xl -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-pulse-50 rounded-full opacity-40 blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="flex items-center gap-4 mb-8 animate-on-scroll">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">08</span>
            <span>Twitter Spaces</span>
          </div>
        </div>
        
        <h2 className="section-title mb-6 animate-on-scroll">Previous <span className="text-pulse-500">AMAs</span></h2>
        <p className="text-lg text-gray-700 max-w-3xl mb-12 animate-on-scroll">
          Join our community discussions and stay updated with the latest developments in Bharat DAO. Our Twitter Spaces feature industry experts, community leaders, and team members sharing insights and answering your questions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amaEvents.map((event, index) => (
            <div 
              key={index} 
              className="glass-card overflow-hidden hover-lift animate-on-scroll flex flex-col"
            >
              {/* Banner Image */}
              <div className="w-full h-40 overflow-hidden">
                <img 
                  src={event.bannerImage} 
                  alt={`${event.title} banner`} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "/placeholder.svg";
                  }}
                />
              </div>
              
              <div className="p-4 flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 bg-pulse-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    <Twitter size={12} />
                    <span>TWITTER SPACE</span>
                  </div>
                </div>
                
                {/* Date and Time - Enhanced Styling */}
                <div className="bg-gradient-to-r from-pulse-50 to-gray-50 p-2 rounded-lg mb-3 flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <Calendar size={14} className="text-pulse-600 mr-1" />
                    <div>
                      <span className="text-gray-700 font-semibold">{event.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="text-pulse-600 mr-1" />
                    <div>
                      <span className="text-gray-700 font-semibold">{event.time}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-gray-800">{event.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{event.description}</p>
                
                <div className="mb-4 bg-gradient-to-br from-gray-50 to-white p-3 rounded-lg border border-gray-100">
                  <h4 className="text-xs uppercase text-gray-500 mb-2 flex items-center">
                    <span className="w-1.5 h-1.5 bg-pulse-500 rounded-full mr-2"></span>
                    Speakers
                  </h4>
                  <ul className="space-y-1">
                    {event.speakers.map((speaker, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-pulse-100 flex items-center justify-center mr-2 text-xs font-medium text-pulse-600">
                          {idx + 1}
                        </div>
                        <span className="text-gray-800 font-medium text-sm">{speaker.name}</span>
                        <a 
                          href={`https://x.com/${speaker.handle.replace('@', '')}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-pulse-500 ml-1 text-xs hover:text-pulse-700 transition-colors"
                        >
                          {speaker.handle}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-xs uppercase text-gray-500 mb-2 flex items-center">
                    <span className="w-1.5 h-1.5 bg-pulse-500 rounded-full mr-2"></span>
                    Hosted by
                  </h4>
                  <div className="flex items-center bg-gray-50 p-2 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-pulse-500 text-white flex items-center justify-center mr-2 text-xs font-medium">
                      H
                    </div>
                    <div>
                      <span className="text-gray-800 font-medium block text-sm">{event.host.name}</span>
                      <a 
                        href={`https://x.com/${event.host.handle.replace('@', '')}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-pulse-500 text-xs hover:text-pulse-700 transition-colors"
                      >
                        {event.host.handle}
                      </a>
                    </div>
                  </div>
                  {event.coHost && (
                    <div className="flex items-center mt-2 bg-gray-50 p-2 rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-pulse-400 text-white flex items-center justify-center mr-2 text-xs font-medium">
                        C
                      </div>
                      <div>
                        <span className="text-gray-800 font-medium block text-sm">{event.coHost.name}</span>
                        <a 
                          href={`https://x.com/${event.coHost.handle.replace('@', '')}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-pulse-500 text-xs hover:text-pulse-700 transition-colors"
                        >
                          {event.coHost.handle}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex flex-col gap-2 p-4 pt-0 mt-auto">
                <Button 
                  className="bg-pulse-600 hover:bg-pulse-700 text-white button-primary text-sm py-1"
                  onClick={() => window.open(event.link, '_blank')}
                >
                  Listen to Recording
                  <ArrowRight className="ml-2 w-3 h-3" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-300 text-gray-700 hover:bg-gray-100 button-secondary text-sm py-1"
                  onClick={() => window.open(event.twitterLink, '_blank')}
                >
                  View on Twitter
                  <Twitter className="ml-2 w-3 h-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-sm animate-on-scroll">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-pulse-500 text-white flex items-center justify-center mr-4">
              <Twitter size={20} />
            </div>
            <h3 className="text-2xl font-semibold">Upcoming Twitter Spaces</h3>
          </div>
          <p className="text-gray-600 mb-6 pl-14">Stay tuned for our upcoming AMAs and community events. Follow us on Twitter to get notified when we go live and join the conversation in real-time.</p>
          <div className="pl-14">
            <Button 
              className="bg-pulse-600 hover:bg-pulse-700 text-white button-primary"
              onClick={() => window.open('https://twitter.com/bharat_dao_', '_blank')}
            >
              Follow us on Twitter
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AMASection; 