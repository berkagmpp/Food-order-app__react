import { useState } from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validateValue(enteredValue);
    const hasError = !isValid && isTouched;

    const valueChangeHandler = event => {
        setEnteredValue(event.target.value);
    };

    const inputBlurHandler = event => {
        setIsTouched(true);
    };

    return {
        value: enteredValue,
        isValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler
    };
};

export default useInput;