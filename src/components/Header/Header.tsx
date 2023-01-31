import React from 'react';
import banner from './../../Images/fetch-banner.png';
import fetch from './../../Images/fetch.svg';

const Header = () => {
  return (
    <nav className='primary-nav' aria-label={'navigation'}>
      <a href='https://fetch.com' id='desktop-home'>
        <img id='fetch-banner' src={banner} alt='Fetch Banner' />
      </a>
      <span className='grouped-nav'>
        <a href='https://fetch.com/brands'>Brands</a>
        <a href='https://fetch.com/rewards'>Rewards</a>
        <a href='https://blog.fetch.com/'>Unleashed</a>
        <a href='https://business.fetch.com/'>Fetch for Business</a>
        <button className='cta-button'>Get the App</button>
      </span>
      <span className='mobile-nav'>
        <a href='https://fetch.com'>
          <img id='fetch' src={fetch} alt='Fetch Home' />
        </a>
        <span className='material-symbols-outlined'>menu</span>
      </span>
    </nav>
  );
};
export default Header;
