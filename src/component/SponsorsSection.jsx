import React, { useState } from 'react';

const SPONSORS_DATA = [
 
  {
    name: "OpenBuild",
    image: "https://openbuild.xyz/favicon.png",
    color: "from-blue-600 to-indigo-500"
  },
];

const SponsorCard = ({ sponsor, isHovered, onHover, onLeave }) => (
  <div
    className="relative group cursor-pointer"
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
  >
    {/* Glowing background effect */}
    <div className={`
      absolute inset-0 bg-gradient-to-br ${sponsor.color}
      opacity-0 group-hover:opacity-10 transition-all duration-700
      rounded-xl blur-2xl
    `} />

    {/* Card container */}
    <div className={`
      relative bg-black/40 rounded-xl
      backdrop-blur-sm border border-gray-800
      transform transition-all duration-500 ease-out p-4
      ${isHovered ? 'scale-102 translate-y-[-4px]' : 'scale-100'}
      group-hover:border-indigo-500/30
      group-hover:shadow-lg group-hover:shadow-indigo-500/10
    `}>
      {/* Logo container */}
      <div className="relative flex items-center justify-center mb-4">
        <div className={`
          relative w-full h-38
          transform transition-all duration-500
          ${isHovered ? 'scale-110' : 'scale-103'}
        `}>
          <img
            src={sponsor.image}
            alt={sponsor.name}
            className="w-full h-full object-contain transition-all duration-500 group-hover:brightness-110"
          />
        </div>
      </div>

      {/* Text content */}
      <div className="space-y-2">
        <h3 className="text-white text-lg font-semibold text-center">
          {sponsor.name}
        </h3>
        <p className="text-gray-400 text-sm text-center leading-relaxed transition-all duration-300 group-hover:text-gray-300">
          {sponsor.description}
        </p>
      </div>

      {/* Bottom border glow */}
      <div className={`
        absolute bottom-0 left-0 right-0 h-0.5
        bg-gradient-to-r ${sponsor.color}
        opacity-0 group-hover:opacity-100
        transition-all duration-700
      `} />
    </div>
  </div>
);

const SponsorsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 relative">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-blue-500 to-violet-500 text-transparent bg-clip-text">
            Our Sponsors & Supporters 
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join forces with industry leaders shaping the future of blockchain and Web3 technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPONSORS_DATA.map((sponsor, index) => (
            <SponsorCard
              key={index}
              sponsor={sponsor}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="
            px-6 py-3 rounded-xl text-lg
            bg-gradient-to-r from-indigo-600 to-violet-600
            text-white font-semibold
            transform transition-all duration-300
            hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20
            focus:outline-none focus:ring-2 focus:ring-indigo-500/50
          ">
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;