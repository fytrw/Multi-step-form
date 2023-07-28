const Step = ({ step, title, active}) => {
    return (
        <div className={`step ${active ? 'active' : null}`}>
            <div className="step-circle">
                <span>{step}</span>
            </div>
            <div className="step-info">
                <span className="step-number">Step {step}</span>
                <span className="step-title">{title}</span>
            </div>
        </div>
    )
}

export default Step