import React from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart";
import { sessionActions } from "../../store/sessions";

const Cart = (props) => {
  const bookedSessions = useSelector((state) => state.cart.sessions);
  const bookedTotalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const cartItemRemoveHandler = (id) => {
    dispatch(cartActions.removeClass(id));
    dispatch(sessionActions.unBookClass(id));
  };
  const clearItemsHandler = () => {
    dispatch(cartActions.clearCart());
    dispatch(sessionActions.clear());
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {bookedSessions.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          duration={item.duration}
          price={(+item.duration * 0.5).toFixed(2)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      {!bookedSessions.length && (
        <p className={classes.noBookedClasses}>No Classes Booked yet!</p>
      )}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${bookedTotalPrice}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {<button className={classes.button}>Order</button>}
        {
          <button
            className={classes["button--alt"]}
            onClick={clearItemsHandler}
          >
            Clear
          </button>
        }
      </div>
    </Modal>
  );
};

export default Cart;
