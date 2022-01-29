import React from 'react';
import DateRead from '../../Stories/DateRead/DateRead';
import Styles from './AuthorPost.module.css';

const authorPost = ({title, src}) => {
  return (
    <div className='row'>
      <div className='col-md-2' />
      <div className='col-md-8 col-md-offset-2'>
        <div className='row post-top-meta'>
          <div class={Styles.shadow + " card mb-3"}>
            <img src={src} class="card-img-top"/>
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <DateRead name={"Sal"} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default authorPost;
