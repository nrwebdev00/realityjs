import React from 'react'
import { Button, Container } from 'react-bootstrap';
import backgroundImage from '../images/tallBuilding.jpeg'
import nathon from '../images/nr.jpg';

const HomeRealtors = () => {
    return (
        <div className='home-page-bottom'
            style={{
                backgroundImage: `url(${backgroundImage})`
            }}
        >
        <Container >
            <div className='home-realtors-title-wrapper'>
               <h1 className='text-center '>Featured Relator</h1>
               <h1 className='text-center '>Nathon Reed</h1>
            </div>
            <div className='home-realtor-body'>
                <img src={nathon} alt='profile of realtor' />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed aliquet eros, at euismod arcu. Maecenas massa elit, condimentum a commodo ut, placerat eu mi. Etiam volutpat nunc quis diam maximus, nec faucibus nisl vehicula. Sed aliquet id metus quis convallis. Aliquam erat volutpat. Aliquam non sapien eu dui hendrerit ornare sed vitae dolor. Sed consectetur libero purus, eget blandit ex venenatis id. Maecenas ac blandit nisi, ut suscipit lorem. Sed convallis eros non leo placerat commodo quis in velit. Cras cursus mi ligula, vel tempor nisl cursus varius. Integer a ultricies nulla.<br/>Donec interdum volutpat ipsum, et tristique lectus ultrices a. In hac habitasse platea dictumst. Donec arcu massa, porta id est id, vestibulum pretium arcu. Mauris ornare massa nec ex hendrerit, id porttitor mi faucibus. Curabitur a porta mauris.</p>
            </div>
            <Button className='btn-2'>More Info on Nathon Reed</Button>
        </Container>
        </div>
    )
}

export default HomeRealtors
