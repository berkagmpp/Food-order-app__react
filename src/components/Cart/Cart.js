import react, { useState } from 'react';

import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = props => {
    const cartItems = <ul className={classes['cart-items']}> {
        [{id: 'm1', name: 'Sushi', amount: 2, price: 22.99}].map(
            item => <li key={item.id}>{item.name}</li>
        )
    }</ul>

    return (
        <Modal onClose={props.onClose} >
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>55.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes[`button--alt`]} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
}

export default Cart; 