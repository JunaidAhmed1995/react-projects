import PropTypes from "prop-types";
import { useLocation } from "react-router";
import Button from "./Button";

const Header = (props) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{props.title}</h1>
      {location.pathname === "/" && (
        <Button
          color={props.showAddTask ? "red" : "green"}
          text={props.showAddTask ? "Close" : "Add"}
          handleOnClick={props.handleShowAddTask}
        />
      )}
    </header>
  );
};

//defaultProps are used when below properties are not passed as props
//e.g, if we not pass title as props then this value is displayed.
Header.defaultProps = {
  title: "Task Tracker",
};

//To check the type of Prop
//if we pass title value other than string then it shows Warning!
//if we add {title: PropTypes.string.isRequired} then if we don't pass title as prop then shows Error!
Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
