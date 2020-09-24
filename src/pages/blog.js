import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../layout/index.js'
import PostListing from '../components/PostListing'
import SEO from '../components/SEO'
import config from '../data/config'

class Index extends React.Component {
    render() {
        const postEdges = this.props.data.allMarkdownRemark.edges
        return (
            <Layout>
                <div className="index-container">
                    <Helmet title={config.siteTitle} />
                    <SEO />
                    <PostListing postEdges={postEdges} />
                </div>
            </Layout>
        )
    }
}

export default Index

/* eslint no-undef: "off" */
export const pageQuery = graphql`
    query BlogQuery {
        allMdx(limit: 2000, sort: { fields: [fields___date], order: DESC }) {
            edges {
                node {
                    fields {
                        slug
                        date
                    }
                    excerpt
                    timeToRead
                    frontmatter {
                        title
                        cover
                        tags
                        cover
                        date
                    }
                }
            }
        }
    }
`
