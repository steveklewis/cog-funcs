import React, { useState} from 'react';
import './App.css';
import { Spring } from 'react-spring/renderprops';




import Enneagram from './components/Enneagram';
import Legend from './components/Legend';


// takes an array of numbers to highlight
function highlightNumbers(numbersToHighlight) {

}




function App() {

  const [explanation, setExplanation] = useState('');
  const [legend, focusLegend] = useState('');

  const [angerActive, toggleAnger] = useState(false);
  const [shameActive, toggleShame] = useState(false);
  const [fearActive, toggleFear] = useState(false);

  const [oneActive, toggleOne] = useState(false);
  const [twoActive, toggleTwo] = useState(false);
  const [threeActive, toggleThree] = useState(false);

  return (

    <Spring from={{ opacity : 0, marginTop: -1000}} to={{ opacity: 1, marginTop: 0 }}>
          { props => (

    <div className="App" style={ props} >
        <Legend setExplanation={setExplanation} focusLegend={focusLegend} toggleAnger={toggleAnger} toggleShame={toggleShame} toggleFear={toggleFear} toggleOne={toggleOne} />
      <div>
      <header className="App-header">
        <title>Enneagram</title>
        <p class="whitetext"> The Enneagram is a simple tool that defines a mapping between motivation and behavior.</p>
        <Enneagram legend={legend} explain={explanation} setExplanation={setExplanation} color="white" angerActive={angerActive} shameActive={shameActive} fearActive={fearActive} oneActive={oneActive} twoActive={twoActive} threeActive={threeActive} toggleOne={toggleOne} toggleTwo={toggleTwo} toggleThree={toggleThree} toggleAnger={toggleAnger} toggleFear={toggleFear} toggleShame={toggleShame} />

        <p class="whitetext"> {explanation}</p>
      </header>
    </div>
    {legend}
    </div>
    )}
    </Spring>
  );
}

export default App;
