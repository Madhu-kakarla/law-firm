import React from 'react';
import styles from './Hero.module.css';
import BannerImg from '../../assets/banner-right.png';
import { Button, FormControl, InputAdornment, OutlinedInput, TextField, Typography } from '@mui/material';
import { Email } from '@mui/icons-material';

const Hero = () => {
  return (
    <div className={styles.wrapper}>
			<div className={styles.banner}>
				<div className={styles.bannerLeft}>
					<Typography variant='h2'>You don’t have to</Typography>
					<Typography variant='h2' sx={{fontWeight: '400'}} gutterBottom>Fight them Alone.</Typography>
					<Typography variant='body1' gutterBottom>
						Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.
					</Typography>
					{/* <TextField label='outlined' variant='outlined' placeholder='Enter your emal address' className={styles.emailInput} /> */}
					<FormControl className={styles.inputWrapper}>
						<OutlinedInput
							startAdornment={
								<InputAdornment position="start">
									<Email fontSize='large' style={{ color: 'rgba(255,255, 255, 0.4)'}} />
								</InputAdornment>
							}
							endAdornment={
							<InputAdornment position="end">
								<Button variant='contained' className={styles.inputButton}>Let's Talk</Button>
								</InputAdornment>
							}
							aria-describedby="outlined-weight-helper-text"
							className={styles.emailInput}
							placeholder='Enter your emal address'
						/>
					</FormControl>
				</div>
				<div className={styles.bannerRight}>
					<img src={BannerImg} alt='Banner' />
				</div>
			</div>
		</div>
  )
}

export default Hero