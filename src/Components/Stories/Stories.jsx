import React from 'react'
import Styles from './Stories.module.css';
import demo1 from '../../assets/DemoPic/1.jpg';
import demo2 from '../../assets/DemoPic/2.jpg';
import demo3 from '../../assets/DemoPic/3.jpg';
import demo4 from '../../assets/DemoPic/4.jpg';
import DateRead from './DateRead/DateRead';
import Footer from '../Footer/Footer';
import WithCommonMenus from '../../HOC/WithCommonMenus';

const Stories = () => {
  return (
    <>
      <div className={Styles.mainContainer}>
        <h1>Digital Diary</h1>
        <p className={Styles.subTitle + ' mb-5'}>Medium style, simply perfect for bloggers</p>

        <span className={Styles.titleLabel}>Featured Stories</span>
        <hr></hr>

        <div className='d-flex'>
          <div className="card mb-3 me-3" style={{ maxWidth: 540 }}>
            <div className="row g-0">
            <div className="col-md-4">
                <img className="img-fluid rounded-start" src={demo1} style={{ height: 258 }} />
              </div>
              <div className="col-md-8 d-flex flex-column">
                <div className="card-body">
                  <h5 className={Styles.cardTitle}>We're living some strange times</h5>
                  <p className={Styles.cardDescription}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <DateRead name={"Steve"}/>
              </div>
            </div>
          </div>

          <div className="card mb-3" style={{ maxWidth: 540 }}>
            <div className="row g-0">
            <div className="col-md-4">
                <img className="img-fluid rounded-start" src={demo2} style={{ height: 258 }} />
              </div>
              <div className="col-md-8 d-flex flex-column">
                <div className="card-body">
                  <h5 className={Styles.cardTitle}>Dreaming of Las Vegas Crazyness</h5>
                  <p className={Styles.cardDescription}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <DateRead name={"Mary"}/>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex">
          <div className="card mb-3 me-3" style={{ maxWidth: 540 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img className="img-fluid rounded-start" src={demo3} style={{ height: 258 }} />
              </div>
              <div className="col-md-8 d-flex flex-column">
                <div className="card-body">
                  <h5 className={Styles.cardTitle}>The beauty of this world is in your heart</h5>
                  <p className={Styles.cardDescription}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <DateRead name={"Jane"}/>
              </div>
            </div>
          </div>

          <div className="card mb-3" style={{ maxWidth: 540 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img className="img-fluid rounded-start" src={demo4} style={{ height: 258 }} />
              </div>
              <div className="col-md-8 d-flex flex-column">
                <div className="card-body">
                  <h5 className={Styles.cardTitle}>San Francisco at its best view in all seasons</h5>
                  <p className={Styles.cardDescription}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <DateRead name={"Sal"}/>
              </div>
            </div>
          </div>
        </div>

        <span className={Styles.titleLabel}>All Stories</span>
        <hr></hr> 

      </div>
      <Footer />
    </>
  )
}

export default WithCommonMenus(Stories)