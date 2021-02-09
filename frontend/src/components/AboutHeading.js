import React from 'react'
import backgroundImage from '../images/pexels-photo-830891.jpeg';

const AboutHeading = ({ name, text}) => {
    return (
        <div 
                className='about-page-title-wrapper'
                style={{
                    backgroundImage: `url(${backgroundImage})`
                }}
            >
               <div className='about-page-title'>
               <h1>{name}</h1>
                <p>{text}
                </p>
               </div>
            </div>
    )
}

export default AboutHeading
