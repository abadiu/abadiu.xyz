/* eslint-disable import/no-unresolved */
import React from 'react';
import Helmet from 'react-helmet';

import SEO from '../components/SEO';
import SiteMenu from '../components/Menu';
import Footer from '../components/Footer';
import config from '../data/config';

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div id="pageWrapId" className="items-center">
        <SEO />
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <SiteMenu />
        <main id="content">{children}</main>
        <Footer />
      </div>
    );
  }
}
