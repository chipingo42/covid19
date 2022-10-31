import React from 'react'
import styles from './Protect.module.css'
import { humanVector, vector1, vector2, vector3, vector4, vector5 } from '../../Components'




const Protect = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Protect_content}>
        <div className={styles.flex_content}>
          <img className={styles.img} src={humanVector} alt={humanVector} />
          <main>
            <h1>How can I protect myself from Covid-19?</h1>
            <p>Coronavirus disease spreads primarily through contact with an infected <br /> person when they cough or sneeze. It also spreads when a person touches a surface or object that has the virus on it, then touches their eyes, nose, or <br /> mouth.</p>
            <div className={styles.protect_info}>
              <h1>Whats should <span>I do?</span></h1>
              <div className={styles.protect_info_title}>
                <div className={styles.cards}>
                  <img src={vector1} alt={vector1} />
                  <p>Wear a facemask</p>
                </div>
                <div className={styles.cards}>
                  <img src={vector2} alt={vector2} />
                  <p>Don’t touch your face</p>
                </div>
                <div className={styles.cards}>
                  <img src={vector3} alt={vector3} />
                  <p>Avoid hand contact</p>
                </div>
                <div className={styles.cards}>
                  <img src={vector4} alt={vector4} />
                  <p>Keep safe distance</p>
                </div>
                <div className={styles.cards}>
                  <img src={vector5} alt={vector5} />
                  <p>Stay at home if you can</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}


export default Protect;

