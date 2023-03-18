import React from 'react';
import './ScrollMenu.css';
import image_1 from './Japan.jpg';
import image_2 from './camp.png';
import image_3 from './2022-08-05 16.57.01.jpg';
import image_4 from './Lighthouse.jpg';
import image_5 from './Camping.jpg';
import image_6 from './Carpathian Mountains (Bukovel).jpg';
import image_7 from './pan.png';
import image_8 from './baloon.png';
import image_9 from './Port.jpg';

const ScrollMenu = () => {
    return (
    <div>
        <div style={{justifyContent: 'center'} }>
            <div className="radio-btns" role="radiogroup" >
                <div className="radio-btns__btn" role="radio" aria-checked="false" tabIndex="-1"
                     aria-label="Select image one">
                    <img style = {{width: '250px'}}
                        src= {image_1}
                         alt=" description"
                        />
                </div>

                <div className="radio-btns__btn" role="radio" aria-checked="false" tabIndex="-1"
                     aria-label="Select image two">
                    <img style = {{width: '250px'}}
                         src= {image_2}
                         alt=" description"
                         />
                </div>
                <div className="radio-btns__btn" role="radio" aria-checked="false" tabIndex="-1"
                     aria-label="Select image three">
                    <img style = {{width: '250px'}}
                         src= {image_3}
                         alt=" description"
                          />
                </div>
            </div>
        </div>
        <div style={{justifyContent: 'center', marginTop: '3%'} }>
            <div className="radio-btns" role="radiogroup" >
                <div className="radio-btns__btn" role="radio" aria-checked="false" tabIndex="-1"
                     aria-label="Select image one">
                    <img style = {{width: '250px'}}
                         src= {image_4}
                         alt=" description"
                    />
                </div>

                <div className="radio-btns__btn" role="radio" aria-checked="false" tabIndex="-1"
                     aria-label="Select image two">
                    <img style = {{width: '250px'}}
                         src= {image_5}
                         alt=" description"
                    />
                </div>
                <div className="radio-btns__btn" role="radio" aria-checked="false" tabIndex="-1"
                     aria-label="Select image three">
                    <img style = {{width: '250px'}}
                         src= {image_6}
                         alt=" description"
                    />
                </div>
            </div>
        </div>
        <div style={{justifyContent: 'center', marginTop: '3%'} }>
            <div className="radio-btns" role="radiogroup" >
                <div className="radio-btns__btn" role="radio" aria-checked="false" tabIndex="-1"
                     aria-label="Select image one">
                    <img style = {{width: '250px'}}
                         src= {image_7}
                         alt=" description"
                    />
                </div>

                <div className="radio-btns__btn" role="radio" aria-checked="false" tabIndex="-1"
                     aria-label="Select image two">
                    <img style = {{width: '250px'}}
                         src= {image_8}
                         alt=" description"
                    />
                </div>
                <div className="radio-btns__btn" role="radio" aria-checked="false" tabIndex="-1"
                     aria-label="Select image three">
                    <img style = {{width: '250px'}}
                         src= {image_9}
                         alt=" description"
                    />
                </div>
            </div>
        </div>
    </div>
    )
}
export default ScrollMenu;