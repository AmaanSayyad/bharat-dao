
import React from "react";

const SpecsSection = () => {
  return (
    <section
      className="relative w-full py-10 sm:py-16 bg-gradient-to-b from-white via-pulse-50 to-white overflow-hidden"
      id="specifications"
    >
      {/* Decorative background blur */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-pulse-100 rounded-full opacity-30 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pulse-50 rounded-full opacity-40 blur-3xl -z-10"></div>

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16 animate-on-scroll">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">
              03
            </span>
            <span>The Problem</span>
          </div>
          <div className="flex-1 h-[1px] bg-gray-200"></div>
        </div>

        {/* Main content */}
        <div className="max-w-5xl pl-0 sm:pl-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold leading-tight mb-6 sm:mb-10 animate-on-scroll">
            <span className="block bg-clip-text text-transparent bg-[url('/text-mask-image.jpg')] bg-cover bg-center">
              India knows the top 100 blockchains.<br className="hidden md:inline" />
              <span className="text-pulse-500">But what about the 900+ others?</span>
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium max-w-3xl mb-6 animate-on-scroll">
            There are hundreds of well-funded, innovative protocols being built globally. Most never reach India, not because of lack of ambition, but because they don’t know <span className="font-semibold text-pulse-500">how to enter</span> or <span className="font-semibold text-pulse-500">where to start</span>.
          </p>
          <div className="flex items-center gap-4 mt-6 animate-on-scroll">
            <svg
              className="w-8 h-8 text-pulse-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12l2 2 4-4" />
            </svg>
            <span className="text-lg sm:text-xl text-gray-800 font-semibold">
              Bharat DAO bridges this gap connecting global blockchains to India’s builders, users, opportunities and market.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
