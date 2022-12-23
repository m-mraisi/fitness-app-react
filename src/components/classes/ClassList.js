import { useSelector } from "react-redux";
import ClassItem from "./ClassItem";
import classes from "./ClassList.module.css";

const ClassList = () => {
  const sessions = useSelector((state) => state.sessions);

  return (
    <div className={classes.sessions}>
      <h1 className={classes.introTitle}>Our Classes</h1>
      <p className={classes.introPar}>
        Let us help you find a class that meets your fitness goals.
      </p>
      <div className={classes.sessionsList}>
        {sessions.map((session) => (
          <ClassItem classItem={session} key={session.id} />
        ))}
      </div>
    </div>
  );
};

export default ClassList;
