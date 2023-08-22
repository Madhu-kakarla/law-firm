import React from 'react';
import styles from './Header.module.css';
import Logo from '../../assets/logo.png';
import NavBar from '../NavBar/NavBar';
import { Button } from '@mui/material';

const Header = () => {
  return (
    <div className={styles.headerWrapper} id='top'>
      <header className={styles.header}>
				<img src={Logo} alt='Logo' height='25' />
				<NavBar />
				<Button variant='outlined' color='inherit'>Contact Now</Button>
			</header>
    </div>
  )
}

export default Header