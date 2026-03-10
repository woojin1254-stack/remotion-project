import React from 'react';
import { AbsoluteFill, Sequence, interpolate, useCurrentFrame } from 'remotion';
import { NaverLogo } from './NaverLogo';
import { SearchBar } from './SearchBar';
import { ServiceIcons } from './ServiceIcons';

export const NaverComp: React.FC = () => {
    const frame = useCurrentFrame();

    const backgroundOpacity = interpolate(frame, [0, 20], [0, 1]);

    return (
        <AbsoluteFill style={{ backgroundColor: '#f5f6f7', opacity: backgroundOpacity }}>
            {/* Scene 1: Logo Entrance */}
            <Sequence durationInFrames={60}>
                <NaverLogo />
            </Sequence>

            {/* Scene 2: Search Bar */}
            <Sequence from={50} durationInFrames={100}>
                <div style={{ marginTop: 200 }}>
                    <SearchBar searchText="네이버 서비스" />
                </div>
            </Sequence>

            {/* Scene 3: Service Icons */}
            <Sequence from={120}>
                <div style={{ marginTop: 550 }}>
                    <ServiceIcons />
                </div>
            </Sequence>

            {/* Final Brand Message */}
            <Sequence from={200}>
                <div style={{
                    position: 'absolute',
                    bottom: 100,
                    width: '100%',
                    textAlign: 'center',
                    fontSize: 40,
                    color: '#03C75A',
                    fontWeight: 'bold',
                    fontFamily: 'sans-serif'
                }}>
                    세상의 모든 연결, 네이버
                </div>
            </Sequence>
        </AbsoluteFill>
    );
};
