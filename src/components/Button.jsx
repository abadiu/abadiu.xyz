import React from 'react';
import { AwesomeButton } from 'react-awesome-button';

function Button(props) {
  return (
    <AwesomeButton
      type="primary"
      disabled={false}
      href={props.link}
      target="_blank"
      action="clicked"
    >
      {props.label}
    </AwesomeButton>
  );
}

export default Button;
