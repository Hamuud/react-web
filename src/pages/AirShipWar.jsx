import React from 'react';
import '../styles/AirShipWar.module.css';
import '../styles/Privacy.css';
import img from '../styles/1024.png';
import MyButton from "../components/UI/Button\'s/button/MyButton";
const AirShipWar = () => {
    return (
        <div style={{color: '#ffffff'}}>
            <div className= 'Privacy__main'>
            <div>
                <div style= {{width:'65%', marginLeft: '20%', marginTop: '20%'}}>
                    <h1 style = {{fontSize: '36px', textAlign: 'left', fontWeight: 'bold'}}>AirShip War</h1>
                    <h2 style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
                        Shooter
                    </h2>
                    <p style={{ marginTop: '10%'}}>
                        Immerse yourself in 2D air combat with AirShip War!
                        Fight for the title of the best ace pilot and set your own records.
                    </p>
                    <p>
                        Two fictional states unleashed a war in this big world. You have to fight for a pilot whose name no one knew, but thanks to you and your efforts, the whole world will know about you!
                        Try your luck and test your strength in HARDCORE mode!
                    </p>
                    <div>
                    <form action="https://apps.apple.com/ua/app/airship-war/id1617685748" target="_blank">
                        <MyButton>Dowload now</MyButton>
                    </form>
                    </div>
                </div>
            </div>
            <div>
                <div className='img_wrap' style={{marginTop: '18%'}}>
                    <div>
                        <div>
                            <img src= {img}
                             alt = 'AIRSHIP WAR icons'
                             style={{width:"425px",height:"600px", objectFit: 'cover',margin: '20px',boxShadow: '15px 15px 1px 1px #EEF6F9'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
    );
};

export default AirShipWar;