import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      onClick={props.handleClickBtn}
      style={{ backgroundColor: props.color }}
      className="btn"
    >
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  text: "default",
  color: "green",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  handleClickBtn: PropTypes.func.isRequired,
};

export default Button;
