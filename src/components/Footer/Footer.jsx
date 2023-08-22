import React from 'react';
import Logo from '../../assets/logo.png';
import styles from './Footer.module.css';
import NavBar from '../NavBar/NavBar';
import SocialIcons from '../SocialIcons/SocialIcons';
import FooterLinks from '../FooterLinks/FooterLinks';

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <footer className={styles.footer}>
				<div className={styles.footerTop}>
					<img src={Logo} alt='logo' height='25' />
					<NavBar />
					<SocialIcons />
				</div>
				<div className={styles.footerBottom}>
					<FooterLinks />
				</div>
			</footer>
    </div>
  )
}

export default Footer