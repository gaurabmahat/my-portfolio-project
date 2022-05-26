import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home({ data }) {
  const image = data.image.childImageSharp

  return (
    <Layout>
      <section className={styles.header}>
        <div className={styles.homeMessage}>
          <p>Hi, Y'all,</p>
          <h1>I am <span className={styles.name}>Gaurab</span>,</h1>
          <h4>I am learning to be a Developer during the day</h4>
          <p>& bookworm during the nights.</p>
        </div>
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
  }
` 