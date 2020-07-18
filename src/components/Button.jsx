import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ link, label, bg }) => (
  <a href={link} bg={bg}>
    <div>{label}</div>
  </a>
);

export default Button;

Button.PropTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
};
