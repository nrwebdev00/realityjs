import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import AboutHeading from '../components/AboutHeading.js';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import Nathon from '../images/nr.jpg';

const RealtorDetail = () => {
    return (
        <div className='realtor-detail'>
            <AboutHeading 
                name={'Nathon Reed'}
                text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis dui at faucibus ultricies. Nulla facilisi. Nunc dapibus quam eget venenatis posuere. Nam ut dignissim elit. Ut id diam tristique'} 
            />
            <Container>
            <Breadcrumb>
                <Breadcrumb.Item href='/' className='text-white'>Home</Breadcrumb.Item>
                <Breadcrumb.Item href='/about' className='text-white' >About</Breadcrumb.Item>
                <Breadcrumb.Item className='text-white' active>Realtor Detail</Breadcrumb.Item>
            </Breadcrumb>
            <div className='realtor-detail-title-wrapper'>
                <img src={Nathon} alt='realtor profile'/>
                <h1>Nathon Reed</h1>
                <h2>Realtor</h2>
                <div class='realtor-info'>
                    <FaEnvelope />
                    <a href='mailto:realtor@reaility.com'>Realtor Email</a>
                </div>
                <div class='realtor-info'>
                    <FaPhone />
                    <h6>123-456-7890</h6>
                </div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id vestibulum erat, quis condimentum mauris. Morbi eu venenatis quam, interdum viverra libero. Suspendisse vestibulum efficitur ligula. Suspendisse pulvinar vulputate augue, ut lobortis magna. Maecenas eleifend at nibh non vehicula. Donec justo purus, tempus dapibus ornare vel, pulvinar nec metus. Fusce non eros ac ex iaculis efficitur sed in quam. Aenean eu lectus ut orci cursus maximus ac quis quam. Proin pellentesque quam a volutpat pharetra. Nunc ac erat velit. Nullam vitae sapien sed metus suscipit ullamcorper non posuere nisi. Etiam tincidunt, ex eu dignissim placerat, ex tellus pellentesque velit, pellentesque congue nulla velit id metus. Praesent vitae venenatis nisl, ut euismod diam. Proin porta mauris sagittis felis imperdiet, sed efficitur.
                </p>
                <LinkContainer to='/listings'>
                    <Button className='btn-5'>See All listings</Button>
                </LinkContainer>
            </div>
            </Container>
        </div>
    )
}

export default RealtorDetail
