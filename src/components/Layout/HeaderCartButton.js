import React, { useContext, useEffect, useState } from "react";

import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {   // -> cartCtx.items.reduce()
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {   // -> cartCtx.items.length === 0
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {  // remove animation for reuse (evert time cart changes)
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);    // CLEAN UP fn: when this effect reruns, clear the timer
        };
    }, [items]);    // if using cartCtx instead of items, animation will be excuted every time any change

    return (
        <button type="button" className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
}

export default HeaderCartButton;