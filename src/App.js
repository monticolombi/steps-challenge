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
          <Step 
            focus={focus}
            number={1} 
            title="First" 
          />
          <Step 
            focus={focus}
            number={2} 
            title="Second" 
          />
          <Step 
            focus={focus}
            number={3} 
            title="Last" 
          />
        </Steps>
        <Content copy={contentCopy} />
        <Button 
          copy="Previous" 
          handleClick={prevClick} 
          isDisabled={focus === 1}
        />
        <Button 
          copy="Next" 
          handleClick={nextClick} 
          isDisabled={!submitDisabled}
        />
        <Button 
          copy="Submit" 
          handleClick={submitClick} 
          isDisabled={submitDisabled}
        />
      </div>
  );
}

export default App;
