import React from 'react';
import { interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';

const Icon: React.FC<{ label: string; color: string; delay: number }> = ({ label, color, delay }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const entrance = spring({
        frame: frame - delay,
        fps,
        config: { damping: 12 }
    });

    const scale = interpolate(entrance, [0, 1], [0, 1], { extrapolateLeft: 'clamp' });
    const y = interpolate(entrance, [0, 1], [20, 0], { extrapolateLeft: 'clamp' });

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0 40px',
            transform: `scale(${scale}) translateY(${y}px)`,
            opacity: entrance
        }}>
            <div style={{
                width: 100,
                height: 100,
                backgroundColor: color,
                borderRadius: 25,
                marginBottom: 15,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
            }}>
                <div style={{ width: 50, height: 50, border: '4px solid white', borderRadius: 10 }} />
            </div>
            <span style={{ fontSize: 24, fontWeight: 'bold', color: '#555', fontFamily: 'sans-serif' }}>{label}</span>
        </div>
    );
};

export const ServiceIcons: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Icon label="쇼핑" color="#ff4b4b" delay={0} />
            <Icon label="뉴스" color="#4b89ff" delay={10} />
            <Icon label="블로그" color="#03C75A" delay={20} />
            <Icon label="지식iN" color="#ffb84b" delay={30} />
        </div>
    );
};
