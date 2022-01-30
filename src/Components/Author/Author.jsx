import React from 'react'
import WithCommonMenus from '../../HOC/WithCommonMenus';
import Styles from './Author.module.css';
import facebook from '../../assets/facebook.svg';
import google from '../../assets/google.svg';
import AuthorPost from './AuthorPost/AuthorPost';
import garden from '../../assets/DemoPic/8.jpg';
import city from '../../assets/DemoPic/9.jpg';
import house from '../../assets/DemoPic/10.jpg';
import Footer from '../Footer/Footer';

const Author = () => {
  return (
    <>
      <div className='container-lg' style={{ marginTop: 150 }}>
        <div className='row' style={{ marginBottom: 50 }}>
          <div className='col-md-2' />
          <div className='col-md-8 col-md-offset-2'>
            <div className='row post-top-meta'>
              <div className='col-md-10 col-sx-12'>
                <h5 className={Styles.titleLabel + " card-title"}>Sal</h5>
                <p className={Styles.cardDescription + " card-text"}>I professionally develop premium themes, templates & scripts since the Apocalypse (2012). You can reach me out on the social links below.</p>
                <div>
                  <a href="https://www.facebook.com/">
                    <img src={facebook} style={{ width: 22, height: 22, marginRight: 10 }}/>
                  </a>
                  <a href="https://myaccount.google.com/intro/profile">
                    <img src={google} style={{ width: 24, height: 24 }} />
                  </a>
                </div>
              </div>
              <div className='col-md-2 col-xs-12'>
                <img
                  src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&d=mm&r=x"
                  alt="Sal"
                  height={80}
                  width={80}
                  style={{ borderRadius: 50, marginRight: 10 }}
                />
              </div>
            </div>
          </div>
        </div>

        <AuthorPost title={"Life is worth living forever and ever"} src={garden} />
        <AuthorPost title={"Best European capitals to visit and the costs implied"} src={house} />
        <AuthorPost title={"10 Things you should learn before visiting"} src={city} />

      </div>
      <Footer />
    </>
  )
}

export default WithCommonMenus(Author)