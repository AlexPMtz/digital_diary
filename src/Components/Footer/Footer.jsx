import React from 'react';
import Styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={Styles.footer}>
      <p style={{marginLeft: 70}}>
        Copyright © 2017 Your Website Name
      </p>
      <p style={{marginRight: 50}}>
        Digital Diary
      </p>
    </div>
  )
}

export default Footer