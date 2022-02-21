import React from 'react'
import Styles from './Navbar.module.css'
import icon from '../../../assets/logoMex.svg';
import search from '../../../assets/search.svg';
import triangle from '../../../assets/triangle.svg';

const Navbar = () => {
  return (
    <>
      <div className={"nav " + Styles.mainContainer}>
        <div className={Styles.items + " container-lg"}>
          <img style={{ height: 48, width: 128 }} src={icon} />
          <div className='d-flex align-items-center'>
            <span className={Styles.links}>Trámites</span>
            <span className={Styles.links}>Gobierno</span>
            <img style={{ height: 20, width: 20, color: 'white' }} src={search} />
          </div>
        </div>
      </div>

      <div className={'nav ' + Styles.submenu}>
        <div className={Styles.items + " container-lg"}>
          <span className={Styles.cnbbbj}>CNBBBJ</span>
          <div className='d-flex align-items-center'>
            <span className={Styles.links}>Perfil <img className={Styles.triangle} src={triangle} /></span>
            <span className={Styles.links}>Solicitud <img className={Styles.triangle} src={triangle} /></span>
            <span className={Styles.links}>Seguimiento <img className={Styles.triangle} src={triangle} /></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar