import PersonalInfo from "./PersonalInfo"
import SelectPlan from "./SelectPlan"
import AddOns from "./AddOns"
import Summary from "./Summary"
import Confirmed from "./Confirmed"
import { useState } from "react"
import {ReactComponent as Arcade} from '../assets/icon-arcade.svg'
import {ReactComponent as Advanced} from '../assets/icon-advanced.svg'
import {ReactComponent as Pro} from '../assets/icon-pro.svg'

const billingPrices = {
    monthly: {
        arcade: 9,
        advanced: 12,
        pro: 15
    },
    yearly: {
        arcade: 90,
        advanced: 120,
        pro: 150
    }
}

const planNames = {
    arcade: 'Arcade',
    advanced: 'Advanced',
    pro: 'Pro'
}

const planIcons = {
    arcade: Arcade,
    advanced: Advanced,
    pro: Pro
}

const addOnOptions = [
    { title: 'Online service', description: 'Access to multiplayer games', price: {monthly: 1, yearly: 10} },
    { title: 'Larger storage', description: 'Extra 1TB of cloud save', price: {monthly: 2, yearly: 20} },
    { title: 'Customizable profile', description: 'Custom theme on your profile', price: {monthly: 2, yearly: 20} },
];

const Form = ({step, setStep}) => {
    const [plan, setPlan] = useState('arcade');
    const [billing, setBilling] = useState('monthly');
    const [activeAddOns, setActiveAddOns] = useState([]);
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState(false)
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState('')
    const [phoneNumberError, setPhoneNumberError] = useState(false)
    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
      };
    const handleNext = () => {
        if(step === 1) {
            if(name === '') {
                setNameError(true)
            } else {
                setNameError(false)
            }
            if(phoneNumber === '') {
                setPhoneNumberError(true)
            } else {
                setPhoneNumberError(false)
            }
            if(!validateEmail(email)) {
                setEmailError(true)
            } else {
                setEmailError(false)
            }
            if(name !== '' && email !== '' && phoneNumber !== '' && validateEmail(email)) {
                setStep(step + 1)
            }
        } else {
            setStep(step + 1)
        }
    }
    return (
        <div className="fill-form">
            {step === 1 && <PersonalInfo name={name} setName={setName} email={email} setEmail={setEmail} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} nameError={nameError} emailError={emailError} phoneNumberError={phoneNumberError}  />}
            {step === 2 && <SelectPlan plan={plan} setPlan={setPlan} billing={billing} setBilling={setBilling} billingPrices={billingPrices} planNames={planNames} planIcons={planIcons}/>}
            {step === 3 && <AddOns billing={billing} addOnOptions={addOnOptions} activeAddOns={activeAddOns} setActiveAddOns={setActiveAddOns}/>}
            {step === 4 && <Summary billing={billing} plan={plan} activeAddOns={activeAddOns} billingPrices={billingPrices} setStep={setStep}/>}
            {step === 5 && <Confirmed />}
            <div className="steps-buttons">
            {
                step < 4 && <button className="next" onClick={handleNext}>Next Step</button>
            }
            {
                step > 1 && step < 5 && <button className="back" onClick={()=> setStep(step - 1)}>Go Back</button>
            }
            {
                step === 4 && <button className="confirm" onClick={()=>setStep(5)}>Confirm</button>
            }

            </div>
        </div>
    )
}

export default Form