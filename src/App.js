import { useState } from 'react';
import Button from './Components/Button';
import Content from './Components/Content';
import Steps from './Components/Steps';
import Step from './Components/Step';

import './App.css';

function App() {
  const contentCopyCMS = {
    1: 'First form details', 
    2: 'Second form details', 
    3: 'Third form details', 
    4: 'Thank You for Completing the form. Please submit your details!'
  };

  const [ focus, setFocus ] = useState(1);
  const [ contentCopy, setContentCopy ] = useState(contentCopyCMS['1']);

  const maxSteps = 3;
  const submitDisabled = focus < maxSteps + 1;
  
  const nextClick = () => {
    if(focus > maxSteps) {
      return null;
    }
    setContentCopy(contentCopyCMS[focus + 1]);
    setFocus(focus + 1);
  }

  const prevClick = () => {
    if(focus <= 1) {
      return null;
    }
    setContentCopy(contentCopyCMS[focus - 1]);
    setFocus(focus - 1);
  }

  const submitClick = () => {
    window.alert('Form Successfuly Submitted!');
  }

  return (
      <div className="App">
        <Steps>
          <Step title="First" number={1} focus={focus}/>
          <Step title="Second" number={2} focus={focus}/>
          <Step title="Last" number={3} focus={focus}/>
        </Steps>
        <Content copy={contentCopy} />
        <Button handleClick={prevClick} copy="Previous" isDisabled={focus === 1}/>
        <Button handleClick={nextClick} copy="Next" isDisabled={!submitDisabled}/>
        <Button handleClick={submitClick} copy="Submit" isDisabled={submitDisabled}/>
      </div>
  );
}

export default App;
