import React from 'react'
import { Typography } from '@mui/material';
import CardSection from '../CardSection/CardSection';
import { cardDetails } from '../../mockData/mockData'
import styles from './ChooseUs.module.css';

const ChooseUs = () => {
	const cardsData = cardDetails;
  return (
    <div className={styles.wrapper} id='about-us'>
      <Typography variant='h3' sx={{fontWeight: '500'}}>Why Choose Us</Typography>
			<div className={styles.cardContainer}>
				{cardsData.map(card => <CardSection heading={card.heading} content={card.content} key={card.id} />)}
			</div>
    </div>
  )
}

export default ChooseUs