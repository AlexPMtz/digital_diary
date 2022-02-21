import React from 'react'
import Styles from './Navbar.module.css'
import icon from '../../../assets/logoMex.svg';
import search from '../../../assets/search.svg';

const Navbar = () => {
  return (
    <div className={"nav " + Styles.mainContainer}>
      <div className={Styles.items + " container-lg"}>
        <img style={{ height: 48, width: 128 }} src={icon} />
        <div className='d-flex align-items-center'>
          <span className={Styles.links}>Trámites</span>
          <span className={Styles.links}>Gobierno</span>
          <img style={{ height: 20, width: 20, color:'white' }} src={search} />
        </div>
      </div>
    </div>
  )
}

export default Navbar