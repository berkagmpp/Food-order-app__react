import React, { Fragment, useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    }

    const hideCartHandler = () => {
        setCartIsShown(false);
    }
    
// {cartIsShown && <Cart onClose={hideCartHandler} />}
// cartIsShown == true => <Cart /> is shown and pass {hideCartHandler} function
    return (
        <Fragment>
            {cartIsShown && <Cart onClose={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <main><Meals /></main>
        </Fragment>
    );
}

export default App;
