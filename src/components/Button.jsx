import React from 'react';
import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';

function Button(props) {
  return (
    <AwesomeButton
      type="primary"
      disabled={false}
      href={props.link}
      target="_blank"
      action="clicked"
      cssModule={AwesomeButtonStyles}
    >
      {props.label}
    </AwesomeButton>
  );
}

export default Button;
