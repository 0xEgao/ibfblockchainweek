import React, { useState, useEffect } from 'react';

const AnimatedBitcoin = () => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const flipInterval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => setIsFlipping(false), 2000);
    }, 4000);
    return () => clearInterval(flipInterval);
  }, []);

  return (
    <div 
      className="cursor-pointer w-40 h-40"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div 
        className="relative w-full h-full"
        style={{
          transform: isFlipping ? 'rotateY(360deg)' : 'rotateY(0deg)',
          transition: 'transform 2s ease-in-out',
          transformStyle: 'preserve-3d'
        }}
      >
        <svg
          viewBox="0 0 100 100"
          className={`w-full h-full ${isHovering ? 'animate-pulse' : ''}`}
        >
          {/* Coin base */}
          <circle
            cx="50"
            cy="50"
            r="45"
            className="fill-yellow-600"
            style={{
              filter: `drop-shadow(0 0 8px rgba(245, 158, 11, ${isHovering ? '0.6' : '0.3'}))`
            }}
          />
          
          {/* Inner circle */}
          <circle
            cx="50"
            cy="50"
            r="40"
            className="fill-yellow-500"
          />
          
          {/* Bitcoin symbol */}
          <path
            d="M60 40C60 36.6863 57.3137 34 54 34H46V46H54C57.3137 46 60 43.3137 60 40Z"
            className="fill-yellow-700"
          />
          <path
            d="M60 60C60 56.6863 57.3137 54 54 54H46V66H54C57.3137 66 60 63.3137 60 60Z"
            className="fill-yellow-700"
          />
          <rect
            x="48"
            y="30"
            width="4"
            height="40"
            className="fill-yellow-700"
          />
          <rect
            x="48"
            y="25"
            width="4"
            height="5"
            className="fill-yellow-700"
          />
          <rect
            x="48"
            y="70"
            width="4"
            height="5"
            className="fill-yellow-700"
          />
          
          {/* Edge highlights */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            className="stroke-yellow-400"
            style={{
              strokeWidth: '1',
              opacity: isHovering ? '0.8' : '0.4'
            }}
          />
        </svg>

        {/* Shine effect */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)',
            opacity: isHovering ? '0.6' : '0.3',
            transition: 'opacity 0.3s ease'
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedBitcoin;