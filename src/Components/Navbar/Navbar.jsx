import React from 'react'
import Styles from './Navbar.module.css';
import icon from '../../assets/logoo.png';

const Navbar = () => {
  return (
    <div className={"nav " + Styles.mainContainer}>

      <img style={{ height: 30, width: 30 }} src={icon} />

      <div className={Styles.items}>
        <span className={Styles.links}>Stories</span>
        <span className={Styles.links}>Post</span>
        <span className={Styles.links}>Author</span>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
          <button className="btn btn-primary" type="text">Buscar</button>
        </form>
      </div>
    </div>
  )
}

export default Navbar