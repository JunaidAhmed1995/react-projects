import PropTypes from "prop-types";

const Header = (props) => {
  return (
    <header>
      <h1 style={headingStyle}>{props.title}</h1>
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

//used in inline style
const headingStyle = {
  color: "red",
  backgroundColor: "black",
};

export default Header;
