import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../svg/logo.svg'

const Navbar = () => {


  const date = new Date().toDateString()

 

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.nav_flex_content}>
          <div className={styles.logoDiv}>
            <img src={logo} alt={logo} />
            <h1>Cov19Strain</h1>
          </div>
          <ul className={styles.ultilities}>
            <li className={styles.active}>HOME</li>
            <li>SYMPTOMS</li>
            <li>PROTECTION</li>
          </ul>
          <button className={styles.btn_update}> Updated: {date} </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;