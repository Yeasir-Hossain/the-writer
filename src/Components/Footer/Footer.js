import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center text-white bg-dark mt-5 footer'>
            <p><small>copyright @ {year} </small></p>
        </footer>
    );
};

export default Footer;