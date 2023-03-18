import React from 'react';
import img from "../styles/Artem.jpg";

const WhoWeAre = () => {
    return (
        <div style={{textAlign: 'center', alignContent: 'center'}}>
            <div style={{width: '100%', display: 'flex', marginTop: '150px', marginLeft: '30px', textAlign: 'center'}}>
                <div style={{width: '50%', float: 'left', backgroundColor: "#000"}}>
                    <h2 style={{textAlign: 'center',backgroundColor: "#000", marginTop: '100px', fontWeight: 'bold', color: '#fff'}}> Who we are</h2>
                    <h5 style={{marginLeft: '120px', marginRight: '120px',textAlign: 'center', marginTop: '20px',backgroundColor: "#000", color: '#fff'}}>We are a small company Alyaska Studio, which was founded in 2022 in Ukraine. In a country that is fighting for its independence and striving to be free. We strive to improve the gaming community through the games we develop and we hope that each of you will be able to help us</h5>
                </div>
                <div>
                    <img src= {img}
                         alt = 'AIRSHIP WAR icons'
                         style={{width:"600px",height:"450px", objectFit: 'cover', marginLeft: '10px'}}/>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;