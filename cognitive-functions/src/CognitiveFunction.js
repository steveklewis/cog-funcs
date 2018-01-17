import React, { Component } from 'react';

export class CognitiveFunction extends Component {
  constructor(props) {
    super(props);

    let hoverClassList = props.hoverClasses ? props.hoverClasses.split(' ') : [];

    let hoverClassMap = {}
    hoverClassList.forEach(h => {
      hoverClassMap[h] = true
    })
    this.state = {
     hoverClassMap: hoverClassMap
    }

  }

  render() {
    return (
      <div className={this.props.classNames}>
        {this.props.name}
      </div>
    );
  }
}

