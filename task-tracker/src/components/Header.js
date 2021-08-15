import PropTypes from "prop-types";
import Button from "./Button";

const Header = (props) => {
  const handleOnClick = () => {
    console.log("button click");
  };

  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button color="green" text="Add" handleOnClick={handleOnClick} />
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
