import React, { Component } from 'react';

import { CognitiveFunction } from './CognitiveFunction'

export class JudgingFunctions extends Component {
  render() {
    return (
      <div>
        <CognitiveFunction name={"IntrovertedFeeling"} />
        <CognitiveFunction name={"ExtravertedFeeling"} />
        <CognitiveFunction name={"IntrovertedThinking"} />
        <CognitiveFunction name={"ExtravertedThinking"} />
      </div>
    );
  }
}


