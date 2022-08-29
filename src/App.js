import React from 'react'
import { Navbar, Card, CountryPicker, Symptom , Protect, Footer } from './Components'
import styles from './App.module.css'


function App() {
  return (
    <div className={styles}>
      <Navbar />
      <Card /> 
      <CountryPicker /> 
      <Symptom />
      <Protect />
      <Footer />
    </div>
  );
}

export default App;
