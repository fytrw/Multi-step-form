const SelectPlan = ({plan, setPlan, billing, setBilling, billingPrices, planNames, planIcons}) => {

    const PlanOption = ({planName}) => {
        const Icon = planIcons[planName]
        return (
            <div 
                className={`plan-box ${planName} ${plan === planName ? 'active' : ''}`} 
                onClick={()=> setPlan(planName)}
                aria-label={`Select ${planNames[planName]} plan`}
            >
                <Icon />
                <div className="plan-info">
                    <h2>{planNames[planName]}</h2>
                    <p className="plan-price">${billingPrices[billing][planName]}/{billing === 'monthly' ? 'mo' : 'yr'}</p>
                    {billing === 'yearly' && <p className="free-months">2 months free</p>}
                </div>
            </div>
        )
    }

    return (
        <div className="select-plan">
            <h1 className='section-title'>Select your plan</h1>
            <p className='section-desc'>You have the option of monthly or yearly billing.</p>
            <div className="plan-options">
                {Object.keys(planNames).map(planName => 
                    <PlanOption 
                        key={planName} 
                        planName={planName}
                    />
                )}
            </div>
            <div className="monthly-yearly-switch">
                <div 
                    className={`monthly-string switch-string ${billing === 'monthly' ? 'active' : ''}`}
                    aria-label="Monthly billing"
                >
                    Monthly
                </div>
                <div className="switch-button">
                <input 
                    type="checkbox" 
                    id="switch"
                    className="switch-button-input"
                    checked={billing === 'yearly'}
                    onChange={()=> setBilling(billing === 'monthly' ? 'yearly' : 'monthly')}
                    aria-label="Toggle billing frequency"
                />
                <label htmlFor="switch" className="switch-button-label">Toggle</label>
                </div>
                <div 
                    className={`yearly-string switch-string ${billing === 'yearly' ? 'active' : ''}`}
                    aria-label="Yearly billing"
                >
                    Yearly
                </div>
            </div>
        </div>
    )
}

export default SelectPlan
