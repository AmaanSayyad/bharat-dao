import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";

interface JobRoleProps {
  title: string;
  count: number;
  description: string;
}

const JobRole = ({ title, count, description }: JobRoleProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full bg-pulse-100 text-pulse-800 text-xs font-medium">
          {count} {count === 1 ? 'Position' : 'Positions'}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-end">
        <a 
          href="https://discord.com/invite/F3pHyeP3wq" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-pulse-500 hover:text-pulse-600 text-sm font-medium inline-flex items-center"
        >
          Apply Now
          <ArrowRight className="ml-1 w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

const HiringSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const jobRoles: JobRoleProps[] = [
    {
      title: "Community Manager",
      count: 1,
      description: "Lead and grow our vibrant community across Discord, Telegram, and other platforms. Create engagement strategies and manage day-to-day interactions."
    },
    {
      title: "Video Editors",
      count: 1,
      description: "Create compelling video content for social media, educational materials, and promotional campaigns. Experience with motion graphics is a plus."
    },
    {
      title: "Graphic Designers",
      count: 1,
      description: "Design visual assets for social media, website, and marketing materials. Should have experience with branding and Web3 design aesthetics."
    },
    {
      title: "Content Writers",
      count: 2,
      description: "Create engaging content for our blog, social media, and educational resources. Knowledge of Web3, blockchain, and crypto is essential."
    },
    {
      title: "Strategy Specialist",
      count: 1,
      description: "Develop and implement strategic initiatives to grow Bharat Dao's presence and impact in the Web3 ecosystem in India."
    },
    {
      title: "Growth Hacker",
      count: 1,
      description: "Drive user acquisition and engagement through innovative, data-driven growth strategies across multiple channels."
    },
    {
      title: "Podcast Host",
      count: 1,
      description: "Host and produce a regular podcast covering Web3 topics, interviewing industry leaders, and showcasing Indian talent in the blockchain space."
    },
    {
      title: "KOL Relations",
      count: 2,
      description: "Build and maintain relationships with key opinion leaders in the Web3 space to expand Bharat Dao's network and influence."
    }
  ];

  return (
    <section className="py-16 bg-white relative" id="careers" ref={sectionRef}>
      <div className="absolute -top-20 left-0 w-72 h-72 bg-pulse-50 rounded-full opacity-60 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-10 w-64 h-64 bg-gray-100 rounded-full opacity-70 blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="flex items-center gap-4 mb-8">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">07</span>
            <span>We're Hiring</span>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="section-title mb-6">Join Our Team</h2>
          <p className="text-lg text-gray-700 max-w-3xl">
            Our team is expanding! We're looking for passionate individuals to help build the gateway for 1000+ global blockchains to enter and scale in India through mass adoption, community, education & infrastructure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobRoles.map((role, index) => (
            <JobRole 
              key={index}
              title={role.title}
              count={role.count}
              description={role.description}
            />
          ))}
        </div>
        
        <div className="mt-12 bg-gray-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-4">How to Apply</h3>
          <ol className="space-y-4">
            <li className="flex items-start">
              <div className="bg-pulse-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">1</div>
              <div>
                <p className="font-medium">Go to Our Discord:</p>
                <a 
                  href="https://discord.com/invite/F3pHyeP3wq" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-pulse-500 hover:underline"
                >
                  https://discord.com/invite/F3pHyeP3wq
                </a>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-pulse-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">2</div>
              <div>
                <p className="font-medium">Click "create ticket" → Open Ticket and share:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>LinkedIn Profile</li>
                  <li>Portfolio</li>
                  <li>Proof of Work (PoW)</li>
                </ul>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-pulse-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">3</div>
              <p>Don't just DM - we want to see what you've done.</p>
            </li>
            <li className="flex items-start">
              <div className="bg-pulse-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">4</div>
              <p>Early contributors = early rewards.</p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default HiringSection; 