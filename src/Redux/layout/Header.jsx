import React from 'react';
import './Header.css'
const Header = ({ onMouseClick, mousclik }) => {

    return (
        <div>
            <div className='app-header'>
                <span className='title-header'>Example</span>
                <span key={'Home'} className={mousclik == 'Home' ? 'active' : ''}
                    onClick={(e) => onMouseClick('Home')}>Home</span>
                <span key={'Contact'} className={mousclik == 'Contact' ? 'active' : ''}
                    onClick={(e) => onMouseClick('Contact')}>Contact</span>
                <span key={'About'} className={mousclik == 'About' ? 'active' : ''}
                    onClick={(e) => onMouseClick('About')}>About US</span>
                     <span key={'Settings'} className={mousclik == 'Settings' ? 'active' : ''}
                    onClick={(e) => onMouseClick('Settings')}>Settings</span>
                <span key={'Logout'} className={mousclik == 'Logout' ? 'active' : ''}
                    onClick={(e) => onMouseClick('Logout')}>Logout</span>
            </div>
        </div>
    );
}

export { Header };
