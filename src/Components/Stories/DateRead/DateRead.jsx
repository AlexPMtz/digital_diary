import React from 'react';
import Styles from './DateRead.module.css';
import { Link } from 'react-router-dom';

const DateRead = ({name}) => {
  return (
    <div className={Styles.padding}>
      <div className='d-flex'>
        <Link to={"/author"}>
          <img
            src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&d=mm&r=x"
            alt="Sal"
            height={40}
            style={{ borderRadius: 20, marginRight: 10 }}
          />
        </Link>
        <div >
          <span>
            <Link className={Styles.noUnderline} to={"/author"}>{name}</Link>
          </span>
          <br />
          <span className={Styles.date}>22 July 2017 - 6 min read
            <Link to={"/post"} title="Read Story">
              <svg
                width={25}
                height={25}
                viewBox="0 0 25 25"
                style={{marginLeft: 20}}
              >
                <path
                  d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                  fillRule="evenodd"
                />
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
};

export default DateRead;