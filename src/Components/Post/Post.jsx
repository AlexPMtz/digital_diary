import React from 'react'
import WithCommonMenus from '../../HOC/WithCommonMenus';
import Footer from '../Footer/Footer';
import twitter from '../../assets/twitter.svg';
import facebook from '../../assets/facebookWhite.svg';
import Styles from './Post.module.css';
import card3 from '../../assets/DemoPic/7.jpg';
import card2 from '../../assets/DemoPic/8.jpg';
import card1 from '../../assets/DemoPic/9.jpg';
import house from '../../assets/DemoPic/10.jpg';
import DateRead from '../Stories/DateRead/DateRead';

const Post = () => {
  return (
    <>
      <div className='container-lg' style={{ marginTop: 100 }}>
        <div className='row'>
          <div className='col-md-2 col-xs-12'>
            <div className='d-flex flex-column' style={{ alignItems: 'center' }}>
              <p className={Styles.labels}>Share</p>
              <ul style={{ margin: 0, padding: 0 }}>
                <li className={Styles.noPoint}>
                  <a href="https://twitter.com/?lang=es">
                    <img src={twitter} style={{ width: 29, height: 29, marginBottom: 10 }} />
                  </a>
                </li>
                <li className={Styles.noPoint}>
                  <a href="https://www.facebook.com/">
                    <img src={facebook} style={{ width: 29, height: 29, marginBottom: 5 }} />
                  </a>
                </li>
              </ul>
              <div className={Styles.line} />
              <p className={Styles.labels}>Talk</p>
              <p className={Styles.number}>42</p>
              <svg fill="#9b9b9b" width="29" height="29" viewbox="0 0 29 29"><path d="M21.27 20.058c1.89-1.826 2.754-4.17 2.754-6.674C24.024 8.21 19.67 4 14.1 4 8.53 4 4 8.21 4 13.384c0 5.175 4.53 9.385 10.1 9.385 1.007 0 2-.14 2.95-.41.285.25.592.49.918.7 1.306.87 2.716 1.31 4.19 1.31.276-.01.494-.14.6-.36a.625.625 0 0 0-.052-.65c-.61-.84-1.042-1.71-1.282-2.58a5.417 5.417 0 0 1-.154-.75zm-3.85 1.324l-.083-.28-.388.12a9.72 9.72 0 0 1-2.85.424c-4.96 0-8.99-3.706-8.99-8.262 0-4.556 4.03-8.263 8.99-8.263 4.95 0 8.77 3.71 8.77 8.27 0 2.25-.75 4.35-2.5 5.92l-.24.21v.32c0 .07 0 .19.02.37.03.29.1.6.19.92.19.7.49 1.4.89 2.08-.93-.14-1.83-.49-2.67-1.06-.34-.22-.88-.48-1.16-.74z"></path></svg>
            </div>
          </div>

          <div className='col-md-8 col-md-offset-2 col-xs-1'>

            <div className='row post-top-meta'>
              <div className='col-md-2 col-xs-12'>
                <img
                  src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&d=mm&r=x"
                  alt="Sal"
                  height={80}
                  width={80}
                  style={{ borderRadius: 50, marginRight: 10 }}
                />
              </div>
              <div className='col-md-10 col-sx-12'>
                <p className={Styles.cardDescription}>Founder of WowThemes.net and creator of "Mediumish" theme that you're currently previewing. Developing professional premium themes, templates, plugins, scripts since 2012.</p>
                <p className={Styles.cardDescription}>22 July 20176 min read</p>
              </div>
            </div>
            <h1 className={Styles.title}>18 Things You Should Learn Before Moving Into a New Home</h1>
            <img src={house} className="img-fluid mb-4" />

            <div className={Styles.articlePost}>
              <p className={Styles.text}>
                Holy grail funding non-disclosure agreement advisor ramen bootstrapping ecosystem. Beta crowdfunding iteration assets business plan paradigm shift stealth mass market seed money rockstar niche market marketing buzz market.
              </p>
              <p className={Styles.text}>
                Burn rate release facebook termsheet equity technology. Interaction design rockstar network effects handshake creative startup direct mailing. Technology influencer direct mailing deployment return on investment seed round.
              </p>
              <p className={Styles.text}>
                Termsheet business model canvas user experience churn rate low hanging fruit backing iteration buyer seed money. Virality release launch party channels validation learning curve paradigm shift hypotheses conversion. Stealth leverage freemium venture startup business-to-business accelerator market.
              </p>
              <blockquote>
                Gen-z strategy long tail churn rate seed money channels user experience incubator startup partner network low hanging fruit direct mailing. Client backing success startup assets responsive web design burn rate A/B testing metrics first mover advantage conversion.
              </blockquote>
              <p className={Styles.text}>
                Freemium non-disclosure agreement lean startup bootstrapping holy grail ramen MVP iteration accelerator. Strategy market ramen leverage paradigm shift seed round entrepreneur crowdfunding social proof angel investor partner network virality.
              </p>
              <div className='d-flex'>
                <p className={Styles.grayLabels}>Desing</p>
                <p className={Styles.grayLabels}>Growth Mindset</p>
                <p className={Styles.grayLabels}>Productivity</p>
                <p className={Styles.grayLabels}>Personal Growth</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='container mt-5'>
        <div className='row'>
          <div className="col-md-4 mb-3">
            <div className='card'>
              <img src={card1} className="card-img-top" />
              <div className="card-body">
                <h5 className={Styles.cardTitle}>Best recreational places to visit on a holiday</h5>
              </div>
              <DateRead name={"Sal"} />
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className='card'>
              <img src={card2} className="card-img-top" />
              <div className="card-body">
                <h5 className={Styles.cardTitle}>How travelling can change your life</h5>
              </div>
              <DateRead name={"Sal"} />
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className='card'>
              <img src={card3} className="card-img-top" />
              <div className="card-body">
                <h5 className={Styles.cardTitle}>ittle red dress and a perfect summer</h5>
              </div>
              <DateRead name={"Sal"} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default WithCommonMenus(Post)