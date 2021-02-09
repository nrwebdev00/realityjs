import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import backgroundImage from '../images/listingsDetailstitle.jpeg';
import Carousel, { consts } from 'react-elastic-carousel';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { FaMoneyBill, FaBed, FaBath, FaSquare, FaCar, FaBorderNone  } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import Footer from '../components/Footer.js';
import House1 from '../images/house1.jpeg';
import inside1 from '../images/inside1.jpeg';
import inside2 from '../images/inside2.jpeg';
import inside3 from '../images/inside3.jpeg';
import inside4 from '../images/inside4.jpeg';
import inside5 from '../images/inside5.jpeg';
import Realtor from '../images/realtor4.jpeg';

// Custom Modal Styles




const ListingsDetails = () => {
    const [ activePhoto, setActivePhoto ] = useState(House1);

    const myArrow = ({ type, onClick, isEdge}) => {
        const pointer = type === consts.PREV ? <GrPrevious /> : <GrNext />
        return(
            <div className='carousel-arrow' onClick={onClick} disabled={isEdge}>
                {pointer}
            </div>
        )
    }
    

    return (
        <div className='listings-details'>
            <div 
                className='listings-details-title'
                style={{
                    backgroundImage: `url(${backgroundImage})`
                }}    
            >
                <div className='details-title-wrapper'>
                    <h1>123 Any Street</h1>
                </div>
            </div>
            <Container>
            <Breadcrumb>
                <Breadcrumb.Item href='/' className='text-white'>Home</Breadcrumb.Item>
                <Breadcrumb.Item href='/listings' className='text-white'>Listings</Breadcrumb.Item>
                <Breadcrumb.Item className='text-white' active >123 any street</Breadcrumb.Item>
            </Breadcrumb>
            <div className='listings-detail-top'>
                <div className='listing-detail-top-left'>
                    <div className='light-box'>
                        <div className='main-view'>
                            <img 
                                src={activePhoto} 
                                alt='inside of home' 
                                style={{
                                    width: '100%',
                                    maxHeight: '400px'
                                }} />            
                        </div>
                        <div className='thumbnail-view'>
                        <Carousel 
                            itemsToShow={3}
                            renderArrow={myArrow}  
                            style={{
                                height: '100px'
                            }}
                        >
                            <img 
                                src={House1} 
                                alt='inside' 
                                className='carousel-image'
                                onClick={(e)=>setActivePhoto(House1)}    
                            />
                            <img 
                                src={inside1} 
                                alt='inside' 
                                className='carousel-image'
                                onClick={(e)=>setActivePhoto(inside1)}    
                            />
                            <img 
                                src={inside2} 
                                alt='inside' 
                                className='carousel-image'
                                onClick={(e)=>setActivePhoto(inside2)}    
                            />
                            <img 
                                src={inside3} 
                                alt='inside' 
                                className='carousel-image'
                                onClick={(e)=>setActivePhoto(inside3)}    
                            />
                            <img 
                                src={inside4} 
                                alt='inside' 
                                className='carousel-image'
                                onClick={(e)=>setActivePhoto(inside4)}    
                            />
                            <img 
                                src={inside5} 
                                alt='inside' 
                                className='carousel-image'
                                onClick={(e)=>setActivePhoto(inside5)}    
                            />
                        </Carousel>
                    </div>
                    </div>
                </div>
                <div className='listing-detail-top-right'>
                    <h1 className='text-center my-3'>Realtor for:</h1>
                    <h2 className='text-center my-3'>123 any street</h2>
                    <h2 className='text-center my-3'>Kenny Woods</h2>
                    <img 
                        src={Realtor} 
                        alt={'Realtor'} 
                        style={{width: '100%'}}
                    />
                    <Button className='btn-2' variant='primary'>Make Inquiry</Button>
                </div>
            </div>
            </Container>
            <div className='listings-span-break'>
               <h1>Property Info for 123Any Street.</h1>
               <h1>Title for the Property</h1>
            </div>
            <Container>
            <div className='listing-detail-info'>
                <div className='detail-info-row'>
                    <div className='detail-info-item'>
                        <FaMoneyBill />
                        <h4>$235,000</h4>
                    </div>
                    <div className='detail-info-item'>
                        <FaBed />
                        <h4>4 Bedrooms</h4>
                    </div>
                </div>
                <div className='detail-info-row'>
                    <div className='detail-info-item'>
                        <FaSquare />
                        <h4>1500 Square Feet</h4>
                    </div>
                    <div className='detail-info-item'>
                            <FaBath />
                            <h4>1.5 Bathrooms</h4>
                    </div>
                </div>
                <div className='detail-info-row'>
                    <div className='detail-info-item'>
                        <FaBorderNone />
                        <h4>3 Acers</h4>
                    </div>
                    <div className='detail-info-item'>
                            <FaCar />
                            <h4>2 Car Garage</h4>
                    </div>
                </div>
                <div className='detail-info-desc'>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed ligula felis. Mauris malesuada ligula quis neque bibendum sagittis. Pellentesque quis est ac nisl fringilla imperdiet nec eget nibh. Fusce venenatis vehicula ornare. Aliquam scelerisque mauris a libero ullamcorper, sit amet porttitor tortor malesuada. Ut lobortis leo id pharetra facilisis. Proin et pulvinar est, vestibulum elementum est. Cras ultricies mauris a pretium aliquam. Mauris efficitur massa sit amet dolor vestibulum varius.

                       Suspendisse eu metus in turpis dignissim tincidunt eu sit amet mi. Curabitur ante dolor, semper eget rutrum ut, aliquet sit amet velit. Vestibulum ac pharetra turpis. Nunc ut egestas velit. Vestibulum blandit, diam consequat consectetur convallis, mauris lacus lobortis enim, in varius mauris ante a risus. Pellentesque vitae libero ornare ante commodo tincidunt in ut felis. Quisque at semper urna. Etiam vehicula, erat id tristique dignissim, elit lorem posuere justo, vel dictum erat urna et mi. Etiam hendrerit risus sollicitudin eros posuere, in tristique nulla consequat.
                    </p>
                </div>
                <LinkContainer to='/inqury'>
                    <Button className='btn-2 my-5'>Make an Inquery</Button>
                </LinkContainer>
            </div>
            </Container>
            <Footer />
        </div>
    )
}

export default ListingsDetails
