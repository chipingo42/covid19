import React, { useEffect, useState } from 'react'
import styles from './Card.module.css'
import { card_vector1, card_vector2, card_vector3 } from '../../Components'
import axiosInstance from '../../api'



const Card = () => {

  const [TotalConfirmed, setTotalConfirmed] = useState(0)
  const [NewConfirmed, setActiveCases] = useState(0)
  const [TotalRecovered, setTotalRecovered] = useState(0)
  const [TotalDeaths, setTotalDeaths] = useState(0)


  useEffect(() => {
    axiosInstance.get(`/summary`) 
    .then(res => {
      if (res.status === 200) {
        setTotalConfirmed(res?.data?.Global.TotalConfirmed);
        setActiveCases(res?.data?.Global.NewConfirmed);
        setTotalRecovered(res?.data?.Global.TotalRecovered);
        setTotalDeaths(res?.data?.Global.TotalDeaths);
      }
      return res
    })
    .catch(err => console.log(err, "data failed....!"))
  }, [])
 

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
                <span>{TotalConfirmed}</span>
                <h6>+23444</h6>
              </div>
            </div>
            <div className={styles.Cards}>
              <div className={styles.card_rectangelDiv2}></div>
              <div className={styles.card_circleDiv2}>
                <h1>Active Cases</h1>
                <span>{NewConfirmed}</span>
                <h6>+23444</h6>
              </div>
            </div>
            <div className={styles.Cards}>
              <div className={styles.card_rectangelDiv3}></div>
              <div className={styles.card_circleDiv3}>
                <h1>Recovered</h1>
                <span>{TotalRecovered}</span>
                <h6>+23444</h6>
              </div>
            </div>
            <div className={styles.Cards}>
              <div className={styles.card_rectangelDiv4}></div>
              <div className={styles.card_circleDiv4}>
                <h1>Total Deaths</h1>
                <span>{TotalDeaths}</span>
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