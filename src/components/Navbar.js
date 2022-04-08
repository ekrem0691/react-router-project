/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'


const Navbar = () => {
  return (
    <div className={styles.navbar}>

        <br>
        </br>


        <Link to="/">Home</Link>
        <NavLink to="/about" className={({isActive}) => isActive? styles.activeStyle : undefined }>About</NavLink>
        <NavLink to="/products" className={({isActive}) => isActive? styles.activeStyle : undefined }>Products</NavLink>
        {/* <a href="/">Home</a>
        <a href="/About">About</a>
        <a href="/Products">Products</a> */}
    </div>
  )
}

export default Navbar;