import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'gatsby';

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px',
  },
  bmBurgerBars: {
    background: '#000',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '36px',
    width: '36px',
  },
  bmCross: {
    background: '#000',
  },
  bmMenuWrap: {
    position: 'fixed',
  },
  bmMenu: {
    background: '#fff',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#000',
  },
  bmItemList: {
    color: '#000',
    padding: '0.8em',
  },
  bmItem: {
    padding: '1em',
    color: 'black',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

const SiteMenu = () => {
  return (
    // eslint-disable-next-line no-unused-expressions
    <Menu styles={styles} left>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </Menu>
  );
};

export default SiteMenu;
