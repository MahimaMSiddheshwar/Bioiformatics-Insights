import React from 'react';

const DNAHelix: React.FC = () => {
  return (
    <>
      <style>{`
        @keyframes rotate {
          from { transform: rotateY(0deg) rotateX(15deg); }
          to { transform: rotateY(360deg) rotateX(15deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .dna-helix {
          transform-style: preserve-3d;
          animation: rotate 8s linear infinite, float 3s ease-in-out infinite;
        }
        
        .dna-strand {
          position: absolute;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }
        
        .dna-base {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .backbone {
          position: absolute;
          width: 4px;
          height: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 2px;
        }
      `}</style>
      <div className="relative w-32 h-32 md:w-48 md:h-48">
      
      <div className="dna-helix relative w-full h-full">
        {/* DNA Backbone */}
        <div className="backbone bg-gradient-to-b from-emerald-400 to-cyan-500" 
             style={{ transform: 'translateX(-50%) translateZ(-20px)' }} />
        <div className="backbone bg-gradient-to-b from-emerald-400 to-cyan-500" 
             style={{ transform: 'translateX(-50%) translateZ(20px)' }} />
        
        {/* DNA Bases - First strand */}
        <div className="dna-strand">
          <div className="dna-base bg-red-500" style={{ top: '10%', transform: 'translateX(-50%) translateZ(15px) rotateY(0deg)' }} />
          <div className="dna-base bg-blue-500" style={{ top: '20%', transform: 'translateX(-50%) translateZ(15px) rotateY(45deg)' }} />
          <div className="dna-base bg-yellow-500" style={{ top: '30%', transform: 'translateX(-50%) translateZ(15px) rotateY(90deg)' }} />
          <div className="dna-base bg-green-500" style={{ top: '40%', transform: 'translateX(-50%) translateZ(15px) rotateY(135deg)' }} />
          <div className="dna-base bg-red-500" style={{ top: '50%', transform: 'translateX(-50%) translateZ(15px) rotateY(180deg)' }} />
          <div className="dna-base bg-blue-500" style={{ top: '60%', transform: 'translateX(-50%) translateZ(15px) rotateY(225deg)' }} />
          <div className="dna-base bg-yellow-500" style={{ top: '70%', transform: 'translateX(-50%) translateZ(15px) rotateY(270deg)' }} />
          <div className="dna-base bg-green-500" style={{ top: '80%', transform: 'translateX(-50%) translateZ(15px) rotateY(315deg)' }} />
          <div className="dna-base bg-red-500" style={{ top: '90%', transform: 'translateX(-50%) translateZ(15px) rotateY(360deg)' }} />
        </div>
        
        {/* DNA Bases - Second strand (complementary) */}
        <div className="dna-strand">
          <div className="dna-base bg-green-500" style={{ top: '10%', transform: 'translateX(-50%) translateZ(-15px) rotateY(0deg)' }} />
          <div className="dna-base bg-yellow-500" style={{ top: '20%', transform: 'translateX(-50%) translateZ(-15px) rotateY(45deg)' }} />
          <div className="dna-base bg-blue-500" style={{ top: '30%', transform: 'translateX(-50%) translateZ(-15px) rotateY(90deg)' }} />
          <div className="dna-base bg-red-500" style={{ top: '40%', transform: 'translateX(-50%) translateZ(-15px) rotateY(135deg)' }} />
          <div className="dna-base bg-green-500" style={{ top: '50%', transform: 'translateX(-50%) translateZ(-15px) rotateY(180deg)' }} />
          <div className="dna-base bg-yellow-500" style={{ top: '60%', transform: 'translateX(-50%) translateZ(-15px) rotateY(225deg)' }} />
          <div className="dna-base bg-blue-500" style={{ top: '70%', transform: 'translateX(-50%) translateZ(-15px) rotateY(270deg)' }} />
          <div className="dna-base bg-red-500" style={{ top: '80%', transform: 'translateX(-50%) translateZ(-15px) rotateY(315deg)' }} />
          <div className="dna-base bg-green-500" style={{ top: '90%', transform: 'translateX(-50%) translateZ(-15px) rotateY(360deg)' }} />
        </div>
        
        {/* Connecting lines between bases */}
        <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
          <div className="absolute w-8 h-px bg-gray-400 opacity-30" 
               style={{ top: '10%', left: '50%', transform: 'translateX(-50%) rotateZ(0deg)' }} />
          <div className="absolute w-8 h-px bg-gray-400 opacity-30" 
               style={{ top: '20%', left: '50%', transform: 'translateX(-50%) rotateZ(10deg)' }} />
          <div className="absolute w-8 h-px bg-gray-400 opacity-30" 
               style={{ top: '30%', left: '50%', transform: 'translateX(-50%) rotateZ(-10deg)' }} />
          <div className="absolute w-8 h-px bg-gray-400 opacity-30" 
               style={{ top: '40%', left: '50%', transform: 'translateX(-50%) rotateZ(15deg)' }} />
          <div className="absolute w-8 h-px bg-gray-400 opacity-30" 
               style={{ top: '50%', left: '50%', transform: 'translateX(-50%) rotateZ(-15deg)' }} />
          <div className="absolute w-8 h-px bg-gray-400 opacity-30" 
               style={{ top: '60%', left: '50%', transform: 'translateX(-50%) rotateZ(20deg)' }} />
          <div className="absolute w-8 h-px bg-gray-400 opacity-30" 
               style={{ top: '70%', left: '50%', transform: 'translateX(-50%) rotateZ(-20deg)' }} />
          <div className="absolute w-8 h-px bg-gray-400 opacity-30" 
               style={{ top: '80%', left: '50%', transform: 'translateX(-50%) rotateZ(25deg)' }} />
          <div className="absolute w-8 h-px bg-gray-400 opacity-30" 
               style={{ top: '90%', left: '50%', transform: 'translateX(-50%) rotateZ(-25deg)' }} />
        </div>
      </div>
      </div>
    </>
  );
};

export default DNAHelix;