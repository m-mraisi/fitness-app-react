import { NavLink, useHistory } from "react-router-dom";
import classes from "./Header.module.css";
import { HiMenu } from "react-icons/hi";
import { useEffect, useState } from "react";
import HeaderCartButton from "./HeaderCartButton";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth";

const Header = (props) => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const history = useHistory();

  const toggleMenuHandler = () => {
    setToggleMenu((previousValue) => {
      setToggleMenu(!previousValue);
    });
  };

  history.listen((location) => {
    setToggleMenu(false);
  });

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Get Fit Studios</div>
      <nav>
        {(toggleMenu || screenWidth > 650) && (
          <ul className={classes.list}>
            <li>
              <NavLink to="/" exact activeClassName={classes.active}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/classes" activeClassName={classes.active}>
                Classes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/auth"
                activeClassName={classes.active}
                onClick={logoutHandler}
              >
                {!isAuth ? "Login" : "Logout"}
              </NavLink>
            </li>
          </ul>
        )}
        <HeaderCartButton onClick={props.showCart} />
        <button className={classes.btn} onClick={toggleMenuHandler}>
          <HiMenu />
        </button>
      </nav>
    </header>
  );
};

export default Header;
