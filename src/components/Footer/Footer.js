import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { SiFacebook } from 'react-icons/si';
import { ImPinterest2 } from 'react-icons/im';
import logo from '../../assets/logo.png';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <section className='footer'>
                <img src={logo} className='logoSign'  alt="logo de Ani Vidotto" /> 
                <ul>
                    <li>
                        <a href="https://www.instagram.com/universo.depot/?hl=es" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram/></a>
                    </li>
                    <li>
                        <a href="https://es-la.facebook.com/universo.depot/" target="_blank" rel="noopener noreferrer"><SiFacebook/></a>
                    </li>
                    <li>
                        <a href="https://ar.pinterest.com/universodepot/universo-depot/" target="_blank" rel="noopener noreferrer"><ImPinterest2/></a>
                    </li>
                </ul>
            </section>
        </footer>
    );
};

export default Footer;