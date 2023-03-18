import React from 'react';
import ButtonMain from "../components/UI/Button's/ButtonMain/ButtonMain";
import {Link} from "react-router-dom";
import MyButton from "../components/UI/Button's/button/MyButton";

const PrivacyHome = () => {
    return (
        <div>
            <div style={{marginLeft: '350px', marginTop: '100px'}}>
                <div>
                    <h1 style = {{fontSize: '64px', textAlign: 'left', fontWeight: 'bold', color: '#fff'}}>Privacy policy</h1>
                    <h2 style={{fontSize: '24px', fontWeight: 'bold', textAlign: 'left',marginTop: '20px', color: '#fff'}}>
                        Effective date: April 08, 2022.
                    </h2>
                    <p style={{width: '675px',marginTop: '20px'}}>
                        We have updated our Privacy Policy to provide more clarity on our data practices with respect to users under the age of 13 (“children” or “child users”). The updates took effect on  April 08, 2022.
                    </p>
                    <form action="/privacy" target="_blank">
                        <ButtonMain>Learn More</ButtonMain>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default PrivacyHome;