import React from 'react'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
				<ul>
					<li><a href='#top'>Home</a></li>
					<li><a href='#attorneys'>Attorneys</a></li>
					<li><a href='#practice-areas'>Practice Areas</a></li>
					<li><a href='#about-us'>About us</a></li>
				</ul>
			</nav>
    </div>
  )
}

export default NavBar