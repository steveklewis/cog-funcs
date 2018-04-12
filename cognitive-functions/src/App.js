import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import { Modal } from 'antd';
import Button from 'antd/lib/button';

import styled from 'styled-components';

const HighlightOnStates = styled.h1`
  background: ${props => props.states ? props.states.includes(true) ? 'palevioletred' : 'white' : 'white'};  font-size: 1.5em;
  text-align: center;
  color: ${props => props.states ? props.states.includes(true) ? 'white' : 'palevioletred' : 'palevioletred'};
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
    }],
    content: {
      perceiving: {
        heading: 'Perceiving',
        text: 'Perceiving - The Cognitive Functions are about processing information. Before we can process information, we need to receive it. We have preferred ways of receiving information and preferred ways of paying attention to the world. How we see the world drives how we can act'
      },
      sensing: {
        heading: 'Sensing',
        text: "Sensing - Sensing has to do with our basic animalistic ways of perceiving. Our five senses, and our memory. Through these we can perceive the moment and the past."
      }
    }
}

  toggle = (key) => {
    this.setState({
      key: !this.state[key]
    })
  }


  showModal = (contentKey) => {

    let heading = this.state.content[contentKey]['heading'];
    let text = this.state.content[contentKey]['text']
    this.setState({
      showModal: true,
      modalHeading: heading,
      modalText: text
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      showModal: false
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      showModal: false
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

            <HighlightOnStates className="perceiving-cell" onMouseEnter={e => { this.setState({perceiving: true});}} onMouseLeave={e => { this.setState({perceiving: false})}} onClick={e => {
              this.showModal('perceiving');
            }}>
            Perceiving
            </HighlightOnStates>

            <HighlightOnStates className="sensing-cell" states={[this.state.perceiving]} onMouseEnter={e => { this.setState({sensing: true});}} onMouseLeave={e => { this.setState({sensing: false})}} onClick={e => {
              this.showModal('sensing');
            }}>
            Sensing            
            </HighlightOnStates>
            <HighlightOnStates className="se" states={[this.state.sensing, this.state.extraverting, this.state.perceiving]}>Extraverted Sensing</HighlightOnStates>
            <HighlightOnStates className="si" states={[this.state.sensing, this.state.introverting, this.state.perceiving]}>Introverted Sensing</HighlightOnStates>

            <HighlightOnStates className="intuition-cell" states={[this.state.perceiving]} onMouseEnter={e => { this.setState({intuiting: true});}} onMouseLeave={e => { this.setState({intuiting: false})}}>Intuition</HighlightOnStates>
            <HighlightOnStates className="ne" states={[this.state.intuiting, this.state.extraverting, this.state.perceiving]}>Extraverted Intuition</HighlightOnStates>
            <HighlightOnStates className="ni" states={[this.state.intuiting, this.state.introverting, this.state.perceiving]}>Introverted Intuition</HighlightOnStates>


            <HighlightOnStates className="feeling-cell" onMouseEnter={e => { this.setState({feeling: true});}} onMouseLeave={e => { this.setState({feeling: false})}}>Feeling</HighlightOnStates>
            <HighlightOnStates className="fe" states={[this.state.feeling, this.state.extraverting]}>Extraverted Feeling</HighlightOnStates>
            <HighlightOnStates className="fi" states={[this.state.feeling, this.state.introverting]}>Introverted Feeling</HighlightOnStates>


            <HighlightOnStates className="thinking-cell" onMouseEnter={e => { this.setState({thinking: true});}} onMouseLeave={e => { this.setState({thinking: false})}}>Thinking</HighlightOnStates>

            <HighlightOnStates className="te" states={[this.state.thinking, this.state.extraverting]}>Extraverted Thinking</HighlightOnStates>
            <HighlightOnStates className="ti" states={[this.state.thinking, this.state.introverting]}>Introverted Thinking</HighlightOnStates>

            <HighlightOnStates className="extraversion-cell" onMouseEnter={e => { this.setState({extraverting: true});}} onMouseLeave={e => { this.setState({extraverting: false})}}>Extraversion</HighlightOnStates>
            <HighlightOnStates className="introversion-cell" onMouseEnter={e => { this.setState({introverting: true});}} onMouseLeave={e => { this.setState({introverting: false})}}>Introversion</HighlightOnStates>
          </div>
        <Modal title={this.state.modalHeading} visible={this.state.showModal} onOk={this.handleOk} onCancel={this.handleCancel}>
          {this.state.modalText}
        </Modal>


      </div>
    );
  }
}

export default App;
