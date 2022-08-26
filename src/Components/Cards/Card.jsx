import React from 'react'

import styles from './Card.module.css'

import { card_vector1, card_vector2, card_vector3 } from '../../Components'

const Card = () => {
  return (
    <>
      <div className={styles.cards_vectors}>
        <img src={card_vector1} alt={card_vector1} />
        <img src={card_vector2} alt={card_vector2} />
        <img src={card_vector3} alt={card_vector3} />
      </div>
      <div className={styles.container}>
        <h1 className={styles.header}>COVID-19 Tracker</h1>
        <div className={styles.card_content}>
          <div className={styles.card_flexDiv}>
            <div className={styles.Cards}>
              <div className={styles.card_rectangelDiv1}></div>
              <div className={styles.card_circleDiv1}>
                <h1>Total Cases</h1>
                <span>296,20000</span>
                <h6>+23444</h6>
              </div>
            </div>
            <div className={styles.Cards}>
              <div className={styles.card_rectangelDiv2}></div>
              <div className={styles.card_circleDiv2}>
                <h1>Total Cases</h1>
                <span>296,20000</span>
                <h6>+23444</h6>
              </div>
            </div>
            <div className={styles.Cards}>
              <div className={styles.card_rectangelDiv3}></div>
              <div className={styles.card_circleDiv3}>
                <h1>Total Cases</h1>
                <span>296,20000</span>
                <h6>+23444</h6>
              </div>
            </div>
            <div className={styles.Cards}>
              <div className={styles.card_rectangelDiv4}></div>
              <div className={styles.card_circleDiv4}>
                <h1>Total Cases</h1>
                <span>296,20000</span>
                <h6>+23444</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}




export default Card;