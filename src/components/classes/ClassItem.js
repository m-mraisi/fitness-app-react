import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";
import { sessionActions } from "../../store/sessions";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./ClassItem.module.css";
const ClassItem = (props) => {
  const dispatch = useDispatch();
  const { image, name, instructor, duration, id, isDisabled } = props.classItem;

  const buttonClasses = isDisabled
    ? `${classes.button} ${classes.disabled}`
    : `${classes.button}`;

  const clickButtonHandler = (id) => {
    if (!isDisabled) {
      dispatch(sessionActions.bookClass(id));
      dispatch(cartActions.addClass(props.classItem));
    }
  };

  return (
    <Card className={classes.classItem} key={id}>
      <img className={classes.image} src={image} alt="" />
      <div className={classes.detailsContainer}>
        <div className={classes.desc}>
          <span>
            {name} with {instructor}
          </span>
        </div>
        <div className={classes.duration}>
          <span>The class duration is {duration} min</span>
        </div>
        <Button
          className={buttonClasses}
          onClick={clickButtonHandler.bind(null, id)}
        >
          {isDisabled ? "Booked!" : "Book Now"}
        </Button>
      </div>
    </Card>
  );
};

export default ClassItem;
