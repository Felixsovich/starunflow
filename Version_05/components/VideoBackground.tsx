import React from 'react';

const VideoBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden bg-base-dark">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-80 grayscale brightness-100 contrast-110"
            >
                <source src="/videos/hero_bg.mp4" type="video/mp4" />
            </video>
            {/* Light gradient for better text readability without losing video details */}
            <div className="absolute inset-0 bg-gradient-to-b from-base-dark/40 via-transparent to-base-dark/70 opacity-80" />
        </div>
    );
};

export default VideoBackground;