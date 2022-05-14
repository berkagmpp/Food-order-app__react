import classes from './Checkout.module.css';

const Checkout = props => {

    return (
        <form>
            <div className={classes.control}>
                <lable htmlFor="name">Your Name</lable>
                <input type="text" id="name" />
            </div>
            <div className={classes.control}>
                <lable htmlFor="contact">Contact</lable>
                <input type="text" id="contact" />
            </div>
            <div className={classes.control}>
                <lable htmlFor="street">Street</lable>
                <input type="text" id="street" />
            </div>
            <div className={classes.control}>
                <lable htmlFor="postal">Postal Code</lable>
                <input type="text" id="postal" />
            </div>
            <div className={classes.control}>
                <lable htmlFor="city">City</lable>
                <input type="text" id="city" />
            </div>
            <button>Cancel</button>
            <button>Confirm</button>
        </form>
    );
};

export default Checkout;