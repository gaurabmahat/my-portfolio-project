import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home({ data }) {
  console.log(data)
  const image = data.image.childImageSharp
  const message = data.message

  return (
    <Layout>
      <section className={styles.header}>
        <div className={styles.html} dangerouslySetInnerHTML={{ __html: message.html }} />
        {/* <GatsbyImage
          image={image.gatsbyImageData}
          alt="my image"
        /> */}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    image: file(relativePath: {eq: "self-image-home.png"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    message: markdownRemark(frontmatter: {title: {eq: "Home page message"}}) {
      html
    }
  }
`