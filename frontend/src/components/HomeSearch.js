import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import backgroundImage from '../images/1stbackground.jfif';
import options from '../utils/states.js';

const HomeSearch = () => {
    const [ keyword, setKeyword ] = useState('');
    const [ zip, setZip ] = useState('');
    const [ state, setState ] = useState('');
    const [ bedrooms, setBedrooms ] = useState('');
    const [ bathrooms, setBathrooms ] = useState('');
    const [ sqft, setSqft ] = useState('');
    const [ price, setPrice ] = useState('');

    const handleOnSubmit = (e)=>{
        e.preventDefault();
        console.log(state, bedrooms, bathrooms, sqft, price)
    }
    return (
        <div className='home-page-top'
      style={{ backgroundImage: `url(${backgroundImage})`}}
    >
      <div className='search-wrapper'>
        <div className='search-container'>
          <div className='search-title-container'>
            <h2>Property Searching At its Finest</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat elit quis diam scelerisque, sed bibendum sapien tincidunt. Fusce ipsum quam, tristique nec dui a</p>
          </div>
            <Form onSubmit={handleOnSubmit} >
              <div id='search-row-1'>
                <Form.Group controlId='keyword'>
                  <Form.Control 
                    type='text'
                    placeholder='Search By Keyword'
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId='Zip'>
                  <Form.Control 
                    type='text'
                    placeholder='Zip Code'
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId='State'>
                  <Form.Control
                    as="select"
                    type='text'
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  >
                      {options.stateAbb.map((state, index)=>(
                          <option value={state} key={index}>{state}</option>
                      ))}
                  </Form.Control>
                </Form.Group>
              </div>
              <div id='search-row-2'>
                <Form.Group controlId='Bedrooms'>
                  <Form.Control 
                    as="select"
                    type='number'
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                  >
                      {options.bedrooms.map((bedroom, index)=>(
                          <option value={bedroom} key={index}>At Least {bedroom} bedrooms</option>
                      ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId='bathrooms'>
                  <Form.Control 
                    as='select'
                    type='number'
                    value={bathrooms}
                    onChange={(e) => setBathrooms(e.target.value)}
                  >
                      {options.bathrooms.map((bathroom, index)=>(
                          <option value={bathroom} key={index}>At least {bathroom} bathroom</option>
                      ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId='sqft'>
                  <Form.Control
                    as='select' 
                    type='number'
                    placeholder='Square Feet'
                    value={sqft}
                    onChange={(e) => setSqft(e.target.value)}
                  >
                      {options.sqft.map((i, index)=>(
                          <option value={i} key={index}>At Least {i} Square Feet</option>
                      ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId='price'>
                  <Form.Control 
                    type='number'
                    as='select'
                    placeholder='Price'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  >
                      {options.price.map((i, index)=>(
                          <option value={i} key={index} >Under ${i}</option>
                      ))}
                  </Form.Control>
                </Form.Group>
              </div>
              <div id="search-row-3">
                <Button
                  type='submit'
                  variant='primary'
                >Search For Your Dream Home</Button>
              </div>
            </Form>
        </div>
      </div>
      
    </div>
    )
}

export default HomeSearch
