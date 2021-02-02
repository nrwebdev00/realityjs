import React from 'react'
import { Container } from 'react-bootstrap';

import backgroundImage from '../images/1stbackground.jfif';
const Home = () => {
  return (
    <div className='Home-page'>
      <div 
        className='Home-page-top'
        style={{ backgroundImage: `url(${backgroundImage})`}}
      >
        <Container>
          <form className='home-searching'>
            <h3>Property seacrhing</h3>
          </form>
        </Container>
      </div>
    </div>
  )
}

export default Home
