import Steps from './components/Steps'
import Form from './components/Form'
import './style.css'
import { useState } from 'react'
function App() {
  const [step, setStep] = useState(1)
  
  return (
    <div className="form-wrapper">
        <Steps step={step}/>
        <Form step={step} setStep={setStep}/>
    </div>
  )
}

export default App
