const Summary = ({billing, plan, activeAddOns, billingPrices, setStep}) => {
    const totalPrice = activeAddOns.reduce((total, addOn) => total + addOn.price[billing], billingPrices[billing][plan]);
    return (
        <div className="summary-container">
            <h1 className='section-title'>Finishing up</h1>
            <p className='section-desc'>Double-check everything looks OK before confirming.</p>
            <div className="summary-box">
                <div className="plan-summary">
                    <div className="left-plan-inner-box">
                        <p className="plan-type">{plan} ({billing})</p>
                        <button className="change-plan" onClick={()=>setStep(2)}>Change</button>
                    </div>
                    <div className="total-price-plan">${billingPrices[billing][plan]}/{billing === 'monthly' ? 'mo' : 'yr'}</div>
                </div>
                {activeAddOns.length !== 0 ? <div className="add-ons-summary">
                    {activeAddOns.map(addOn => (
                        <div className="add-on-summary" key={addOn.title}>
                            <p className="add-on-summary-title">{addOn.title}</p>
                            <p className="add-on-summary-price">+${addOn.price[billing]}/{billing === 'monthly' ? 'mo' : 'yr'}</p>
                        </div>
                    ))}
                </div> : null}
            </div>
            <div className="total-summary">
                <p className="total-title">Total (per {billing === 'monthly' ? 'month' : 'year'})</p>
                <p className="total-price">${totalPrice}/{billing === 'monthly' ? 'mo' : 'yr'}</p>
            </div>
        </div>
    )

}

export default Summary