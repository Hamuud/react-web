import React from 'react';
import './Gallery.css'
import image_1 from '../ScrollMenu/Lighthouse.jpg';
import image_2 from '../ScrollMenu/Japan.jpg'
import image_3 from '../ScrollMenu/camp.png'
import image_4 from '../ScrollMenu/Camping.jpg'
import image_5 from '../ScrollMenu/2022-08-05 16.57.01.jpg'
import image_6 from '../ScrollMenu/2022-08-05 16.57.08.jpg'
import image_7 from '../ScrollMenu/2022-08-05 16.57.23.jpg'
const Gallery = () => {
    return (
        <div className="container">
            <div className="box">
                <img src={image_1}
                     alt="LIGHTHOUSE"/>
                <span>Lighthouse</span>
            </div>
            <div className="box">
                <img src={image_2}
                     alt="Japan"/>
                <span>Japan</span>
            </div>
            <div className="box">
                <img src={image_3}
                     alt="Winter"/>
                <span>Winter</span>
            </div>
            <div className="box">
                <img src={image_4}
                     alt="Camp"/>
                <span>Camping</span>
            </div>
            <div className="box">
                <img src={image_5}
                     alt="Room"/>
                <span>Room</span>
            </div>
            <div className="box">
                <img src={image_6}
                     alt="Retro"/>
                <span>Retro</span>
            </div>
            <div className="box">
                <img src={image_7}
                     alt="Turntable"/>
                <span>Turntable</span>
            </div>
        </div>
    );
};

export default Gallery;