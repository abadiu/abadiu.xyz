/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import moment from 'moment';

let year = moment().year();

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>&copy; {year} Source code on{' '}
        <a href="https://github.com/abadiu/abadiu">Github</a>.<br/> Made by{' '}
        <a href="https://abadiu.xyz">Adrian Badiu</a>.
        </p>
      </footer>
    );
  }
}

export default Footer;
