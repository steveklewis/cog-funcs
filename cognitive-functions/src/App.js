import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import { Modal } from 'antd';
import Button from 'antd/lib/button';

import { PerceivingFunctions } from './PerceivingFunctions';
import { JudgingFunctions } from './JudgingFunctions';

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

    if (this.state.list) {


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/*
        <p className="App-intro">
          <PerceivingFunctions />
          <JudgingFunctions />
        </p>
        */}
        <Button type="primary" onClick={this.showModal}>Open Modal</Button>
        <Modal title="Basic Modal" visible={this.state.showModal}>
          Hello
        </Modal>


        <div className="wrapper">
          <div className={this.state.perceivingClasses}></div>
          <div className="perceiving-cell" 
               onClick={this.handleMouseOver.bind(this)}>Perceiving</div>

          <div className="sensing-cell">Sensing</div>
          <div className="sensing-row"></div>
          <div className="se">Extraverted Sensing</div>
          <div className="si">Introverted Sensing</div>

          <div className="intuition-cell">Intuition</div>
          <div className="intuition-row"></div>
          <div className="ne">Extraverted Intuition</div>
          <div className="ni">Introverted Intuition</div>
          <div className="thinking-cell">Thinking</div>
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
