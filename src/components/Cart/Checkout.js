import { useRef, useState } from 'react';

import useInput from '../../hooks/use-input';

import classes from './Checkout.module.css';

const isNotEmpty = value => value.trim() != '';
const isMobile = value => value.trim().length > 6 && value.trim().length < 12;
const isFourChar = value => value.trim().length === 4;

const Checkout = props => {
    const {
        value: enteredName,
        isValid: nameIsValid,
        hasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler
    } = useInput(isNotEmpty);

    const {
        value: enteredMobile,
        isValid: mobileIsValid,
        hasError: mobileHasError,
        valueChangeHandler: mobileChangeHandler,
        inputBlurHandler: mobileBlurHandler
    } = useInput(isMobile);

    const {
        value: enteredStreet,
        isValid: streetIsValid,
        hasError: streetHasError,
        valueChangeHandler: streetChangeHandler,
        inputBlurHandler: streetBlurHandler
    } = useInput(isNotEmpty);

    const {
        value: enteredPostal,
        isValid: postalIsValid,
        hasError: postalHasError,
        valueChangeHandler: postalChangeHandler,
        inputBlurHandler: postalBlurHandler
    } = useInput(isFourChar);

    const {
        value: enteredCity,
        isValid: cityIsValid,
        hasError: cityHasError,
        valueChangeHandler: cityChangeHandler,
        inputBlurHandler: cityBlurHandler
    } = useInput(isNotEmpty);

    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        mobile: true,
        street: true,
        postal: true,
        city: true
    });

    const confirmHandler = event => {
        event.preventDefault();
            
        setFormInputValidity({
            name: nameIsValid,
            mobile: mobileIsValid,
            street: streetIsValid,
            postal: postalIsValid,
            city: cityIsValid
        });

        const formIsValid = 
            nameIsValid 
            && mobileIsValid 
            && streetIsValid
            && postalIsValid
            && cityIsValid;

        if (!formIsValid) {
            return;
        }

        props.onConfirm({
            name: enteredName,
            mobile: enteredMobile,
            street: enteredStreet,
            postal: enteredPostal,
            city: enteredCity
        });
    };

    const nameControlStyle = `${classes.control} 
                              ${nameHasError && classes.invalid}`;
    const mobileControlStyle = `${classes.control} 
                                ${mobileHasError && classes.invalid}`;
    const streetControlStyle = `${classes.control} 
                                ${streetHasError && classes.invalid}`;
    const postalControlStyle = `${classes.control} 
                                ${postalHasError && classes.invalid}`;
    const cityControlStyle = `${classes.control} 
                              ${cityHasError && classes.invalid}`;


    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameControlStyle}>
                <label htmlFor="name">Your Name</label>
                <input type="text" 
                       id="name" 
                       value={enteredName} 
                       onChange={nameChangeHandler} 
                       onBlur={nameBlurHandler} />
                {nameHasError && <p>Please enter a valid name!</p>}
            </div>
            <div className={mobileControlStyle}>
                <label htmlFor="mobile">Mobile Number</label>
                <input type="number" 
                       id="mobile" 
                       value={enteredMobile} 
                       onChange={mobileChangeHandler} 
                       onBlur={mobileBlurHandler} />
                {mobileHasError && <p>Please enter a valid mobile number!</p>}
            </div>
            <div className={streetControlStyle}>
                <label htmlFor="street">Street</label>
                <input type="text" 
                       id="street" 
                       value={enteredStreet} 
                       onChange={streetChangeHandler} 
                       onBlur={streetBlurHandler} />
                {streetHasError && <p>Please enter a valid street!</p>}
            </div>
            <div className={postalControlStyle}>
                <label htmlFor="postal">Postal Code</label>
                <input type="number" 
                       id="postal" 
                       value={enteredPostal} 
                       onChange={postalChangeHandler} 
                       onBlur={postalBlurHandler} />
                {postalHasError && <p>Please enter a valid postal code! (4 characters long)</p>}
            </div>
            <div className={cityControlStyle}>
                <label htmlFor="city">City</label>
                <input type="text" 
                       id="city" 
                       value={enteredCity} 
                       onChange={cityChangeHandler} 
                       onBlur={cityBlurHandler} />
                {cityHasError && <p>Please enter a valid city!</p>}
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;