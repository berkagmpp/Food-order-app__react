# Food-order-app__react

<a href="#"><img width="10%" src="https://img.shields.io/badge/React-005FED?style=flat-square&logo=React&logoColor=white"/></a>

### What I Applied
- sending a HTTP request to back-end rest API using Firebase console(by Google, test mode realtime database)
- Fetch from the API from a backend app
- sending a POST HTTP request after the front-end validation
- Applied error masseges and CSS reactions for better User Experience
- Applied a custom hook (use-input.js to Checkout.js)
- Moving HTML elements for accessibility using react.dom / creatPortal() Backdrop and Modal (Modal.js)
- Transmission of input props using spread operator [...props.input]
- useReducer() from react (CartProvider.js to App.js)
- React.createContext() from React (cart-context.js)
- useContext() from react (HeaderCartButton.js, MealItem.js, Cart.js)
- React.forwardRef() from React (Input.js (customed component))
- useRef() from react (MealItemForm.js)
- useEffect() from react for bump animation (HeaderCartButton.js)
- useState() from react (App.js, Cart.js, MealItemForm.js, HeaderCartButton.js, Checkout.js, use-input.js)
- Fragment from react (App.js, Header.js)
- className[ ] dot notation handle (when CSS class with a dash inside of it)
- use SVG code from w3.org in JSX code
- Show item list (connected component) in JSX using map() from dummy-data
- Reusable wrapper component(UI) with props.children (Card.js, Input.js, Modal.js)
- css-module

### Key Function
- The user can enter the number of menus ordered in the amount. And add the item to the cart by pressing the '+Add' button.
- When the user presses the 'Your Cart' button in the upper right corner, the cart modal is activated and the items stored are displayed.
- The user may adjust or delete the number of ordered items in the cart modal, and can check the final price.
- When the user presses the 'Close' button, the modal is deactivated and the cart is maintained.
- When the user presses the 'Order' button, the input fields appear that enter the information.
- Each input field must be filled out according to the conditions, and invalid cases, messages and status are displayed.
- When all inputs are completed, the user presses the 'Confirm' button to send an HTTP request.
- When the transmission is completed, a confirmation message is displayed, and the cart is initialized.

### Preview
<a href="#"><img src="https://user-images.githubusercontent.com/84049077/165442563-d7f04dd6-7bbd-41d9-9c40-b55f8b2da5db.gif"/></a>
<a href="#"><img src="https://user-images.githubusercontent.com/84049077/168718645-9a3151a3-d51f-4424-ae98-9799c010590f.gif"/></a>
