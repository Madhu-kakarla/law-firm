import React from 'react'
import { ImageList, ImageListItem, Typography } from '@mui/material'
import { practiceImages } from '../../mockData/mockData'
import styles from './Practice.module.css'

const Practice = () => {
  return (
    <div className={styles.wrapper} id='practice-areas'>
			<Typography variant='h3' sx={{fontWeight: '500'}}>Area of Practices</Typography>
			<div>
				<ImageList className={styles.imageWrapper}>
					{practiceImages.map((img, idx) => (
						<ImageListItem key={idx} className={styles.imgItem}>
							<img src={img} alt={`Img${idx}`} />
						</ImageListItem>
					))}
				</ImageList>
			</div>
		</div>
  )
}

export default Practice