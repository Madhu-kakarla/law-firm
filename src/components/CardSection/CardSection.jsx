import React from 'react';
import styles from './CardSection.module.css';
import thumbnailImg from '../../assets/card-thumbnail.png';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

const CardSection = ({image, heading, content}) => {
  return (
    <div className={styles.wrapper}>
      <Card className={styles.cardWrapper}>
        <CardMedia image={thumbnailImg} title="Thumbnail" className={styles.cardImg}/>
        <CardContent>
          <Typography variant='h5'>{heading}</Typography>
          <Typography variant='body1'>{content}</Typography>
        </CardContent>
        <CardActions>
          <Button variant='contained' color='inherit' className={styles.cardButton}>Read More</Button>
        </CardActions>
      </Card>  
    </div>
  )
}

export default CardSection