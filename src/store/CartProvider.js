import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount);

        const existingCartItemIndex = state.items.findIndex(
            item => item.id === action.item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        
        let updatedItems;

        if (existingCartItem) {     // cart already has the added item
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];    // updatedItems is current items,
            updatedItems[existingCartItemIndex] = updatedItem;  // and override updatedItem
        } else {        // cart add the item first time
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    } 

    if (action.type === 'REMOVE') {
        
        const existingCartItemIndex = state.items.findIndex(
            item => item.id === action.id
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;

        let updatedItems;

        if (existingItem.amount === 1) {    // an item which is amount 1
            updatedItems = state.items.filter(item =>   // update items except the item of action.id 
                item.id !== action.id
            );
        } else {
            const updatedItem = {       // an item amount > 1
                ...existingItem,
                amount: existingItem.amount - 1     
            }
            updatedItems = [...state.items];    // updatedItems is current items,
            updatedItems[existingCartItemIndex] = updatedItem; // and override updatedItem
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    return defaultCartState;
}

const CartProvider = props => {
    // const [state, disparchfn] = useReducer(Reducerfn, defaultState);
    // Reducerfn have 2 parameters: (state, action)
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
        dispatchCartAction({type: 'ADD', item: item});
    };

    const removeItemFromCartHandler = id => {
        dispatchCartAction({type: 'REMOVE', id: id});
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;
