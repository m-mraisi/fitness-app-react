import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CartIcon from "../cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartItems = useSelector((state) => state.cart.sessions);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  useEffect(() => {
    if (cartItems.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartItems]);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      {screenWidth > 650 && <span>Your Cart</span>}
      <span className={classes.badge}>{cartItems.length}</span>
    </button>
  );
};

export default HeaderCartButton;
