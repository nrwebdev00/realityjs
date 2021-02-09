import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';
import { FaBed, FaBath, FaCar, FaSquare, FaPhone, FaEnvelope } from 'react-icons/fa';

const SingleListings = ({ price, picture, address, city, state, zip, sqft, garage, 
    bedrooms, bathrooms, realtor, realtorPhone, realtorEmail }) => {
    return (
        <div className='single-listing'>
            <div 
                className='single-listing-picture'
                style = {{
                    backgroundImage: `url(${picture})`
                }}
            >
                <div className='single-listing-price'><p>${price}</p></div>
            </div>
            <div className='single-listing-address'>
                <div className='single-listing-street'>
                    <h3>{address}</h3>
                </div>
                <div className='city-state-wrapper'>
                    <div className='single-listing-city'>
                        <h3>{city}</h3>
                    </div>
                    <div className='single-listing-state'>
                        <h3>{state}</h3>
                    </div>
                    <div className='single-listing-zip'>
                        <h3>{zip}</h3>
                    </div>
                </div>
                
            </div>
            <div className='single-listing-info'>
                <div className='single-listing-info-row'>
                    <div className='sing-listing-info-item'>
                        <FaSquare />
                        <h5>{sqft} sqft</h5>
                    </div>
                    <div className='sing-listing-info-item'>
                        <FaCar />
                        <h5>{garage} parking</h5>
                    </div>
                </div>
                <div className='single-listing-info-row'>
                    <div className='sing-listing-info-item'>
                        <FaBed />
                        <h5>{bedrooms} Bed</h5>
                    </div>
                    <div className='sing-listing-info-item'>
                        <FaBath />
                        <h5>{bathrooms} Bath</h5>
                    </div>
                </div>
            </div>
            <div className='single-listing-realtor'>
                <div className='single-listings-realtor-row-1'>
                    <h5>Realtor:</h5>
                    <h5>{realtor}</h5>
                </div>
                <div className='single-listings-realtor-row-2'>
                    <FaPhone />
                    <h5>{realtorPhone}</h5>
                    <FaEnvelope />
                    <h5><a href={`mailto:${realtorEmail}`} >{realtorEmail}</a></h5>
                </div>
            </div>
            <div className='single-listing-btn-wrapper'>
                <LinkContainer to='/listings/details'>
                    <Button className='single-listing-btn'>More Info</Button>
                </LinkContainer>
            </div>
        </div>
    )
}

export default SingleListings
