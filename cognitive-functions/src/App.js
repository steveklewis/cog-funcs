import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import { Modal } from 'antd';
import Button from 'antd/lib/button';

import styled from 'styled-components';

const HighlightOnStates = styled.h1`
  background: ${props => props.states ? props.states.includes(true) ? 'palevioletred' : 'white' : 'white'};  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;


class App extends Component {


  state = {
    sensing: false,
    intuiting: false,
    perceiving: false,
    thinking: false,
    feeling: false,
    judging: false,
    introverting: false,
    extraverting: false,
    showModal: false,
    cogFuncs: [{
      id: 'Fi',
      name: 'Introverted Feeling',
      orient: 'introverted',
      kind: 'judging',
      level: 'feeling'
    }]
}

  toggle = (key) => {
    this.setState({
      key: !this.state[key]
    })
  }


  showModal = () => {
    this.setState({
      showModal: true,
    });
  }


  handleMouseOut() {
    this.setState({
     perceivingClasses: 'perceiving'
    })
  }

  render() {

   return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <div className="wrapper">

            <HighlightOnStates className="sensing-cell" onMouseEnter={e => { this.setState({sensing: true});}} onMouseLeave={e => { this.setState({sensing: false})}}>Sensing</HighlightOnStates>
            <HighlightOnStates className="se" states={[this.state.sensing, this.state.extraverting]}>Extraverted Sensing</HighlightOnStates>
            <HighlightOnStates className="si" states={[this.state.sensing, this.state.introverting]}>Introverted Sensing</HighlightOnStates>

            <HighlightOnStates className="intuition-cell" onMouseEnter={e => { this.setState({intuiting: true});}} onMouseLeave={e => { this.setState({intuiting: false})}}>Intuition</HighlightOnStates>
            <HighlightOnStates className="ne" states={[this.state.intuiting, this.state.extraverting]}>Extraverted Intuition</HighlightOnStates>
            <HighlightOnStates className="ni" states={[this.state.intuiting, this.state.introverting]}>Introverted Intuition</HighlightOnStates>


            <HighlightOnStates className="feeling-cell" onMouseEnter={e => { this.setState({feeling: true});}} onMouseLeave={e => { this.setState({feeling: false})}}>Feeling</HighlightOnStates>
            <HighlightOnStates className="fe" states={[this.state.feeling, this.state.extraverting]}>Extraverted Feeling</HighlightOnStates>
            <HighlightOnStates className="fi" states={[this.state.feeling, this.state.introverting]}>Introverted Feeling</HighlightOnStates>


            <HighlightOnStates className="thinking-cell" onMouseEnter={e => { this.setState({thinking: true});}} onMouseLeave={e => { this.setState({thinking: false})}}>Thinking</HighlightOnStates>

            <HighlightOnStates className="te" states={[this.state.thinking, this.state.extraverting]}>Extraverted Thinking</HighlightOnStates>
            <HighlightOnStates className="ti" states={[this.state.thinking, this.state.introverting]}>Introverted Thinking</HighlightOnStates>

            <HighlightOnStates className="extraversion-cell" onMouseEnter={e => { this.setState({extraverting: true});}} onMouseLeave={e => { this.setState({extraverting: false})}}>Extraversion</HighlightOnStates>
            <HighlightOnStates className="introversion-cell" onMouseEnter={e => { this.setState({introverting: true});}} onMouseLeave={e => { this.setState({introverting: false})}}>Introversion</HighlightOnStates>
          </div>
        <Button type="primary" onClick={this.showModal}>Open Modal</Button>
        <Modal title="Basic Modal" visible={this.state.showModal}>
          Hello
        </Modal>


      </div>
    );
  }
}

export default App;
