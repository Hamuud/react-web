import React from 'react';
import AirShipWar from "./AirShipWar";
import ScrollButton from "../components/UI/Button's/ScroolButton/ScrollButton";
import WhoWeAre from "./WhoWeAre";
import PrivacyHome from "./PrivacyHome";
import Slider from "../components/Slider";
import Images from "../components/images"

const Home = () => {
    return (
        <div>
            <div>
                <div>
                <h1 style={{textTransform: 'none',fontSize: '72px', fontWeight: 'bold', margin: '5%', color: '#ffffff'}}> Welcome</h1>
                </div>
            </div>
            <div style={{
                paddingTop:'20px',
                display:'flex',
                alignContent: 'center' ,
                justifyContent: 'space-evenly',
                alignItems: 'center'
            }}>
                <ScrollButton/>
            </div>
            <WhoWeAre/>
            <AirShipWar/>
            <PrivacyHome/>
        </div>

    );
};

export default Home;