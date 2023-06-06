import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Button = (props) => {
    let {btnstyle, to, children} = props
  return (
    <Link to={to} className={btnstyle}>
      {children}
    </Link>
  )
}

Button.propTypes = {
    btnstyle: PropTypes.string.isRequired,
    to: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default Button
