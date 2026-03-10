import React from 'react';
import { interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';

export const SearchBar: React.FC<{ searchText: string }> = ({ searchText }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Entrance animation for the bar
    const entrance = spring({
        frame,
        fps,
        config: { damping: 20 }
    });

    const width = interpolate(entrance, [0, 1], [0, 800]);
    const opacity = interpolate(entrance, [0, 1], [0, 1]);

    // Typing animation
    const typingFrame = frame - 30;
    const charsToShow = Math.floor(interpolate(typingFrame, [0, 30], [0, searchText.length], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp'
    }));
    const displayedText = searchText.slice(0, charsToShow);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            opacity
        }}>
            <div style={{
                width: width,
                height: 80,
                backgroundColor: 'white',
                border: '4px solid #03C75A',
                borderRadius: 40,
                display: 'flex',
                alignItems: 'center',
                padding: '0 30px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                position: 'relative'
            }}>
                <span style={{
                    fontSize: 32,
                    color: '#333',
                    fontFamily: 'sans-serif'
                }}>
                    {displayedText}
                </span>
                {typingFrame > 0 && typingFrame % 20 < 10 && (
                    <div style={{
                        width: 3,
                        height: 35,
                        backgroundColor: '#03C75A',
                        marginLeft: 4
                    }} />
                )}

                <div style={{
                    position: 'absolute',
                    right: 20,
                    width: 40,
                    height: 40,
                    backgroundColor: '#03C75A',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </div>
            </div>
        </div>
    );
};
