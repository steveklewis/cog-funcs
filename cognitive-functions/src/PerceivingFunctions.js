import React, { Component } from 'react';

import { CognitiveFunction } from './CognitiveFunction';

export class PerceivingFunctions extends Component {
  render() {
    return (
      <div>
        <CognitiveFunction name="ExtravertedSensing" />
        <CognitiveFunction name="IntrovertedSensing" />
        <CognitiveFunction name="ExtravertedIntuition" />
        <CognitiveFunction name="IntrovertedIntuition" />
      </div>
    );
  }
}

