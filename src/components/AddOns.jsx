import  { useState } from 'react';
import {ReactComponent as CheckMark} from '../assets/icon-checkmark.svg';

const AddOnOption = ({ title, description, price, billing, activeAddOns, setActiveAddOns }) => {
    const [isActive, setIsActive] = useState(activeAddOns.some(addOn => addOn.title === title));


    const handleClick = () => {
        if (!isActive) {
            setActiveAddOns([...activeAddOns, { title, price }]);
        } else {
            setActiveAddOns(activeAddOns.filter(addOn => addOn.title !== title));
        }
        setIsActive(!isActive);
    }

    return (
        <div className={`add-on-option ${isActive ? 'active' : ''}`} onClick={handleClick}>
            <label className={`form-control ${isActive ? 'active' : ''}`}>
                <CheckMark />
            </label>
            <div className="add-on-info">
                <h2 className="add-on-title">{title}</h2>
                <p className="add-on-desc">{description}</p>
            </div>
            <div className="add-on-price">+${price[billing]}/{billing === 'monthly' ? 'mo' : 'yr'}</div>
        </div>
    );
}

const AddOns = ({billing, addOnOptions, activeAddOns, setActiveAddOns}) => {

    return (
        <div className="add-ons">
            <h1 className="section-title">Pick add-ons</h1>
            <p className="section-desc">Add-ons help enhance your gaming experience.</p>
            <div className="add-on-options">
                {addOnOptions.map((option, index) => (
                    <AddOnOption key={index} {...option} billing={billing} activeAddOns={activeAddOns} setActiveAddOns={setActiveAddOns} />
                ))}
            </div>
        </div>
    );
}

export default AddOns;
