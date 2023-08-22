import React from 'react'
import styles from './FooterLinks.module.css'
import { Copyright } from '@mui/icons-material'
import { Typography } from '@mui/material'

const FooterLinks = () => {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}>
				<ul>
					<li><Typography variant='caption'><Copyright fontSize='0.75rem' /> {new Date().getFullYear()} Acme. All rights reserved.</Typography></li>
					<li><a href='#privacy'>Privacy Policy</a></li>
					<li><a href='#terms'>Terms of Service</a></li>
				</ul>
			</nav>
    </div>
  )
}

export default FooterLinks