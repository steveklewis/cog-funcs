import React from 'react';





const Legend = (props) => {


  let explanations = {
    'fear': 'Fear is the motivation for Enneagram Types Five, Six, and Seven.',
    'anger': 'Anger is the motivation for Enneagram Types Eight, Nine, and One.',
    'shame': 'Shame is the motivation for Enneagram Types Two, Three, and Four.'
  };

  function hoverFear() {
    props.focusLegend('fear');
    props.toggleAnger(false);
    props.toggleShame(false);
    props.setExplanation(explanations.fear);
  }

  function hoverShame() {
    props.focusLegend('shame');
    props.toggleShame(true);
    props.toggleAnger(false);
    props.setExplanation(explanations.shame);
  }

  function hoverAnger() {
    props.toggleAnger(true);
    props.toggleShame(false);
    props.focusLegend('anger');
    props.setExplanation(explanations.anger);
  }
  return <div class="legend">
            <ul>
              <li onMouseEnter={hoverFear} >Fear</li>
              <li onMouseEnter={hoverAnger}>Anger</li>
              <li onMouseEnter={hoverShame}>Shame</li>
            </ul>
  </div>

}


export default Legend;
