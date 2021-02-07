import { useState } from 'react';
import Content from './Components/Content';
import Steps from './Components/Steps';
import Step from './Components/Step';

import './App.css';

function App() {
  const [ focus, setFocus ] = useState(2);
  return (
    <div className="App">
      <Steps>
        <Step title="First" number={1} isComplete={false} focus={focus}/>
        <Step title="Second" number={2} isComplete={false} focus={focus}/>
        <Step title="Last" number={3} isComplete={false} focus={focus}/>
      </Steps>
      <Content />
    </div>
  );
}

export default App;
