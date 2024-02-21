import React from 'react'
import Headphones from "../../assets/vibrating-headphone.png"
import styles from "./Hero.module.css"
const Hero = () => {
  return (
    <div className={styles.Hero}>

        <p className={styles.HeroText}>100 Thousand Songs, ad-free <br />Over thousands podcast episodes </p>
        <img src={Headphones} alt="headphones" className={styles.HeroImage}></img>
    </div>
  )
}

export default Hero