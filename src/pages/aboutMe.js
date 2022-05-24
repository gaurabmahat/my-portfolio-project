import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

export default function AboutMe({ data }) {
  const message = data.markdownRemark

  return (
    <Layout>
      <div>
        <h1>About Me</h1>
        <div dangerouslySetInnerHTML={{__html: message.html}}></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query AboutMePageQuery {
    markdownRemark(frontmatter: {title: {eq: "About me message"}}) {
      html
    }
  }
`
