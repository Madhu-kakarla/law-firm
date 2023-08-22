import React from 'react';
import styles from './Section.module.css';
import { Divider, Typography } from '@mui/material';

const Section = () => {
  return (
    <div className={styles.wrapper} id='attorneys'>
			<div className={styles.sectionLeft}>
				<Typography variant='h3'>Let’s Introduce</Typography>
				<Typography variant='h3'>Ourself</Typography>
			</div>
			<Divider orientation="vertical" variant="middle" flexItem className={styles.divider} />
			<div className={styles.sectionRight}>
				<Typography variant='h5'>Criminal Lawyer</Typography>
				<Typography variant='body1'>
					Amet minim mollit non deserunt ullamco est <br />sit aliqua dolor do amet sint. Velit officia consequatduis<br />enim velit mollit Exercitation.
				</Typography>
			</div>
    </div>
  )
}

export default Section