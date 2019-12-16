import React, { useState} from 'react';
import './App.css';
import { Spring } from 'react-spring/renderprops';




import Enneagram from './components/Enneagram';
import Legend from './components/Legend';


// takes an array of numbers to highlight
function highlightNumbers(numbersToHighlight) {

}




function App() {

  const [explanation, setExplanation] = useState('---');
  const [legend, focusLegend] = useState('');

  const [angerActive, toggleAnger] = useState(false);
  const [shameActive, toggleShame] = useState(false);
  const [fearActive, toggleFear] = useState(false);

  const [oneActive, toggleOne] = useState(false);
  const [twoActive, toggleTwo] = useState(false);
  const [threeActive, toggleThree] = useState(false);
  const [fourActive, toggleFour] = useState(false);
  const [fiveActive, toggleFive] = useState(false);
  const [sixActive, toggleSix] = useState(false);
  const [sevenActive, toggleSeven] = useState(false);
  const [eightActive, toggleEight] = useState(false);
  const [nineActive, toggleNine] = useState(false);

  return (

    <Spring from={{ opacity : 0, marginTop: -1000}} to={{ opacity: 1, marginTop: 0 }}>
          { props => (

    <div className="App" style={ props} >
        <Legend setExplanation={setExplanation} focusLegend={focusLegend} toggleAnger={toggleAnger} toggleShame={toggleShame} toggleFear={toggleFear} toggleOne={toggleOne} toggleTwo={toggleTwo} toggleThree={toggleThree} toggleFour={toggleFour} toggleFive={toggleFive} toggleSix={toggleSix} />
      <div>
      <header className="App-header">
        <title>Enneagram</title>
        <p class="whitetext"> The Enneagram is a simple tool that defines a mapping between motivation and behavior, and a mapping between motivation and parts of the self..</p>
        <Enneagram legend={legend} explain={explanation} setExplanation={setExplanation} color="white" angerActive={angerActive} shameActive={shameActive} fearActive={fearActive} oneActive={oneActive} twoActive={twoActive} threeActive={threeActive} fourActive={fourActive} fiveActive={fiveActive} sixActive={sixActive} sevenActive={sevenActive} eightActive={eightActive} nineActive={nineActive} toggleOne={toggleOne} toggleTwo={toggleTwo} toggleThree={toggleThree} toggleFour={toggleFour} toggleFive={toggleFive} toggleSix={toggleSix} toggleSeven={toggleSeven} toggleEight={toggleEight} toggleNine={toggleNine} toggleAnger={toggleAnger} toggleFear={toggleFear} toggleShame={toggleShame} />

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
