import React from 'react';
import { Series } from 'remotion';
import { Intro } from './scenes/Intro';
import { Search } from './scenes/Search';
import { Shopping } from './scenes/Shopping';
import { News } from './scenes/News';
import { Maps } from './scenes/Maps';
import { Outro } from './scenes/Outro';
import { Voiceover } from './components/Voiceover';
import { narrationScript } from './Narration';

export const MyComposition: React.FC = () => {
  return (
    <>
      <Voiceover />
      <Series>
        <Series.Sequence durationInFrames={narrationScript[0].durationInFrames}>
          <Intro />
        </Series.Sequence>
        <Series.Sequence durationInFrames={narrationScript[1].durationInFrames}>
          <Search />
        </Series.Sequence>
        <Series.Sequence durationInFrames={narrationScript[2].durationInFrames}>
          <Shopping />
        </Series.Sequence>
        <Series.Sequence durationInFrames={narrationScript[3].durationInFrames}>
          <News />
        </Series.Sequence>
        <Series.Sequence durationInFrames={narrationScript[4].durationInFrames}>
          <Maps />
        </Series.Sequence>
        <Series.Sequence durationInFrames={narrationScript[5].durationInFrames}>
          <Outro />
        </Series.Sequence>
      </Series>
    </>
  );
};

