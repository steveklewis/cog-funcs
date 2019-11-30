import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Spring } from 'react-spring/renderprops';




import Enneagram from './components/Enneagram';
import Legend from './components/Legend';


// takes an array of numbers to highlight
function highlightNumbers(numbersToHighlight) {

}




function App() {

  const [explanation, setExplanation] = useState('Welcome to the Enneagram');

  return (

    <Spring from={{ opacity : 0, marginTop: -1000}} to={{ opacity: 1, marginTop: 0 }}>
          { props => (

    <div className="App" style={ props} >
        <Legend setExplanation={setExplanation}/>
      <div>
      <header className="App-header">
        <title>Enneagram</title>
        <p class="whitetext"> {explanation}</p>
        <Enneagram explain={explanation} color="white" />
      </header>
    </div>
    </div>
    )}
    </Spring>
  );
}

export default App;
