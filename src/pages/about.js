/* eslint-disable import/no-unresolved */
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import About from '../components/About'
import config from '../data/config'

class AboutPage extends Component {
    render() {
        return (
            <Layout>
                <div className="about-container">
                    <Helmet title={`About | ${config.siteTitle}`} />
                    <About />
                </div>
            </Layout>
        )
    }
}

export default AboutPage
