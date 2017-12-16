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

  render() {

    if (this.state.list) {


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <PerceivingFunctions />
          <JudgingFunctions />
        </p>

        <Button type="primary" onClick={this.showModal}>Open Modal</Button>
        <Modal title="Basic Modal" visible={this.state.showModal}>
          Hello
        </Modal>
      </div>
    );
    }
  }
}

export default App;
