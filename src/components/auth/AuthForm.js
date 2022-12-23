import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { authActions } from "../../store/auth";
import { errorActions } from "../../store/error";
import Button from "../UI/Button";
import classes from "./AuthForm.module.css";
const AuthForm = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const enteredEmail = useRef();
  const enteredPassword = useRef();

  const history = useHistory();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const validatePassword = (password) => {
    return String(password).length >= 8;
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const email = enteredEmail.current.value;
    const password = enteredPassword.current.value;
    if (!validateEmail(email)) {
      dispatch(errorActions.setErrorMessage("Invalid email!"));
      return;
    }
    if (!validatePassword(password)) {
      dispatch(
        errorActions.setErrorMessage(
          "Password must be eight characters, at least one letter and one number"
        )
      );
      return;
    }
    dispatch(errorActions.clear());
    dispatch(authActions.login());
    if (isLogin) {
      history.replace("/classes");
    } else {
      history.replace("/auth");
    }
    setIsLogin(true);
  };

  const startedTyping = () => {
    dispatch(errorActions.clear());
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={onSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            ref={enteredEmail}
            onChange={startedTyping}
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            ref={enteredPassword}
            onChange={startedTyping}
            required
          />
        </div>
        <div className={classes.actions}>
          {
            <Button type="submit">
              {isLogin ? "Login" : "Create Account"}
            </Button>
          }

          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
