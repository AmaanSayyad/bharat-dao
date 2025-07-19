import React, { useRef } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

const TokenInfo = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 bg-gray-50 relative" id="token" ref={sectionRef}>
      <div className="absolute -top-20 right-0 w-72 h-72 bg-pulse-50 rounded-full opacity-60 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-gray-100 rounded-full opacity-70 blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="flex items-center gap-4 mb-8">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">06</span>
            <span>$BDAO Token</span>
            <span className="inline-flex items-center justify-center ml-2 px-2 py-0.5 rounded-full bg-green-500 text-white text-xs font-medium">LIVE</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="section-title mb-6">The Revolution Is Tokenized</h2>
            <p className="text-lg text-gray-700 mb-6">
              We've officially launched $BDAO - Bharat DAO's Community Token on Solana. 
              <span className="font-bold text-pulse-600"> This isn't just another token. It's your entry ticket to India's Web3 revolution.</span>
            </p>
            
            <div className="bg-gradient-to-r from-pulse-600 to-pulse-700 p-6 rounded-xl mb-8 text-white">
              <h3 className="text-xl font-bold mb-3">$BDAO Is Now Live!</h3>
              <p className="mb-4">Available on:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <a 
                  href="https://pump.fun/advanced/coin/D9achTmEniiy8SXFzo1UmhJxL74uuCckZTMVnxsupump" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm rounded-lg p-3 flex items-center justify-center hover:bg-white/30 transition-colors group"
                >
                  <div className="text-center">
                    <div className="text-lg font-bold mb-1">pump.fun</div>
                    <div className="text-xs flex items-center justify-center">
                      Trade Now
                      <ExternalLink className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </a>
                <a 
                  href="https://dexscreener.com/solana/D9achTmEniiy8SXFzo1UmhJxL74uuCckZTMVnxsupump" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm rounded-lg p-3 flex items-center justify-center hover:bg-white/30 transition-colors group"
                >
                  <div className="text-center">
                    <div className="text-lg font-bold mb-1">Dexscreener</div>
                    <div className="text-xs flex items-center justify-center">
                      View Chart
                      <ExternalLink className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </a>
                <a 
                  href="https://www.dextools.io/app/en/solana/pair-explorer/D9achTmEniiy8SXFzo1UmhJxL74uuCckZTMVnxsupump?t=1752696067932" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm rounded-lg p-3 flex items-center justify-center hover:bg-white/30 transition-colors group"
                >
                  <div className="text-center">
                    <div className="text-lg font-bold mb-1">DEXTools</div>
                    <div className="text-xs flex items-center justify-center">
                      View Pair
                      <ExternalLink className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </a>
                <a 
                  href="https://birdeye.so/token/D9achTmEniiy8SXFzo1UmhJxL74uuCckZTMVnxsupump?chain=solana" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm rounded-lg p-3 flex items-center justify-center hover:bg-white/30 transition-colors group"
                >
                  <div className="text-center">
                    <div className="text-lg font-bold mb-1">Birdeye</div>
                    <div className="text-xs flex items-center justify-center">
                      Track Token
                      <ExternalLink className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </a>
                <a 
                  href="https://jup.ag/tokens/D9achTmEniiy8SXFzo1UmhJxL74uuCckZTMVnxsupump" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm rounded-lg p-3 flex items-center justify-center hover:bg-white/30 transition-colors group"
                >
                  <div className="text-center">
                    <div className="text-lg font-bold mb-1">Jupiter</div>
                    <div className="text-xs flex items-center justify-center">
                      Swap Now
                      <ExternalLink className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </a>
                <a 
                  href="https://www.geckoterminal.com/solana/pools/D9achTmEniiy8SXFzo1UmhJxL74uuCckZTMVnxsupump" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm rounded-lg p-3 flex items-center justify-center hover:bg-white/30 transition-colors group"
                >
                  <div className="text-center">
                    <div className="text-lg font-bold mb-1">GeckoTerminal</div>
                    <div className="text-xs flex items-center justify-center">
                      View Chart
                      <ExternalLink className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </a>
                <a 
                  href="https://photon-sol.tinyastro.io/en/lp/AFViYUmWmhvhvmhirq3Bzvi2MSCTEHLGLSi5VSutRq5a" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm rounded-lg p-3 flex items-center justify-center hover:bg-white/30 transition-colors group"
                >
                  <div className="text-center">
                    <div className="text-lg font-bold mb-1">Photon</div>
                    <div className="text-xs flex items-center justify-center">
                      Trade Now
                      <ExternalLink className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </a>
                <a 
                  href="https://gmgn.ai/sol/token/D9achTmEniiy8SXFzo1UmhJxL74uuCckZTMVnxsupump" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm rounded-lg p-3 flex items-center justify-center hover:bg-white/30 transition-colors group"
                >
                  <div className="text-center">
                    <div className="text-lg font-bold mb-1">GMGN</div>
                    <div className="text-xs flex items-center justify-center">
                      View Token
                      <ExternalLink className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="bg-pulse-50 border border-pulse-200 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-pulse-700 mb-3">Why $BDAO Will Explode 🚀</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 text-pulse-500 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </div>
                  <span className="font-medium">Already +193% since launch - <span className="font-bold">just the beginning</span></span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-pulse-500 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </div>
                  <span className="font-medium">Zero pre-sale, zero VCs - <span className="font-bold">100% community-driven</span></span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-pulse-500 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </div>
                  <span className="font-medium">Backed by India's fastest growing Web3 community - <span className="font-bold">25 days old (5,000+ members) and exploding</span></span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-pulse-500 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </div>
                  <span className="font-medium">Early holders will be rewarded - <span className="font-bold">don't miss your chance</span></span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Token Details</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Ticker:</span>
                    <span className="font-medium">$BDAO</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Chain:</span>
                    <span className="font-medium">Solana</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Total Supply:</span>
                    <span className="font-medium">1,000,000,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Platform:</span>
                    <span className="font-medium">pump.fun</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Launch Type:</span>
                    <span className="font-medium">Bonding Curve</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="text-gray-600 mb-1 sm:mb-0">Contract Address:</span>
                    <span className="font-medium text-sm break-all">D9achTmEniiy8SXFzo1UmhJxL74uuCckZTMVnxsupump</span>
                  </li>
                </ul>
              </div>
              
              {/* Litepaper Download Section */}
              <div className="bg-gradient-to-r from-pulse-50 to-white p-6 rounded-xl shadow-sm border border-pulse-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">Bharat DAO Litepaper</h3>
                  <span className="bg-pulse-100 text-pulse-700 text-xs font-medium px-2.5 py-1 rounded">DOCS</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Learn more about our vision, tokenomics, and roadmap in our official litepaper.
                </p>
                <a 
                  href="https://docs.google.com/document/d/1KYFU6vpxaOfv-XEzedd5ePPmGhnxnA1wHjezJ5EE5fk/edit?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 bg-pulse-600 hover:bg-pulse-700 text-white py-3 px-4 rounded-lg transition-colors w-full sm:w-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  View Litepaper
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Token Utility</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-3 text-pulse-500 flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Governance participation in Bharat DAO proposals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 text-pulse-500 flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Access to token-gated Discord channels and content</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 text-pulse-500 flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Participation in exclusive meme contests and raids</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 text-pulse-500 flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Early access to partnerships and protocol opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <a 
              href="#token" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-primary group flex items-center justify-center w-full sm:w-auto text-center text-lg font-bold py-5"
            >
              BUY $BDAO NOW - DON'T MISS OUT
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            
            <p className="mt-4 text-sm font-medium text-pulse-600">
              * Early buyers have already seen +1100% gains. The next 10,000x is loading.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-elegant">
            <div className="mb-6 border-b pb-4">
              <h3 className="text-2xl font-semibold mb-2">Token Metrics</h3>
              <div className="flex justify-between items-center">
                <p className="text-gray-600">Live data from pump.fun</p>
                <p className="text-xs text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">Current Market Cap</div>
                <div className="text-2xl font-semibold">$15,200</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">24h Change</div>
                  <div className="text-xl font-semibold text-green-500">+82.5%</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">All Time Change</div>
                  <div className="text-xl font-semibold text-green-500">+193.7%</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">24h Volume</div>
                  <div className="text-xl font-semibold">$118,450</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">Volume Change</div>
                  <div className="text-xl font-semibold text-green-500">+52.3%</div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">All Time High</div>
                <div className="flex justify-between items-center">
                  <div className="text-xl font-semibold">$52,100</div>
                  <div className="text-sm text-green-500 font-medium">+1100%</div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">Bonding Curve Progress</div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                  <div className="bg-pulse-500 h-2.5 rounded-full" style={{ width: '63%' }}></div>
                </div>
                <div className="text-right text-sm">63%</div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">Team Ownership</div>
                <div className="text-xl font-semibold">4.51%</div>
                <div className="text-xs text-gray-500 mt-1">Fully transparent with no pre-mint</div>
              </div>
            </div>
            
            <div className="mt-8 pt-4 border-t">
              <p className="text-sm text-gray-500 italic">
                Disclaimer: This token is a social token for the Bharat DAO community. It's for culture = capital. 
                It's for vibes and valuations. Always do your own research before investing but we strongly suggest you to buy it.
              </p>
            </div>
          
          
            <div>
            <div className="mt-6 bg-white rounded-2xl p-6 shadow-elegant">
              <h3 className="text-xl font-semibold mb-4">What People Are Saying</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-pulse-500 pl-4 py-1">
                  <p className="text-gray-700 italic">"Just aped in with 5 SOL. This is going to be huge! 🚀🚀🚀"</p>
                  <p className="text-sm text-gray-500 mt-1">@crypto_bull_2023</p>
                </div>
                
                <div className="border-l-4 border-pulse-500 pl-4 py-1">
                  <p className="text-gray-700 italic">"$BDAO is the sleeping giant of Indian Web3. Early holders will be rewarded massively."</p>
                  <p className="text-sm text-gray-500 mt-1">@defi_whale</p>
                </div>
                
                <div className="border-l-4 border-pulse-500 pl-4 py-1">
                  <p className="text-gray-700 italic">"I've been watching $BDAO since launch. The community is insanely active. Bullish!"</p>
                  <p className="text-sm text-gray-500 mt-1">@solana_gems</p>
                </div>
              </div>
            </div>
              
              <div className="mt-4 bg-pulse-50 p-4 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <p className="text-sm font-medium">32 people bought $BDAO in the last hour</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenInfo; 