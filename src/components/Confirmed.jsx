import {ReactComponent as ThankYouIcon} from '../assets/icon-thank-you.svg';

const Confirmed = () => {
    return (
        <div className="confirmed">
            <ThankYouIcon />
            <h1 className="confirmed-title">Thank you!</h1>
            <p className="confirmed-desc">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
    )
}

export default Confirmed