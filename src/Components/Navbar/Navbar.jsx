import React from 'react'
import Styles from './Navbar.module.css';
import icon from '../../assets/logoo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={"nav " + Styles.mainContainer}>
      <div className={Styles.items + " container-lg"}>
        <img style={{ height: 30, width: 30 }} src={icon} />
        <div className='d-flex'>
          <Link className={Styles.noUnderline} to={"/"}><span className={Styles.links}>Stories</span></Link>
          <Link className={Styles.noUnderline} to={"/post"}><span className={Styles.links}>Post</span></Link>
          <Link className={Styles.noUnderline} to={"/author"}><span className={Styles.links}>Author</span></Link>
          <form className="d-flex">
            <input className={Styles.search + " form-control me-1"} type="search" placeholder="Search" aria-label="Search" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Navbar