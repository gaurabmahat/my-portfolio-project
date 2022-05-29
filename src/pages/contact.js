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
          <form
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify-recaptcha="true"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label>Name: <br />
                <input className={styles.inputText} type="text" name="name" placeholder='John Wick' required></input></label>
            </p>
            <p>
              <label>Email: <br />
                <input className={styles.inputText} type="email" name="email" placeholder='johnwick@example.com' required></input></label>
            </p>
            <p>
              <label>Message: <br />
                <textarea className={styles.textArea} name="message" placeholder='Message...' required></textarea></label>
            </p>
            <div data-netlify-recaptcha="true"></div>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  )
}
