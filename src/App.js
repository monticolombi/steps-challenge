import { useState } from 'react';
import Button from './Components/Button';
import Content from './Components/Content';
import Steps from './Components/Steps';
import Step from './Components/Step';

import './App.css';

function App() {
  const [ focus, setFocus ] = useState(1);
  const maxSteps = 4;
  const submitDisabled = focus < maxSteps + 1;
  console.log(focus, maxSteps)
  console.log(submitDisabled)
  
  const nextClick = () => {
    if(focus > maxSteps) {
      return null;
    }
    setFocus(focus + 1);
  }

  const prevClick = () => {
    if(focus <= 1) {
      return null;
    }
    setFocus(focus - 1);
  }

  const submitClick = () => {
    window.alert('Form Successfuly Submitted!');
  }

  return (
      <div className="App">
        <Steps>
          <Step title="First" number={1} isComplete={false} focus={focus}/>
          <Step title="Second" number={2} isComplete={false} focus={focus}/>
          <Step title="Third" number={3} isComplete={false} focus={focus}/>
          <Step title="Last" number={4} isComplete={false} focus={focus}/>
        </Steps>
        <Content />
        <Button handleClick={prevClick} copy="Previous"/>
        <Button handleClick={nextClick} copy="Next"/>
        <Button handleClick={submitClick} copy="Submit" submitDisabled={submitDisabled}/>
      </div>
  );
}

export default App;
