import React from 'react';
import { interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';

export const NaverLogo: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const entrance = spring({
        frame,
        fps,
        config: {
            damping: 12,
        },
    });

    const scale = interpolate(entrance, [0, 1], [0.5, 1]);
    const opacity = interpolate(entrance, [0, 1], [0, 1]);

    return (
        <div style={{
            color: '#03C75A',
            fontSize: 120,
            fontWeight: 'bold',
            fontFamily: 'Helvetica, Arial, sans-serif',
            letterSpacing: -5,
            transform: `scale(${scale})`,
            opacity: opacity,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
        }}>
            NAVER
        </div>
    );
};
