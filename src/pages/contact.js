import React from 'react'
import Layout from '../components/Layout'
import * as styles from "../styles/contact.module.css"

export default function Contact() {
  return (
    <Layout>
      <div>
        <div className={styles.h1TextDiv}>
          <h1 className={styles.h1}>Contact Me</h1>
        </div>
        <p>You can contact me through gmail at:-
          <a className={styles.a} href="mailto:gaurab.mahat.work@gmail.com" target="_blank" rel="noopener noreferrer">
            gaurab.mahat.work@gmail.com
          </a>
          .</p>
        <p>You can also visit my LinkedIn page at:-
          <a className={styles.a} href="https://www.linkedin.com/in/gaurab-mahat-937299191/" target="_blank" rel="noopener noreferrer">
            https://www.linkedin.com/in/gaurab-mahat-937299191/
          </a>
          .</p>
      </div>
    </Layout>
  )
}
