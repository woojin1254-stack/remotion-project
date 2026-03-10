import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

export const Intro: React.FC = () => {
    const frame = useCurrentFrame();
    useVideoConfig();

    const opacity = interpolate(frame, [0, 30], [0, 1]);
    const scale = interpolate(frame, [0, 45], [0.8, 1], {
        extrapolateRight: 'clamp',
    });

    return (
        <div
            style={{
                flex: 1,
                backgroundColor: 'var(--naver-green)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
            }}
        >
            <div
                style={{
                    opacity,
                    transform: `scale(${scale})`,
                    textAlign: 'center',
                }}
            >
                <h1 style={{ fontSize: '120px', fontWeight: 900, marginBottom: '20px' }}>NAVER</h1>
                <p style={{ fontSize: '40px', fontWeight: 300 }}>세상의 모든 시작</p>
            </div>
        </div>
    );
};
