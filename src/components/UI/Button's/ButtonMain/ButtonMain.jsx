import React from 'react';
import cl from './ButtonMain.module.css';
const ButtonMain = ({children, ...props}) => {
    return (
        <button{...props} className= {cl.button28}>
            {children}
        </button>
    );
};

export default ButtonMain;