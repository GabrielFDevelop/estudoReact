import { useState } from 'react';
import './App.css';
import JsxExamples from './components/JsxExamples';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>JSX</h1>
      <JsxExamples />
    </>
  );
};

export default App;
