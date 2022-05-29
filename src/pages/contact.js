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
        <div className={styles.form}>
          <form name="contact" method="POST" data-netlify="true">
            <p>
              <label>Name: <br />
                <input className={styles.inputText} type="text" name="name"></input></label>
            </p>
            <p>
              <label>Email: <br />
                <input className={styles.inputText} type="email" name="email"></input></label>
            </p>
            <p>
              <label>Message: <br />
                <textarea className={styles.textArea} name="message"></textarea></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  )
}
