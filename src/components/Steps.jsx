import Step from './Step'
const Steps = ({step}) => {
    return (
        <aside className="steps-container">
            <Step step="1" title="Your info" active={step === 1 ? true : false}/>
            <Step step="2" title="Select Plan" active={step === 2 ? true : false}/>
            <Step step="3" title="Add-ons" active={step === 3 ? true : false}/>
            <Step step="4" title="Summary" active={step >= 4 ? true : false}/>
        </aside>
    )
}

export default Steps