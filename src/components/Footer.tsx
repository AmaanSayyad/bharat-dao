
import React from "react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return <footer className="w-full bg-white py-6">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-gray-600 text-sm">
              © {currentYear} Bharat DAO ($BDAO). All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <p className="text-gray-600 text-sm">
              Founders: {" "}
              <a href="https://x.com/amaanbiz" target="_blank" rel="noopener noreferrer" className="text-pulse-500 hover:underline">
                Amaan
              </a>{" "}
              & {" "}
              <a href="https://x.com/trivikram214" target="_blank" rel="noopener noreferrer" className="text-pulse-500 hover:underline">
                Trivikram
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
