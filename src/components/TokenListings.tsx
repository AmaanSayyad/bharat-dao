import React from 'react';

interface ListingPlatform {
  name: string;
  logo: string;
  url: string;
  isLive?: boolean;
}

const TokenListings: React.FC = () => {
  const platforms: ListingPlatform[] = [
    {
      name: "pump.fun",
      logo: "/pumpfun-logo.png",
      url: "https://pump.fun/advanced/coin/D9achTmEniiy8SXFzo1UmhJxL74uuCckZTMVnxsupump",
      isLive: true
    },
    {
      name: "Dexscreener",
      logo: "/dexscreener-logo.png",
      url: "https://dexscreener.com/solana/D9achTmEniiy8SXFzo1UmhJxL74uuCckZTMVnxsupump",
      isLive: true
    },

    {
      name: "DEXTools",
      logo: "/dextools-logo.png",
      url: "https://www.dextools.io/app/en/solana/pair-explorer/D9achTmEniiy8SXFzo1UmhJxL74uuCckZTMVnxsupump?t=1752696067932",
      isLive: true
    },
    {
      name: "Birdeye",
      logo: "/birdeye.png",
      url: "https://birdeye.so/token/D9achTmEniiy8SXFzo1UmhJxL74uuCckZTMVnxsupump?chain=solana",
      isLive: true
    },
    {
      name: "Jupiter",
      logo: "/jupiter-logo.png",
      url: "https://jup.ag/tokens/D9achTmEniiy8SXFzo1UmhJxL74uuCckZTMVnxsupump",
      isLive: true
    },
    {
      name: "CoinGecko",
      logo: "/coingecko-logo.png",
      url: "https://www.coingecko.com/en/coins/bharat-dao"
    },
    {
      name: "CoinMarketCap",
      logo: "/coinmarketcap-logo.svg",
      url: "https://coinmarketcap.com/currencies/bharat-dao/"
    },
    {
      name: "WEEX",
      logo: "/weex-logo.png",
      url: "https://pump.fun/advanced/coin/D9achTmEniiy8SXFzo1UmhJxL74uuCckZTMVnxsupump"
    },
    {
      name: "Coinstore",
      logo: "/coinstore-logo.png",
      url: "https://dexscreener.com/solana/D9achTmEniiy8SXFzo1UmhJxL74uuCckZTMVnxsupump"
    },
    {
      name: "BitMart",
      logo: "/bitmart-logo.png",
      url: "https://coinmarketcap.com/currencies/bharat-dao/"
    },
    {
      name: "Kucoin",
      logo: "/kucoin-logo.png",
      url: "https://pump.fun/advanced/coin/D9achTmEniiy8SXFzo1UmhJxL74uuCckZTMVnxsupump"
    },
    {
      name: "Bitget",
      logo: "/bitget-logo.png",
      url: "https://dexscreener.com/solana/D9achTmEniiy8SXFzo1UmhJxL74uuCckZTMVnxsupump"
    },
    {
      name: "Mexc",
      logo: "/mexc-logo.png",
      url: "https://www.coingecko.com/en/coins/bharat-dao"
    },
    {
      name: "Gate",
      logo: "/gate.io-logo.png",
      url: "https://coinmarketcap.com/currencies/bharat-dao/"
    },
    {
      name: "OKX",
      logo: "/okx-logo.jpg",
      url: "https://dexscreener.com/solana/D9achTmEniiy8SXFzo1UmhJxL74uuCckZTMVnxsupump"
    },
    {
      name: "Binance",
      logo: "/Binance_Logo.png",
      url: "https://www.coingecko.com/en/coins/bharat-dao"
    },
    {
      name: "BingX",
      logo: "/Bingx-logo.png",
      url: "https://coinmarketcap.com/currencies/bharat-dao/"
    },
    {
      name: "Coinbase",
      logo: "/coinbase-logo.png",
      url: "https://dexscreener.com/solana/D9achTmEniiy8SXFzo1UmhJxL74uuCckZTMVnxsupump"
    },
    {
      name: "HTX",
      logo: "/HTX_logo.png",
      url: "https://coinmarketcap.com/currencies/bharat-dao/"
    },
    {
      name: "ByBit",
      logo: "/Bybit-logo.png",
      url: "https://www.coingecko.com/en/coins/bharat-dao"
    }
  ];

  return (
    <section className="py-16 bg-white relative">
      <div className="absolute -top-20 left-0 w-72 h-72 bg-pulse-50 rounded-full opacity-60 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-10 w-64 h-64 bg-gray-100 rounded-full opacity-70 blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="flex items-center gap-4 mb-8">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">09</span>
            <span>Listed On</span>
          </div>
        </div>
        
        <h2 className="section-title mb-6">Buy & Track $BDAO <span className="text-pulse-500">Everywhere</span></h2>
        <p className="text-lg text-gray-700 max-w-3xl mb-8">
          $BDAO is now listed and our team is working on listing it on major tracking platforms and DEXs/ CEXs. Follow our token's performance and stay updated with the latest market data from your preferred platform.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {platforms.map((platform, index) => (
            <a 
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group hover-lift"
            >
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md p-3 w-full flex items-center justify-center h-20 transition-all duration-300 border border-gray-100 relative">
                {platform.isLive && (
                  <div className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></div>
                )}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-white/80 backdrop-blur-sm transition-opacity duration-300 rounded-lg">
                  <span className="text-pulse-600 font-medium text-sm">View on {platform.name}</span>
                </div>
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src={platform.logo} 
                    alt={`${platform.name} logo`} 
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Don't see your favorite platform? We're constantly expanding our listings.
          </p>
          <a 
            href="https://twitter.com/bharat_dao_" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-pulse-600 font-medium hover:text-pulse-700 transition-colors"
          >
            Follow us on Twitter for listing announcements
          </a>
        </div>
      </div>
    </section>
  );
};

export default TokenListings; 