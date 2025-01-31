import { useState } from 'react'
import './App.css'
import UseEffectExamples from './components/UseEffectExamples'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UseEffectExamples />
  )
}

export default App
