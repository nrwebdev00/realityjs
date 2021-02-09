import React, {useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import options from '../utils/states.js';

const ListingsSearch = () => {
    const [ keyword, setKeyword ] = useState('');
    const [ city, setCity ] = useState('');
    const [ zip, setZip ] = useState('');
    const [ state, setState ] = useState('');
    const [ bedrooms, setBedrooms ] = useState('');
    const [ bathrooms, setBathrooms ] = useState('');
    const [ sqft, setSqft ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ lotSize, setLotSize ] = useState('');
    const [ garage, setGarage ] = useState('');

    const handleOnSubmit = (e)=>{
        e.preventDefault();
        console.log(e)
    }
    return (
        <div className='listings-search-wrapper'>
            <Form onSubmit={handleOnSubmit}>
               <div className='listings-search-row-1'>
                    <Form.Group controlId='keyword'>
                        <Form.Control 
                            type='text'
                            placeholder='Search by Keyword'
                            value={keyword}
                            onChange={(e)=>setKeyword(e.target.value)}
                        ></Form.Control> 
                    </Form.Group>
                    <Form.Group controlId='City'>
                        <Form.Control 
                            type='text'
                            placeholder='City'
                            value={city}
                            onChange={(e)=>setCity(e.target.value)}
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
                    <Form.Group controlId='Zip'>
                    <Form.Control 
                        type='text'
                        placeholder='Zip Code'
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                    ></Form.Control>
                    </Form.Group> 
               </div>
               <div className='listings-search-row-2'>
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
               </div>
               <div className="listings-search-row-3">
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
                <Form.Group controlId='lotSize'>
                  <Form.Control
                    as='select' 
                    type='number'
                    placeholder='Lot Size'
                    value={lotSize}
                    onChange={(e) => setLotSize(e.target.value)}
                  >
                      {options.lotSize.map((i, index)=>(
                          <option value={i} key={index}>At Least {i} Acres</option>
                      ))}
                  </Form.Control>
                </Form.Group>
               </div>
               <LinkContainer to='/listings/result'>
                    <Button className='btn-1'>Search Out Properties</Button>
                </LinkContainer>
            </Form>
        </div>
    )
}

export default ListingsSearch   