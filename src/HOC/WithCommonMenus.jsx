import React from 'react'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Styles from './WithCommonMenus.module.css';

export default function WithCommonMenus(Component){

  const CommonComponents = (props) => {
    return (
      <div className={Styles.mainContainer}>
        <Navbar/>
        <div className={Styles.componentContainer}>
          <Component {...props} />
        </div>
      </div>
    )
  }
  return CommonComponents
}