import React from 'react';

import HomeSearch from '../components/HomeSearch.js';
import HomeListings from '../components/HomeListings.js';
import HomeRealtors from '../components/HomeRealtors.js';
import Footer from '../components/Footer.js';

const Home = () => {
  

  return (
    <div className='Home-page'>
    <HomeSearch />
    <HomeListings />
    <HomeRealtors />
    <Footer />
  </div>
  )
}

export default Home
