import React from 'react';
import styles from './SocialIcons.module.css'
import { Facebook, Instagram, Pinterest, Twitter } from '@mui/icons-material';

const SocialIcons = () => {
  return (
    <div className={styles.wrapper}>
      <a href='https://www.instagram.com/' title='Instagram'><Instagram className={styles.iconStyle} /></a>
			<a href='https://www.facebook.com/' title='Facebook'><Facebook className={styles.iconStyle} /></a>
			<a href='https://twitter.com/' title='Twitter'><Twitter className={styles.iconStyle} /></a>
			<a href='https://in.pinterest.com/' title='Pinterest'><Pinterest className={styles.iconStyle} /></a>
    </div>
  )
}

export default SocialIcons