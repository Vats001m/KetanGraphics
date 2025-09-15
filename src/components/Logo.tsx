import React from 'react';

const Logo = ({ className = "h-8 w-8" }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Main red square */}
      <div className="w-full h-full bg-red-500 relative overflow-hidden">
        {/* Diagonal white lines - matching the card design */}
        <div className="absolute inset-0">
          <div className="absolute top-1 left-1 w-8 h-0.5 bg-white transform rotate-[-35deg] origin-left"></div>
          <div className="absolute top-2 left-1 w-8 h-0.5 bg-white transform rotate-[-35deg] origin-left"></div>
          <div className="absolute top-3 left-1 w-8 h-0.5 bg-white transform rotate-[-35deg] origin-left"></div>
          <div className="absolute top-4 left-1 w-8 h-0.5 bg-white transform rotate-[-35deg] origin-left"></div>
          <div className="absolute top-5 left-1 w-8 h-0.5 bg-white transform rotate-[-35deg] origin-left"></div>
          <div className="absolute top-6 left-1 w-8 h-0.5 bg-white transform rotate-[-35deg] origin-left"></div>
        </div>
      </div>
      
      {/* CMYK color dots on the left - exactly as in the card */}
      <div className="absolute left-[-10px] top-1 flex flex-col space-y-0.5">
        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
        <div className="w-2 h-2 bg-magenta-500 rounded-full"></div>
        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
      </div>
    </div>
  );
};

export default Logo;