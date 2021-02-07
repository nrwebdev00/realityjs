import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FaRibbon, FaPhone, FaEnvelope } from 'react-icons/fa';
import Footer from '../components/Footer.js';
import backgroundImage from '../images/pexels-photo-830891.jpeg';
import about1 from '../images/about1.jpeg';

// For static input to be replaced with db
import nathon from '../images/nr.jpg';
import realtor1 from '../images/realtor1.jpeg';
import realtor2 from '../images/realtor2.jpeg';
import realtor3 from '../images/realtor3.jpeg';

const About = () => {
    return (
        <div className='about-page'>
           <div 
                className='about-page-title-wrapper'
                style={{
                    backgroundImage: `url(${backgroundImage})`
                }}
            >
               <div className='about-page-title'>
               <h1>About Reality</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis dui at faucibus ultricies. Nulla facilisi. Nunc dapibus quam eget venenatis posuere. Nam ut dignissim elit. Ut id diam tristique
                </p>
               </div>
            </div>
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item href='/' className='text-white'>Home</Breadcrumb.Item>
                    <Breadcrumb.Item className='text-white' active>About</Breadcrumb.Item>
                </Breadcrumb>
                <div className='about-main-wrapper'>
                    <div className='about-main-left'>
                        <h2 className='text-center'>We Search Every For You</h2>
                        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <img src={about1} alt='about reality'/>
                        <p id='about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae bibendum leo, at tempor lectus. Aliquam vitae magna eget magna ullamcorper pulvinar. Duis pharetra augue sapien, id commodo lorem bibendum at. Aliquam vitae leo vehicula, congue sapien quis, tempus purus. Phasellus bibendum diam ac felis ultricies auctor. Maecenas sed lectus in ipsum tincidunt commodo. Phasellus maximus maximus risus a auctor. Quisque egestas nisi ac malesuada pharetra. Vivamus lacinia pellentesque urna ut egestas.</p>
                    </div>
                    <div className='about-main-right'>
                        <img src={nathon} alt='about realtor'/>
                        <h2 className='text-center my-2'>Featured Realtor</h2>
                        <h2 className='about-realtor-name'>Nathon Reed</h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae bibendum leo, at tempor lectus. Aliquam vitae magna eget magna ullamcorper pulvinar. Duis pharetra augue sapien, id commodo lorem bibendum at. Aliquam vitae leo vehicula, congue sapien quis, tempus purus. Phasellus bibendum diam ac felis ultricies auctor. Maecenas sed lectus in ipsum tincidunt commodo.
                        </p>
                        <LinkContainer to='/realtor/detail'>
                            <Button className='btn-4'>
                                More Info on Nathon Reed
                            </Button>
                        </LinkContainer>
                    </div>   
                </div>
            </Container>
            <div className='about-middle'>
                <Container>
                    <h1 className='about-middle-title'>Search the Home our Team of Realtors Have four You.</h1>
                    <LinkContainer to='/listings'>
                        <Button className='about-middle-btn' >New Listings</Button>
                    </LinkContainer>
                </Container>
            </div>
            <div className='about-realtors'>
                <Container>
                    <h1 className='about-realtors-title'>Reality Realtor Team</h1>
                    <div className='about-realtors-wrapper'>
                        {/* Realtor 1 */}
                        <div className='about-realtors-item'>
                            <img src={realtor1} alt='realtor' />
                            <h3>Realtor Name</h3>
                            <div className='about-realtor-item-detail'>
                                <FaRibbon />
                                <h5>Realtor</h5>
                            </div>
                            <div className='about-realtor-item-detail'>
                                <FaPhone />
                                <h5>111-111-1234</h5>
                            </div>
                            <div className='about-realtor-item-detail'>
                                <FaEnvelope />
                                <a href="mailto:realtor1@reality.com" >
                                    <h5>realtor1@reality.com</h5>
                                </a>
                            </div>
                            <LinkContainer to='/realtor/detail'>
                                <Button className='btn-3'>
                                    More Info on Realtor
                                </Button>
                            </LinkContainer>
                        </div>
                        {/* Realtor 2 */}
                        <div className='about-realtors-item'>
                            <img src={realtor2} alt='realtor' />
                            <h3>Realtor Name</h3>
                            <div className='about-realtor-item-detail'>
                                <FaRibbon />
                                <h5>Realtor</h5>
                            </div>
                            <div className='about-realtor-item-detail'>
                                <FaPhone />
                                <h5>111-111-1234</h5>
                            </div>
                            <div className='about-realtor-item-detail'>
                                <FaEnvelope />
                                <a href="mailto:realtor1@reality.com" >
                                    <h5>realtor1@reality.com</h5>
                                </a>
                            </div>
                            <LinkContainer to='/realtor/detail'>
                                <Button className='btn-3'>
                                    More Info on Realtor
                                </Button>
                            </LinkContainer>
                        </div>
                        {/* Realtor 3 */}
                        <div className='about-realtors-item'>
                            <img src={realtor3} alt='realtor' />
                            <h3>Realtor Name</h3>
                            <div className='about-realtor-item-detail'>
                                <FaRibbon />
                                <h5>Realtor</h5>
                            </div>
                            <div className='about-realtor-item-detail'>
                                <FaPhone />
                                <h5>111-111-1234</h5>
                            </div>
                            <div className='about-realtor-item-detail'>
                                <FaEnvelope />
                                <a href="mailto:realtor1@reality.com" >
                                    <h5>realtor1@reality.com</h5>
                                </a>
                            </div>
                            <LinkContainer to='/realtor/detail'>
                                <Button className='btn-3'>
                                    More Info on Realtor
                                </Button>
                            </LinkContainer>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    )
}

export default About
