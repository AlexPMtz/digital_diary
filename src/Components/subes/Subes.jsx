import React from 'react'
import Navbar from './navbar/Navbar'
import home from '../../assets/home.svg'
import mayor from '../../assets/mayor.svg'
import Styles from './Subes.module.css'

const Subes = () => {
  return (
    <>
      <Navbar />
      <div className='container-lg' style={{ marginTop: 20 }}>
        <div className='d-flex justify-content-between'>
          <div>
            <img src={home} />
            <img className={Styles.rotate} src={mayor} />
            <span className={Styles.labels}>Inicio</span>
            <img className={Styles.rotate} src={mayor} />
            <span className={Styles.labels + " " + Styles.bold }>Historial de pagos</span>
          </div>
          <a className={Styles.labels}>Manual de usuario</a>
        </div>
      </div>
    </>
  )
}

export default Subes