import React from 'react';

const Header = () => {
  return (
    <nav className='primary-nav' aria-label={'navigation'}>
      <a href='https://fetch.com' id='desktop-home'>
        <img id='fetch-banner' src='../../../Images/fetch-banner.png' />
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
          <img id='fetch' src='../../../Images/fetch.svg' />
        </a>
        <span className='material-symbols-outlined'>menu</span>
      </span>
    </nav>
  );
};
export default Header;
