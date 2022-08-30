import React, { useEffect, useState } from 'react'
import styles from './CountryPicker.module.css'
import Map from '../../svg/Map.svg'

import axiosInstance from '../../api'




const CountryPicker = () => {

  const [countriesPicker, setcountriesPicker] = useState([]);
  const [correntIndex, setCorrentIndex] = useState(0);
  const [date, setDate] = useState(0);


  useEffect(() => {
    axiosInstance.get(`/summary`)
    .then(res => {
      if (res.status === 200) {
        setcountriesPicker(res?.data?.Countries);
        setDate(res.data.Date);
      }
      return res;
    })
    .catch(err => console.log(err, "something went wrong....!" ))
  }, [])



  return (
    <div className={styles.container}>
      <div className={styles.country_content}>
        <div className={styles.topCountries}>
          <div></div>
          <h1>Top Affected Countries</h1>
          <div className={styles.btn_last_upadte}>Last Updated: {new Date(date).toDateString()} </div>
        </div>
        <h1 className={styles.countries_header}>Countries</h1>
        <div className={styles.country_flex_content}>
          <div className={styles.countries}>
            <div className={styles.countries_flow}>
              {
                countriesPicker?.map((country, index) => <p key={country.ID} value={country.ID} onClick={() => setCorrentIndex(index)}>{country.Country}</p>)
              }
            </div>
          </div>
          <div className={styles.countries_results}>
            <h1>{countriesPicker[correntIndex]?.Country}</h1>
            <div className={styles.cards}>
              <div className={styles.result_Total_Cases}>
                <p>Total Cases</p>
                <span>{countriesPicker[correntIndex]?.TotalConfirmed}</span>
              </div>
              <div className={styles.result_Active_Cases}>
                <p>Active Cases</p>
                <span>{countriesPicker[correntIndex]?.NewConfirmed}</span>
              </div>
              <div className={styles.result_Recovered}>
                <p>Recovered</p>
                <span>{countriesPicker[correntIndex]?.TotalRecovered}</span>
              </div>
              <div className={styles.result_Total_Deaths}>
                <p>Total Deaths</p>
                <span>{countriesPicker[correntIndex]?.TotalDeaths}</span>
              </div>
              <div className={styles.result_New_Cases}>
                <p>New Cases</p>
                <span>{countriesPicker[correntIndex]?.NewDeaths}</span>
              </div>
              <div className={styles.result_New_Deaths}>
                <p>New Deaths</p>
                <span>{countriesPicker[correntIndex]?.NewConfirmed}</span>
              </div>
            </div>
          </div>
          <div className={styles.countries_map}>
            <img src={Map} alt={Map} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryPicker;