const PersonalInfo = ({name, setName, email, setEmail, phoneNumber, setPhoneNumber, nameError, emailError, phoneNumberError}) => {
    return (
        <div className="personal-info">
            <h1 className="section-title">Personal Info</h1>
            <p className="section-desc">Please provide your name, email address, and phone number.</p>
            <form>
                <label htmlFor="name" className={nameError ? 'error' : undefined}>Name</label>
                <input type="text" id="name" placeholder="e.g. Stephen King" value={name} onChange={(e) => setName(e.target.value)} className={nameError ? 'error' : undefined} />
                <label htmlFor="email" className={emailError ? 'error': undefined}>Email Address</label>
                <input type="email" id="email" placeholder="e.g. stephenking@lorem.com" value={email} onChange={(e) => setEmail(e.target.value)} className={emailError ? 'error': undefined}/>
                <label htmlFor="phone"className={phoneNumberError ? 'error': undefined}>Phone Number</label>
                <input type="tel" id="phone" placeholder="e.g. 555-555-5555" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className={phoneNumberError ? 'error': undefined}/>
            </form>
        </div>
    )
}

export default PersonalInfo