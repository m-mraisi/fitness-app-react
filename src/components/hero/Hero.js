import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../UI/Button";
import classes from "./Hero.module.css";

const Hero = () => {
  const history = useHistory();
  const bookClickHandler = () => {
    history.replace("/classes");
  };
  return (
    <div className={classes.hero}>
      <h1>Let's Get Moving</h1>
      <h2>Welcome to Get Fit Studios,where fitness becomes your lifestyle</h2>
      <Button onClick={bookClickHandler}>Book Now!</Button>
    </div>
  );
};

export default Hero;
