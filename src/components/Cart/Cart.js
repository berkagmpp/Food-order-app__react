import React, { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = props => {
    const [isCheckout, setIsCheckout] = useState(false);

    const cartCxt = useContext(CartContext);
    
    const totalAmount = `$${cartCxt.totalAmount.toFixed(2)}`;
    const hasItems = cartCxt.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCxt.removeItem(id);
    };
    const cartItemAddHandler = item => {
        cartCxt.addItem({
            ...item, amount: 1
        });
    };

    const cartItems = <ul className={classes['cart-items']}> {
        cartCxt.items.map((item) => (
            <CartItem key={item.id} 
                      name={item.name}
                      amount={item.amount}
                      price={item.price} 
                      onRemove={cartItemRemoveHandler.bind(null, item.id)}
                      onAdd={cartItemAddHandler.bind(null, item)} />
        ))
    }</ul>

    const orderHandler = () => {
        setIsCheckout(true);
    }

    const modalActions = (
        <div className={classes.actions}>
            <button className={classes[`button--alt`]}
                onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button}
                onClick={orderHandler}>Order</button>}
        </div>
    );

    return (
        <Modal onClose={props.onClose} >
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onCancel={props.onClose} />}
            {!isCheckout && modalActions}
        </Modal>
    );
}

export default Cart; 