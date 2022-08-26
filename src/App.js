import React from 'react'
import { Navbar, Card, CountryPicker } from './Components'


import styles from './App.module.css'

function App() {
  return (
    <div className={styles}>
      <Navbar />
      <Card /> 
      <CountryPicker /> 
    </div>
  );
}

export default App;
