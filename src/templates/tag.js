import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import config from '../data/config'

export default class TagTemplate extends React.Component {
    render() {
        const { tag } = this.props.pageContext
        const postEdges = this.props.data.allMarkdownRemark.edges
        return (
            <Layout>
                <div className="tag-container">
                    <Helmet
                        title={`Posts tagged as "${tag}" | ${config.siteTitle}`}
                    />
                    <PostListing postEdges={postEdges} />
                </div>
            </Layout>
        )
    }
}

export const pageQuery = graphql`
    query TagPage($tag: String) {
        allMdx(
            limit: 1000
            sort: { fields: [fields___date], order: DESC }
            filter: { frontmatter: { tags: { in: [$tag] } } }
        ) {
            totalCount
            edges {
                node {
                    fields {
                        slug
                        date
                    }
                    excerpt
                    frontmatter {
                        title
                        tags
                        cover
                        date
                    }
                }
            }
        }
    }
`
