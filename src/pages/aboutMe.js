import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from "../styles/aboutMe.module.css"

export default function AboutMe({ data }) {
  const message = data.markdownRemark

  return (
    <Layout>
      <div>
        <div className={styles.h1TextDiv}>
          <h1 className={styles.h1}>About Me</h1>
        </div>
        <div className={styles.body} dangerouslySetInnerHTML={{ __html: message.html }}></div>
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
