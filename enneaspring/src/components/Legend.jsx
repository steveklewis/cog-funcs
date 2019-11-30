import React from 'react';





const Legend = (props) => {


  let explanations = {
    'fear': 'Fear is the motivation for Enneagram Types Five, Six, and Seven.',
    'anger': 'Anger is the motivation for Enneagram Types Eight, Nine, and One.',
    'shame': 'Shame is the motivation for Enneagram Types Two, Three, and Four.'
  };

  function hoverFear() {
    props.setExplanation(explanations.fear);
  }

  function hoverShame() {
    props.setExplanation(explanations.shame);
  }

  function hoverAnger() {
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
