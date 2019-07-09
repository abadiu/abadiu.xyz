/* eslint-disable import/no-unresolved */
import React from 'react';
import Helmet from 'react-helmet';

import GlobalStyle from '../styles/global';
import SEO from '../components/SEO';
import SiteMenu from '../components/Menu';
import 'typeface-cantata-one';
import 'typeface-open-sans';
import config from '../../data/SiteConfig';
// import "./index.css";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div id="pageWrapId">
        <SEO />
        <GlobalStyle />
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <SiteMenu />
        {children}
      </div>
    );
  }
}
