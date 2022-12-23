import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { errorActions } from "../../store/error";
import Cart from "../cart/Cart";
import Header from "./Header";
import classes from "./Layout.module.css";
const Layout = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const errorMessage = useSelector((state) => state.error.errorMessage);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const location = useLocation();
  // const pathName = location.pathname;
  useEffect(() => {
    dispatch(errorActions.clear());
  }, [dispatch, location]);
  // const showBackgroundImage =
  //   pathName.endsWith("/") || pathName.endsWith("/auth");

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <Fragment>
      <div className={classes.imageContainer}>
        <img
          className={classes.image}
          // src=""
          src={
            screenWidth > 700
              ? "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              : "https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1785&q=80"
          }
          alt=""
        />
      </div>
      <Header showCart={showCartHandler} />
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <main className={classes.main}>
        {errorMessage && <p className={classes.error}>{errorMessage}</p>}
        {props.children}
      </main>
    </Fragment>
  );
};

export default Layout;
