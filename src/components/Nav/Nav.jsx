import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from '../Nav/Nav.module.css'
import { Link } from "react-router-dom";

const Nav = ({onSearch}) => {
  return (
    <nav className={styles.nav}>
      <Link to={'/'}>
      <button>lOGOUT</button>
      </Link>
      <Link to='/home'>
      <button>Home</button>
      </Link>

      <Link to='/about'>
        <button>About</button>
      </Link>
      <SearchBar onSearch={onSearch}/>
    </nav> 
  )
}

export default Nav;