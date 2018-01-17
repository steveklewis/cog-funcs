import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import { Modal } from 'antd';
import Button from 'antd/lib/button';

import { CognitiveFunction } from './CognitiveFunction';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      perceivingClasses: 'perceiving',
      list: true,
      cogFuncs: [{
        id: 'Fi',
        name: 'Introverted Feeling',
        orient: 'introverted',
        kind: 'judging',
        level: 'feeling'
      }


      ]
    }

  }

  showModal = () => {
    this.setState({
      showModal: true,
    });
  }

  handleMouseOver() {
    this.setState({
     perceivingClasses: 'perceiving hoverme'
    })
  }

  handleMouseOut() {
    this.setState({
     perceivingClasses: 'perceiving'
    })
  }

  render() {

    let hoverState = {};

    if (this.state.list) {


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <div className="wrapper">
            <div className="sensing-cell">Sensing</div>
            <CognitiveFunction name="ExtravertedSensing" classNames={"se"} />
            <CognitiveFunction name="IntrovertedSensing" classNames={"si"} />
            <div className="intuition-cell">Intuition</div>
            <CognitiveFunction name="ExtravertedIntuition" classNames={"ne"} />
            <CognitiveFunction name="IntrovertedIntuition" classNames={"ni"} />

            <div className="feeling-cell">Feeling</div>
            <CognitiveFunction name={"IntrovertedFeeling"} hoverClasses={"introverted judging feeling"} classNames={"fi"} />
            <CognitiveFunction name={"ExtravertedFeeling"} hoverClasses={"extraverted judging feeling"} classNames={"fe"} />
            <div className="thinking-cell">Thinking</div>
            <CognitiveFunction name={"IntrovertedThinking"} hoverClasses={"introverted judging thinking"} classNames={"ti"} hoverState={hoverState} />
            <CognitiveFunction name={"ExtravertedThinking"} classNames={"te"} />
            <div className="extraversion-cell">Extraversion</div>
            <div className="introversion-cell">Introversion</div>
          </div>
        <Button type="primary" onClick={this.showModal}>Open Modal</Button>
        <Modal title="Basic Modal" visible={this.state.showModal}>
          Hello
        </Modal>


        <div className="wrapper">
          <div className={this.state.perceivingClasses}></div>
          <div className="perceiving-cell" 
               onClick={this.handleMouseOver.bind(this)}>Perceiving</div>


          <div className="intuition-row"></div>
          <div className="ne">Extraverted Intuition</div>
          <div className="ni">Introverted Intuition</div>
          <div className="thinking-row"></div>
          <div className="te">Extraverted Thinking</div>
          <div className="ti">Introverted Thinking</div>
        </div>
      </div>
    );
    }
  }
}

export default App;
