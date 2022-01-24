import React from 'react'
import Navbar from '../Navbar/Navbar'
import Styles from './Stories.module.css';
import demo1 from '../../assets/DemoPic/1.jpg';
import demo2 from '../../assets/DemoPic/2.jpg';
import demo3 from '../../assets/DemoPic/3.jpg';
import demo4 from '../../assets/DemoPic/4.jpg';
import DateRead from './DateRead/DateRead';
import Footer from '../Footer/Footer';

const Stories = () => {
  return (
    <>
      <Navbar />
      <div className={Styles.mainContainer}>
        <h1>Digital Diary</h1>
        <p className={Styles.subTitle + ' mb-5'}>Medium style, simply perfect for bloggers</p>

        <span className={Styles.titleLabel}>Featured Stories</span>
        <hr></hr>

        <div className='d-flex'>
          <div className="card mb-3 me-3">
            <div className="row g-0">
              <div className={Styles.imageContainer + " col-md-4"} style={{ backgroundImage: `url(${demo1})` }}></div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className={Styles.cardTitle}>We're living some strange times</h5>
                  <p className={Styles.cardDescription}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <DateRead />
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="row g-0">
              <div className={Styles.imageContainer + " col-md-4"} style={{ backgroundImage: `url(${demo2})` }}></div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className={Styles.cardTitle}>We're living some strange times</h5>
                  <p className={Styles.cardDescription}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <DateRead />
              </div>
            </div>
          </div>
        </div>

        <div className='d-flex'>
          <div className="card mb-3 me-3">
            <div className="row g-0">
              <div className={Styles.imageContainer + " col-md-4"} style={{ backgroundImage: `url(${demo3})` }}></div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className={Styles.cardTitle}>We're living some strange times</h5>
                  <p className={Styles.cardDescription}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <DateRead />
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="row g-0">
              <div className={Styles.imageContainer + " col-md-4"} style={{ backgroundImage: `url(${demo4})` }}></div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className={Styles.cardTitle}>We're living some strange times</h5>
                  <p className={Styles.cardDescription}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>

                <DateRead />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Stories