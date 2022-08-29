import React from 'react'
import styles from './Symptoms.module.css'
import human_vector from '../../svg/Symptom_vector.svg'



const Symptom = () => {
  return (
    <div className={styles.container}>
      <div className={styles.symptom_content}>
        <div className={styles.main}>
          <button className={styles.btn}>Corona Virus Symptoms</button>
          <h1 className={styles.Symptom}>What are the symptoms?</h1>
          <p className={styles.test}>People may be sick with the virus for 1 to 14 days before developing symptoms. The most common <br /> symptoms of coronavirus disease (COVID-19) are fever, tiredness, and dry cough. Less common symptoms <br /> are aches and pains, sore throat, diarrhoea, conjuctivitis, headache, loss of taste or smell, a <br /> rash on skin or discolouration of fingers or toes. Serious symptoms are difficulty in brething or shortness <br /> of breath, ches pain or pressure, loss of speech movement. Most people (about 80%) recover from the <br /> disease without needing special treatment. More rarely, the disease can be serious and even fatal. Older <br /> people, and people with other medical conditions (such as asthma, diabetes, or heart disease), may be more <br /> vulnerable to becoming severely ill.</p>
        </div>
        <img className={styles.img} src={human_vector} alt={human_vector} />
      </div>
    </div>
  )
}




export default Symptom;