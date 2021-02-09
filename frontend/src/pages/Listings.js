import React from 'react'
import { Container, Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ListingsSearch from '../components/ListingsSearch';
import backgroundImage from '../images/listingsHeader.jpeg';
import SingleListings from '../components/SingleListings.js';
import Footer from '../components/Footer.js';


// Import for static not for deply
import house1 from '../images/house1.jpeg';
import house2 from '../images/house2.jpeg';
import house3 from '../images/house3.jpeg';
import house4 from '../images/house4.jpeg';
import house5 from '../images/house5.jpeg';


const Listings = () => {
    
    return (
        <div className='listings-page'>
            <div className='listings-page-title-wrapper'
                style={{
                    backgroundImage: `url(${backgroundImage})`
                }}
            >
                <div className='listings-page-title'>
                    <h1>Listings by Reality</h1>
                </div>
            </div>
            <Container>
            <Breadcrumb>
                <Breadcrumb.Item href='/' className='text-white'>Home</Breadcrumb.Item>
                <Breadcrumb.Item className='text-white' active>Listings</Breadcrumb.Item>
            </Breadcrumb>
            <Accordion defaultActiveKey="0">
                <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                    Search Properties
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <ListingsSearch />
                </Accordion.Collapse>
            </Accordion>
            </Container>
            <div className='listings-title'>
                <h1>Listings by Reality</h1>
            </div>
                <div className='listings-row'>
                    <SingleListings 
                        picture={house1}
                        price={'250,000'}
                        address={'123 any street'}
                        city={'any town'}
                        state={'CA'}
                        zip={'90000'}
                        sqft={'1500'}
                        garage={'2'}
                        bedrooms={'4'}
                        bathrooms={'1.5'}
                        realtor={'Nathon Reed'}
                        realtorPhone={'123-456-7890'}
                        realtorEmail={'nathon@reality.com'}
                    />
                    <SingleListings 
                        picture={house2}
                        price={'241,000'}
                        address={'123 any street'}
                        city={'any town'}
                        state={'CA'}
                        zip={'90000'}
                        sqft={'1500'}
                        garage={'2'}
                        bedrooms={'4'}
                        bathrooms={'1.5'}
                        realtor={'Nathon Reed'}
                        realtorPhone={'123-456-7890'}
                        realtorEmail={'nathon@reality.com'}
                    />
                    <SingleListings
                        picture={house3}
                        price={'196,000'}
                        address={'123 any street'}
                        city={'any town'}
                        state={'CA'}
                        zip={'90000'}
                        sqft={'1500'}
                        garage={'2'}
                        bedrooms={'4'}
                        bathrooms={'1.5'}
                        realtor={'Nathon Reed'}
                        realtorPhone={'123-456-7890'}
                        realtorEmail={'nathon@reality.com'}
                    />
                    <SingleListings
                        picture={house4}
                        price={'321,000'}
                        address={'123 any street'}
                        city={'any town'}
                        state={'CA'}
                        zip={'90000'}
                        sqft={'1500'}
                        garage={'2'}
                        bedrooms={'4'}
                        bathrooms={'1.5'}
                        realtor={'Nathon Reed'}
                        realtorPhone={'123-456-7890'}
                        realtorEmail={'nathon@reality.com'}
                    />
                </div>
                <div className='listings-row'>
                    <SingleListings 
                        picture={house5}
                        price={'250,000'}
                        address={'123 any street'}
                        city={'any town'}
                        state={'CA'}
                        zip={'90000'}
                        sqft={'1500'}
                        garage={'2'}
                        bedrooms={'4'}
                        bathrooms={'1.5'}
                        realtor={'Nathon Reed'}
                        realtorPhone={'123-456-7890'}
                        realtorEmail={'nathon@reality.com'}
                    />
                    <SingleListings 
                        picture={house1}
                        price={'250,000'}
                        address={'123 any street'}
                        city={'any town'}
                        state={'CA'}
                        zip={'90000'}
                        sqft={'1500'}
                        garage={'2'}
                        bedrooms={'4'}
                        bathrooms={'1.5'}
                        realtor={'Nathon Reed'}
                        realtorPhone={'123-456-7890'}
                        realtorEmail={'nathon@reality.com'}
                    />
                    <SingleListings 
                        picture={house2}
                        price={'250,000'}
                        address={'123 any street'}
                        city={'any town'}
                        state={'CA'}
                        zip={'90000'}
                        sqft={'1500'}
                        garage={'2'}
                        bedrooms={'4'}
                        bathrooms={'1.5'}
                        realtor={'Nathon Reed'}
                        realtorPhone={'123-456-7890'}
                        realtorEmail={'nathon@reality.com'}
                    />
                    <SingleListings 
                        picture={house3}
                        price={'250,000'}
                        address={'123 any street'}
                        city={'any town'}
                        state={'CA'}
                        zip={'90000'}
                        sqft={'1500'}
                        garage={'2'}
                        bedrooms={'4'}
                        bathrooms={'1.5'}
                        realtor={'Nathon Reed'}
                        realtorPhone={'123-456-7890'}
                        realtorEmail={'nathon@reality.com'}
                    />
                </div>
                <div className='listings-row'>
                    <SingleListings 
                        picture={house4}
                        price={'250,000'}
                        address={'123 any street'}
                        city={'any town'}
                        state={'CA'}
                        zip={'90000'}
                        sqft={'1500'}
                        garage={'2'}
                        bedrooms={'4'}
                        bathrooms={'1.5'}
                        realtor={'Nathon Reed'}
                        realtorPhone={'123-456-7890'}
                        realtorEmail={'nathon@reality.com'}
                    />
                    <SingleListings 
                        picture={house5}
                        price={'250,000'}
                        address={'123 any street'}
                        city={'any town'}
                        state={'CA'}
                        zip={'90000'}
                        sqft={'1500'}
                        garage={'2'}
                        bedrooms={'4'}
                        bathrooms={'1.5'}
                        realtor={'Nathon Reed'}
                        realtorPhone={'123-456-7890'}
                        realtorEmail={'nathon@reality.com'}
                    />
                    <SingleListings 
                        picture={house1}
                        price={'250,000'}
                        address={'123 any street'}
                        city={'any town'}
                        state={'CA'}
                        zip={'90000'}
                        sqft={'1500'}
                        garage={'2'}
                        bedrooms={'4'}
                        bathrooms={'1.5'}
                        realtor={'Nathon Reed'}
                        realtorPhone={'123-456-7890'}
                        realtorEmail={'nathon@reality.com'}
                    />
                    <SingleListings 
                        picture={house2}
                        price={'250,000'}
                        address={'123 any street'}
                        city={'any town'}
                        state={'CA'}
                        zip={'90000'}
                        sqft={'1500'}
                        garage={'2'}
                        bedrooms={'4'}
                        bathrooms={'1.5'}
                        realtor={'Nathon Reed'}
                        realtorPhone={'123-456-7890'}
                        realtorEmail={'nathon@reality.com'}
                    />
                </div>
            <Footer />
        </div>  
    )
}

export default Listings
