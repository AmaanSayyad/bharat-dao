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
}

const AMASection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const amaEvents: AMAEvent[] = [
    {
      title: "Memes, Mistakes & Making it in Web3",
      description: "Unfiltered. Unhinged. Unmissable.",
      date: "6th July",
      time: "10 PM IST",
      speakers: [
        {name: "Tony (The White Baba)", handle: "@TonyCatoff"},
        {name: "Fardeen Khan", handle: "@thelastknown_"},
        {name: "Trivikram", handle: "@trivikram214"},
      ],
      host: {name: "Bhumi Mishra", handle: "@bhumi_125"},
      link: "https://x.com/i/spaces/1ZkKzYmqVANxv/peek",
      twitterLink: "https://x.com/bharat_dao_/status/1941211138643181760"
    },
    {
      title: "Bharat DAO Ambassador Program",
      description: "$10,000 reward pool - Questions? Doubts? Curious if it's real or just hype? This is your moment to get all the answers- unfiltered, honest, and straight from the team.",
      date: "9th July",
      time: "10 PM IST",
      speakers: [
        {name: "Shagun Oberoi", handle: "@shagunoberoi_"},
        {name: "Shivangi Singh", handle: "@kaafi_shivangi"},
      ],
      host: {name: "Bhumi Mishra", handle: "@bhumi_125"},
      coHost: {name: "Alok", handle: "@alok_inj"},
      link: "https://x.com/i/spaces/1DXxyqRAmMbxM",
      twitterLink: "https://x.com/bharat_dao_/status/1942984759044640777"
    }
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {amaEvents.map((event, index) => (
            <div 
              key={index} 
              className="glass-card p-6 hover-lift animate-on-scroll"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 bg-pulse-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  <Twitter size={14} />
                  <span>TWITTER SPACE</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Calendar size={14} className="text-pulse-500" />
                  <span>{event.date}</span>
                  <Clock size={14} className="text-pulse-500 ml-2" />
                  <span>{event.time}</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{event.title}</h3>
              <p className="text-gray-600 mb-6">{event.description}</p>
              
              <div className="mb-6 bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border border-gray-100">
                <h4 className="text-sm uppercase text-gray-500 mb-3 flex items-center">
                  <span className="w-1.5 h-1.5 bg-pulse-500 rounded-full mr-2"></span>
                  Speakers
                </h4>
                <ul className="space-y-2">
                  {event.speakers.map((speaker, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-pulse-100 flex items-center justify-center mr-3 text-xs font-medium text-pulse-600">
                        {idx + 1}
                      </div>
                      <span className="text-gray-800 font-medium">{speaker.name}</span>
                      <span className="text-pulse-500 ml-2 text-sm">{speaker.handle}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm uppercase text-gray-500 mb-3 flex items-center">
                  <span className="w-1.5 h-1.5 bg-pulse-500 rounded-full mr-2"></span>
                  Hosted by
                </h4>
                <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-pulse-500 text-white flex items-center justify-center mr-3 text-xs font-medium">
                    H
                  </div>
                  <div>
                    <span className="text-gray-800 font-medium block">{event.host.name}</span>
                    <span className="text-pulse-500 text-sm">{event.host.handle}</span>
                  </div>
                </div>
                {event.coHost && (
                  <div className="flex items-center mt-3 bg-gray-50 p-3 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-pulse-400 text-white flex items-center justify-center mr-3 text-xs font-medium">
                      C
                    </div>
                    <div>
                      <span className="text-gray-800 font-medium block">{event.coHost.name}</span>
                      <span className="text-pulse-500 text-sm">{event.coHost.handle}</span>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button 
                  className="bg-pulse-600 hover:bg-pulse-700 text-white button-primary"
                  onClick={() => window.open(event.link, '_blank')}
                >
                  Listen to Recording
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-300 text-gray-700 hover:bg-gray-100 button-secondary"
                  onClick={() => window.open(event.twitterLink, '_blank')}
                >
                  View on Twitter
                  <Twitter className="ml-2 w-4 h-4" />
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