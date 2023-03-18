import React from 'react';
import './ScrollButton.css';
const ScrollButton = () => {
    return (
        <div className='scrolldown' >
            <div className="chevrons">
                <div className='chevrondown'></div>
                <div className='chevrondown'></div>
            </div>
        </div>
    );
};

export default ScrollButton;