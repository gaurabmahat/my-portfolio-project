import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>My Name is Gaurab Mahat</h2>
        </div>
      </section>
    </Layout>
  )
}
