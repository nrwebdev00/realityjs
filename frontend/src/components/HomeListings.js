import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import { FaBed, FaBath, FaCar, FaSquare, FaUserTie } from 'react-icons/fa'
import { LinkContainer } from 'react-router-bootstrap';


import house1 from '../images/house1.jpeg';
import house3 from '../images/house2.jpeg';
import house5 from '../images/house5.jpeg';
const HomeListings = () => {
    return (
        <div 
            className='home-page-middle' 
        >
            <div className='home-listings-title-wrapper'>
                <h1>Featured Listings</h1>
            </div>
                <div className='home-listings-showcase-wrapper'>
                    <div className='home-listings-showcase'>
                        <div 
                            className='home-lsitings-picture'
                            style={{
                                backgroundImage: `url(${house1})`
                            }}
                        >
                            <div className='home-listing-price'>
                                $250,000
                            </div>
                        </div>
                        <div className='home-listings-address'>
                            <Row>
                                <Col><h3 className='text-center my-1 text-white'>123 Any Street</h3></Col>
                            </Row>
                            <Row>
                                <Col><h3 className='text-center my-1 text-white'>City,</h3></Col>
                                <Col><h3 className='text-center my-1 text-white'>State</h3></Col>
                                <Col><h3 className='text-center my-1 text-white'>Zip</h3></Col>
                            </Row>
                        </div>
                        <div className='home-listings-info'>
                            <div className='home-listings-info-row'>
                                <div className='home-listings-info-item'>
                                    <FaSquare />
                                    <h3> 1500 sqft.</h3>
                                </div>
                                <div className='home-listings-info-item'>
                                    <FaCar />
                                    <h3>2 Car Garage</h3>
                                </div>
                            </div>
                            <div className='home-listings-info-row'>
                                <div className='home-listings-info-item'>
                                    <FaBed />
                                    <h3>3 Bedrooms</h3>
                                </div>
                                <div className='home-listings-info-item'>
                                    <FaBath />
                                    <h3>1.5 Bathrooms</h3>
                                </div>
                            </div>
                        </div>
                        <div className='home-listings-realtor'>
                            <div className='home-listings-realtor-info'>
                                <FaUserTie />
                                <h2>Realtor: Nathon Reed</h2>
                            </div>
                            <div className='home-listings-realtor-btn-wrapper'>
                                <LinkContainer to='/listingsDetail/'>
                                    <Button className='btn-1'>More Info</Button>
                                </LinkContainer>
                            </div>
                        </div>
                    </div>
                    {/* Second Listing */}
                    <div className='home-listings-showcase'>
                        <div 
                            className='home-lsitings-picture'
                            style={{
                                backgroundImage: `url(${house3})`
                            }}
                        >
                            <div className='home-listing-price'>
                                $150,000
                            </div>
                        </div>
                        <div className='home-listings-address'>
                            <Row>
                                <Col><h3 className='text-center my-1 text-white'>123 Any Street</h3></Col>
                            </Row>
                            <Row>
                                <Col><h3 className='text-center my-1 text-white'>City,</h3></Col>
                                <Col><h3 className='text-center my-1 text-white'>State</h3></Col>
                                <Col><h3 className='text-center my-1 text-white'>Zip</h3></Col>
                            </Row>
                        </div>
                        <div className='home-listings-info'>
                            <div className='home-listings-info-row'>
                                <div className='home-listings-info-item'>
                                    <FaSquare />
                                    <h3> 1500 sqft.</h3>
                                </div>
                                <div className='home-listings-info-item'>
                                    <FaCar />
                                    <h3>2 Car Garage</h3>
                                </div>
                            </div>
                            <div className='home-listings-info-row'>
                                <div className='home-listings-info-item'>
                                    <FaBed />
                                    <h3>3 Bedrooms</h3>
                                </div>
                                <div className='home-listings-info-item'>
                                    <FaBath />
                                    <h3>1.5 Bathrooms</h3>
                                </div>
                            </div>
                        </div>
                        <div className='home-listings-realtor'>
                            <div className='home-listings-realtor-info'>
                                <FaUserTie />
                                <h2>Realtor: Nathon Reed</h2>
                            </div>
                            <div className='home-listings-realtor-btn-wrapper'>
                                <LinkContainer to='/listingsDetail/'>
                                    <Button className='btn-1'>More Info</Button>
                                </LinkContainer>
                            </div>
                        </div>
                    </div>
                    {/* Third Listing */}
                    <div className='home-listings-showcase'>
                        <div 
                            className='home-lsitings-picture'
                            style={{
                                backgroundImage: `url(${house5})`
                            }}
                        >
                            <div className='home-listing-price'>
                                $350,000
                            </div>
                        </div>
                        <div className='home-listings-address'>
                            <Row>
                                <Col><h3 className='text-center my-1 text-white'>123 Any Street</h3></Col>
                            </Row>
                            <Row>
                                <Col><h3 className='text-center my-1 text-white'>City,</h3></Col>
                                <Col><h3 className='text-center my-1 text-white'>State</h3></Col>
                                <Col><h3 className='text-center my-1 text-white'>Zip</h3></Col>
                            </Row>
                        </div>
                        <div className='home-listings-info'>
                            <div className='home-listings-info-row'>
                                <div className='home-listings-info-item'>
                                    <FaSquare />
                                    <h3> 1500 sqft.</h3>
                                </div>
                                <div className='home-listings-info-item'>
                                    <FaCar />
                                    <h3>2 Car Garage</h3>
                                </div>
                            </div>
                            <div className='home-listings-info-row'>
                                <div className='home-listings-info-item'>
                                    <FaBed />
                                    <h3>3 Bedrooms</h3>
                                </div>
                                <div className='home-listings-info-item'>
                                    <FaBath />
                                    <h3>1.5 Bathrooms</h3>
                                </div>
                            </div>
                        </div>
                        <div className='home-listings-realtor'>
                            <div className='home-listings-realtor-info'>
                                <FaUserTie />
                                <h2>Realtor: Nathon Reed</h2>
                            </div>
                            <div className='home-listings-realtor-btn-wrapper'>
                                <LinkContainer to='/listingsDetail/'>
                                    <Button className='btn-1'>More Info</Button>
                                </LinkContainer>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    )
}

export default HomeListings
