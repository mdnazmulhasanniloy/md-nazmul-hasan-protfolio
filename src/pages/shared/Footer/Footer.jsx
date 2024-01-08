import React from 'react';
import { FaArrowUp } from "react-icons/fa"
import "./Footer.css"


const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-text">
                <p>
                    CopyRight &copy; 2023 by Nazmul Hasan | All rights Reserved.
                </p>
            </div>
            
            <div className="footer-iconTop">
                <a href="#"><FaArrowUp className='i' /></a>
            </div>
        </footer>
    );
};

export default Footer;