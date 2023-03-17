import './App.css';
import lock from './images/lock.svg';
import check from './images/check.svg';
import logo from './images/logo casino ojo.png';
import info from './images/info.png';
import star from './images/star full.svg';
import halfStar from './images/star half.svg';

function App() {
  return (
<div className='main'>
  <div className='container'>
    <h2 className="title">les meilleurs casinos en ligne du moment</h2>
    <div className='subtitle'>
      <p className='subtitle-header'>Tous nos casinos sont: </p>
      <img src={lock} className="sbt-image" alt="lock"/>
      <p className="subtitle-text">Autorise</p>
      <img src={check} className="sbt-image" alt="check" />
      <p className="subtitle-text">Revu par nos experts</p>
    </div>
    <div className='info-box'>
      <div className="main-part">
        <div className='left-part'>
          <div className='user-number'>
            <div className='user-choice'>user choice</div>
            <b className="number">01</b>
          </div>
          <img src={logo} className="logo" alt="logo" />
          <img src={info} className="info-logo" alt="info" />
        </div>
    <div className='right-part'>
      <div className='boxes'>
        <div className='rating-box'>
          <b className='rating-title'>PlayOjo Casino</b>
            <div className='rating-stars'>
              <img src={star} className="star-logo" alt="star" />
              <img src={star} className="star-logo" alt="star" />
              <img src={star} className="star-logo" alt="star" />
              <img src={star} className="star-logo" alt="star" />
              <img src={halfStar} className="half-star-logo" alt="half-star" />
            </div>
            <b className='rating-ratio'>4.5/5</b>
        </div>
        <div className='bonus-box'>
          <h4 className='bonus-title'>bonus</h4>
          <div className='exclusivite'>exclusivite</div>  
          <h3 className='price'>250 CA$</h3>
          <p className='simple-text'>+ 80 Tours Gratuis</p>
        </div>
      </div>
      <div className='list-button'>
        <ul>
          <li>Retraits rapides</li>
          <li>Enregistrement en douceur</li>
          <li>Beneficies non imposables</li>
        </ul>
        <button>Jouer</button>
      </div>
    </div>
    </div>
      <div className='secondary-part'>
        <b>18+ -</b>
        <p>Minimum bet amount-</p>
        <p>100-</p>
        <p>Some other important information-</p>
        <p>Terms&Conditions text-</p>
        <b>Terms&ConditionsLink.com</b>
      </div>
    </div>
  </div>
</div>
  );
}

export default App;
