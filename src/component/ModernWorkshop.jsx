import React, { useState } from 'react';

const ModernWorkshop = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Solidity Bootcamp",
      icon: "🔗",
      description: "Master blockchain development",
      bgColor: "from-indigo-600 to-blue-500",
      shadowColor: "shadow-indigo-500/50"
    },
    {
      id: 2,
      title: "Limited Seats",
      icon: "80",
      description: "Exclusive group of learners",
      bgColor: "from-blue-600 to-indigo-500",
      shadowColor: "shadow-blue-500/50"
    },
    {
      id: 3,
      title: "Swags & Goodies",
      icon: "🎁",
      description: "Take home exclusive merch",
      bgColor: "from-violet-600 to-indigo-500",
      shadowColor: "shadow-violet-500/50"
    },
    {
      id: 4,
      title: "Smart Contract Battle",
      icon: "⚔️",
      description: "Compete with fellow developers",
      bgColor: "from-indigo-600 to-violet-500",
      shadowColor: "shadow-indigo-500/50"
    },
    {
      id: 5,
      title: "Meet Companies",
      icon: "🤝",
      description: "Network with industry leaders",
      bgColor: "from-violet-600 to-blue-500",
      shadowColor: "shadow-violet-500/50"
    },
    {
      id: 6,
      title: "Build dApps",
      icon: "⚡",
      description: "Create decentralized applications",
      bgColor: "from-blue-600 to-violet-500",
      shadowColor: "shadow-blue-500/50"
    }
  ];

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto">
        {/* Enhanced background gradient effect */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.2),transparent_70%)] animate-pulse" />
        </div>

        <div className="text-center mb-16 relative">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-500 via-blue-500 to-violet-500 text-transparent bg-clip-text mb-6 hover:scale-105 transition-transform duration-300">
            BLOCKCHAIN WEEK 2025
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto hover:text-gray-300 transition-colors duration-300">
            Join an exclusive cohort of 80 students for an immersive blockchain development journey. 
            Master Solidity, build dApps, and connect with industry leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`
                absolute inset-0 bg-gradient-to-r ${card.bgColor} rounded-2xl 
                opacity-0 group-hover:opacity-10 transition-opacity duration-500
                blur-xl group-hover:animate-pulse
              `} />
              <div className={`
                relative bg-black/40 rounded-2xl p-8
                backdrop-blur-sm border border-gray-800
                transform transition-all duration-500 ease-out
                ${hoveredCard === card.id ? 'translate-y-[-12px] scale-105' : ''}
                group-hover:border-indigo-500/30 
                group-hover:shadow-2xl ${card.shadowColor}
                hover:bg-black/60
              `}>
                <div className="flex flex-col h-full">
                  <div className={`
                    text-4xl mb-4 transform transition-transform duration-300
                    ${hoveredCard === card.id ? 'scale-110' : ''}
                  `}>{card.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-indigo-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300">
                    {card.description}
                  </p>
                  <div className={`
                    mt-4 inline-flex items-center text-sm font-medium
                    text-transparent bg-gradient-to-r ${card.bgColor} bg-clip-text
                    transition-all duration-300 group-hover:translate-x-2
                  `}>
                    Learn more →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="
            relative px-8 py-4 rounded-xl
            bg-gradient-to-r from-indigo-600 to-violet-600
            text-white font-semibold text-lg
            transform transition-all duration-300
            hover:scale-110 
            hover:shadow-2xl hover:shadow-indigo-500/30
            focus:outline-none focus:ring-2 focus:ring-indigo-500/50
            before:absolute before:inset-0 before:rounded-xl
            before:bg-gradient-to-r before:from-indigo-600 before:to-violet-600
            before:opacity-0 before:transition-opacity hover:before:opacity-50
            overflow-hidden
          ">
            <span className="relative z-10">Join Today</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModernWorkshop;