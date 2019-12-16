import React from 'react';





const Legend = (props) => {


  let explanations = {
    'fear': 'Fear is the motivation for Enneagram Types Five, Six, and Seven.',
    'anger': 'Anger is the motivation for Enneagram Types Eight, Nine, and One.',
    'shame': 'Shame is the motivation for Enneagram Types Two, Three, and Four.',
    'one': "Enneagram One expresses anger as perfectionism.",
    'none': '---'
  };

  function hoverFear() {
    props.focusLegend('fear');
    props.toggleAnger(false);
    props.toggleFear(true);
    props.toggleShame(false);
    props.setExplanation(explanations.fear);
  }

  function hoverShame() {
    props.focusLegend('shame');
    props.toggleShame(true);
    props.toggleAnger(false);
    props.toggleFear(false);
    props.setExplanation(explanations.shame);
  }

  function hoverAnger() {
    props.toggleAnger(true);
    props.toggleShame(false);
    props.toggleFear(false);
    props.focusLegend('anger');
    props.setExplanation(explanations.anger);
  }

  function hoverOne() {
    props.toggleOne(true);
    props.toggleShame(false);
    props.toggleFear(false);
    props.toggleAnger(false);
    props.setExplanation(explanations.one);
  }

  function unHovers() {
    props.toggleAnger(false);
    props.toggleShame(false);
    props.toggleFear(false);
    props.toggleOne(false);
    props.toggleTwo(false);
    props.toggleThree(false);
    props.toggleFour(false);
    props.setExplanation(explanations.none);
  }

  let marginStyle = {
    margin: 20,
    padding: 0,
    textAlign: "left"
  }
  return <div class="legend" onMouseLeave={unHovers} style={marginStyle}>
            <p>Emotions</p>
            <ul>
              <li onMouseEnter={hoverFear} >Fear</li>
              <li onMouseEnter={hoverAnger}>Anger</li>
              <li onMouseEnter={hoverShame}>Shame</li>
            </ul>
            <p>Behaviors</p>
            <ul>
              <li onMouseEnter={hoverShame}>Unconstructive Criticism</li>
              <li onMouseEnter={hoverShame}>Distracted</li>
              <li onMouseEnter={hoverShame}>Bullying</li>
              <li onMouseEnter={hoverShame}>Conflict-avoiding</li>
            </ul>
            <p>Parts of the Self</p>
            <ul>
              <li>Head</li>
              <li>Body</li>
              <li>Heart</li>
            </ul>
  </div>

}


export default Legend;
