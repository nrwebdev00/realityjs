import React from 'react'
import SingleListings from '../components/SingleListings.js';


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
                </div>
            </div>
    )
}

export default HomeListings
