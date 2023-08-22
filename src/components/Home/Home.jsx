import React from 'react'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import Section from '../Section/Section'
import styles from './Home.module.css'
import ChooseUs from '../ChooseUs/ChooseUs'
import Practice from '../Practice/Practice'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div className={styles.mainWrapper}>
      <Header />
			<Hero />
			<Section />
			<ChooseUs />
			<Practice />
			<Footer />
    </div>
  )
}

export default Home