import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../layout'
import UserInfo from '../components/UserInfo'
import PostTags from '../components/PostTags'
// import SocialLinks from '../components/SocialLinks.jsx';
import SEO from '../components/SEO'
import config from '../data/config'

export default class PostTemplate extends React.Component {
    render() {
        const { slug } = this.props.pageContext
        const postNode = this.props.data.mdx
        const post = postNode.frontmatter
        if (!post.id) {
            post.id = slug
        }
        if (!post.category_id) {
            post.category_id = config.postDefaultCategoryID
        }
        return (
            <Layout>
                <article className="p-20 prose lg:prose-xl">
                    <Helmet>
                        <title>{`${post.title} | ${config.siteTitle}`}</title>
                    </Helmet>
                    <SEO postPath={slug} postNode={postNode} postSEO />
                    <div>
                        <h1>{post.title}</h1>
                        <Img fixed={post.cover} />
                        <MDXRenderer>{post.body}</MDXRenderer>
                        <div className="post-meta">
                            <PostTags tags={post.tags} />
                            {/* <SocialLinks postPath={slug} postNode={postNode} /> */}
                        </div>
                        <UserInfo config={config} />
                    </div>
                </article>
            </Layout>
        )
    }
}

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            id
            body
            excerpt
            frontmatter {
                title
                cover
                date
                category
                tags
            }
            fields {
                slug
                date
            }
        }
    }
`
