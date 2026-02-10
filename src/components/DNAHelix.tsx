import React from 'react';

const DNAHelix: React.FC = () => {
  return (
    <>
      <style>{`
        @keyframes rotate {
          from { transform: rotateY(0deg) rotateX(-15deg); }
          to { transform: rotateY(360deg) rotateX(-15deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        .dna-container {
          transform-style: preserve-3d;
          animation: rotate 8s linear infinite, float 3s ease-in-out infinite;
          perspective: 800px;
        }
        
        .helix-point {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        
        .connector {
          position: absolute;
          height: 1px;
          background: rgba(255, 255, 255, 0.4);
          left: 50%;
          top: 50%;
          transform-origin: left center;
        }
      `}</style>
      <div className="relative w-32 h-40 md:w-40 md:h-48">
        <div className="dna-container relative w-full h-full">
          {/* First strand - blue helix */}
          {[...Array(20)].map((_, i) => {
            const angle = (i * 18) * Math.PI / 180; // 18 degrees per point
            const radius = 25;
            const height = (i - 10) * 8; // Center the helix
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            
            return (
              <div key={`strand1-${i}`}>
                <div
                  className="helix-point bg-blue-500"
                  style={{
                    transform: `translate(-50%, -50%) translate3d(${x}px, ${height}px, ${z}px)`
                  }}
                />
                {/* Base */}
                <div
                  className="helix-point bg-blue-300"
                  style={{
                    width: '4px',
                    height: '4px',
                    transform: `translate(-50%, -50%) translate3d(${x + 8}px, ${height}px, ${z}px)`
                  }}
                />
              </div>
            );
          })}
          
          {/* Second strand - red helix (opposite phase) */}
          {[...Array(20)].map((_, i) => {
            const angle = (i * 18 + 180) * Math.PI / 180; // 180 degrees offset
            const radius = 25;
            const height = (i - 10) * 8; // Center the helix
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            
            return (
              <div key={`strand2-${i}`}>
                <div
                  className="helix-point bg-red-500"
                  style={{
                    transform: `translate(-50%, -50%) translate3d(${x}px, ${height}px, ${z}px)`
                  }}
                />
                {/* Base */}
                <div
                  className="helix-point bg-red-300"
                  style={{
                    width: '4px',
                    height: '4px',
                    transform: `translate(-50%, -50%) translate3d(${x - 8}px, ${height}px, ${z}px)`
                  }}
                />
              </div>
            );
          })}
          
          {/* Connectors between strands */}
          {[...Array(10)].map((_, i) => {
            const angle = (i * 36) * Math.PI / 180; // 36 degrees for connectors
            const radius = 25;
            const height = (i - 5) * 16; // Center the connectors
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            
            return (
              <div key={`connector-${i}`}>
                <div
                  className="connector"
                  style={{
                    width: '16px',
                    transform: `translate(-50%, -50%) translate3d(${x - 8}px, ${height}px, ${z}px) rotateY(${angle * 180 / Math.PI}deg)`
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DNAHelix;