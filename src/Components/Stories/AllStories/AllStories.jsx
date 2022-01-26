import React from 'react';
import Styles from './AllStories.module.css';
import demo1 from '../../../assets/DemoPic/5.jpg';
import demo2 from '../../../assets/DemoPic/6.jpg';
import demo3 from '../../../assets/DemoPic/7.jpg';
import demo4 from '../../../assets/DemoPic/8.jpg';
import demo5 from '../../../assets/DemoPic/9.jpg';
import demo6 from '../../../assets/DemoPic/10.jpg';
import DateRead from '../DateRead/DateRead';

const AllStories = () => {
  return (
    <div className={Styles.mainContainer}>
      <span className={Styles.titleLabel}>All Stories</span>
      <hr></hr>

      <div className='d-flex'>
        <div className="card mb-3 me-3">
          <div className='row g-0'>
            <img src={demo1} className="card-img-top" />
            <div className='col-md d-flex flex-column'>
              <div className="card-body">
                <h5 className={Styles.cardTitle}>Autumn doesn't have to be nostalgic, you know?</h5>
                <p className={Styles.cardDescription}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <DateRead name={"Sal"} />
            </div>
          </div>
        </div>

        <div className="card mb-3 me-3">
          <div className='row g-0'>
            <img src={demo3} className="card-img-top" />
            <div className='col-md d-flex flex-column'>
              <div className="card-body">
                <h5 className={Styles.cardTitle}>Little red dress and a perfect summer</h5>
                <p className={Styles.cardDescription}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <DateRead name={"Sal"} />
            </div>
          </div>
        </div>

        <div className="card mb-3 me-3">
          <div className='row g-0'>
            <img src={demo5} className="card-img-top" />
            <div className='col-md d-flex flex-column'>
              <div className="card-body">
                <h5 className={Styles.cardTitle}>10 Things you should know about choosing your house</h5>
                <p className={Styles.cardDescription}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <DateRead name={"Sal"} />
            </div>
          </div>
        </div>
      </div>

      <div className='d-flex'>
        <div className="card mb-3 me-3">
          <div className='row g-0'>
            <img src={demo2} className="card-img-top" />
            <div className='col-md d-flex flex-column'>
              <div className="card-body">
                <h5 className={Styles.cardTitle}>Best galleries in the world with photos</h5>
                <p className={Styles.cardDescription}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <DateRead name={"Sal"} />
            </div>
          </div>
        </div>

        <div className="card mb-3 me-3">
          <div className='row g-0'>
            <img src={demo4} className="card-img-top" />
            <div className='col-md d-flex flex-column'>
              <div className="card-body">
                <h5 className={Styles.cardTitle}>Thinking outside the box can help you prosper</h5>
                <p className={Styles.cardDescription}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <DateRead name={"Sal"} />
            </div>
          </div>
        </div>

        <div className="card mb-3 me-3">
          <div className='row g-0'>
            <img src={demo6} className="card-img-top" />
            <div className='col-md d-flex flex-column'>
              <div className="card-body">
                <h5 className={Styles.cardTitle}>Visiting the world means learning cultures</h5>
                <p className={Styles.cardDescription}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <DateRead name={"Sal"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AllStories;