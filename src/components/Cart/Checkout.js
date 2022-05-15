import { useRef, useState } from 'react';

import classes from './Checkout.module.css';

const isEmpty = value => value.trim() === '';
const isFourChar = value => value.trim().length === 4;
const isMobileChar = value => value.trim().length > 6 && value.trim().length < 12;

const Checkout = props => {
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        mobile: true,
        street: true,
        postal: true,
        city: true
    });

    const nameInputRef = useRef();
    const mobileInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = event => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredMobile = mobileInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const nameIsValid = !isEmpty(enteredName);
        const mobileIsValid = isMobileChar(enteredMobile);
        const streetIsValid = !isEmpty(enteredStreet);
        const postalIsValid = isFourChar(enteredPostal);
        const cityIsValid = !isEmpty(enteredCity);

        setFormInputValidity({
            name: nameIsValid,
            mobile: mobileIsValid,
            street: streetIsValid,
            postal: postalIsValid,
            city: cityIsValid
        });

        const formIsValid = 
            nameIsValid && 
            mobileIsValid &&
            streetIsValid &&
            postalIsValid &&
            cityIsValid;

        if (!formIsValid) {
            return;
        }
    };

    const nameControlStyle = `${classes.control} 
                              ${formInputValidity.name ? '' : classes.invalid}`;
    const mobileControlStyle = `${classes.control} 
                              ${formInputValidity.mobile ? '' : classes.invalid}`;
    const streetControlStyle = `${classes.control} 
                              ${formInputValidity.street ? '' : classes.invalid}`;
    const postalControlStyle = `${classes.control} 
                              ${formInputValidity.postal ? '' : classes.invalid}`;
    const cityControlStyle = `${classes.control} 
                              ${formInputValidity.city ? '' : classes.invalid}`;


    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameControlStyle}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" ref={nameInputRef} />
                {!formInputValidity.name && <p>Please enter a valid name!</p>}
            </div>
            <div className={mobileControlStyle}>
                <label htmlFor="mobile">Mobile Number</label>
                <input type="number" id="mobile" ref={mobileInputRef} />
                {!formInputValidity.mobile && <p>Please enter a valid mobile number!</p>}
            </div>
            <div className={streetControlStyle}>
                <label htmlFor="street">Street</label>
                <input type="text" id="street" ref={streetInputRef} />
                {!formInputValidity.street && <p>Please enter a valid street!</p>}
            </div>
            <div className={postalControlStyle}>
                <label htmlFor="postal">Postal Code</label>
                <input type="text" id="postal" ref={postalInputRef} />
                {!formInputValidity.postal && <p>Please enter a valid postal code! (4 characters long)</p>}
            </div>
            <div className={cityControlStyle}>
                <label htmlFor="city">City</label>
                <input type="text" id="city" ref={cityInputRef} />
                {!formInputValidity.city && <p>Please enter a valid city!</p>}
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;