import React from 'react'
import styles from './Footer.module.css'
import arrow_right_up from '../../svg/arrow_right_up.svg'


const Footer = () => {
  return (
    <div className={styles.footer_content}>
      <footer className={styles.container}>
        <div className={styles.footer_flex_content}>
          <div className={styles.footer_primary}>
            <p>About</p>
            <div className={styles.footer_primary_info}>
              <h1>API</h1>
              <h1>Contact</h1>
              <h1>About</h1>
            </div>
          </div>
          <div className={styles.footer_secondary}>
            <p>Contact</p>
            <div className={styles.footer_seconary_info}>
              <a href="https://www.info@coronatracker.com">info@coronatracker.com</a><br />
              <a href="https://www.Instagram.com">
               Instagram
              <span>
                <img src={arrow_right_up} alt={arrow_right_up} />
              </span>
              </a><br />
              <a href="https://www.Pinterest.com">
              Pinterest
              <span>
                <img src={arrow_right_up} alt={arrow_right_up} />
              </span>
              </a><br />
              <a href="https://www.Twitter.com">
              Twitter
              <span>
                <img src={arrow_right_up} alt={arrow_right_up} />
              </span>
              </a><br />
              <a 
               href="https://www.Facebook.com">
                Facebook
              <span
              >
                <img src={arrow_right_up} alt={arrow_right_up} />
              </span>
              </a>
            </div>
          </div>
          <div className={styles.footer_univalsity}>
            <p>Join our newsletter</p>
            <form action="#">
              <label htmlFor="Your email">Your email</label>
              <input name='email' type="email" required />
              <button>
                <img src={arrow_right_up} alt={arrow_right_up} />
              </button>
            </form>
          </div>
        </div> 
        <div className={styles.footer_last}>
          <p className={styles.tem_condition}>Terms & Conditions</p>
          <p className={styles.privacy_policy}>Privacy Policy</p>
        </div>
      </footer>
      
    </div>
  )
}


export default Footer;