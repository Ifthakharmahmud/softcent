import React from 'react';
import Hero from '../Hero/Hero';
import LogoMenu from '../LogoMenu/LogoMenu';
import "./Header.css";

const Header = () => {
    return (
        <>
          {/* Header Area  */}
            <section className='header mw'>
                <LogoMenu />
                <Hero />
            </section>
        </>
    );
};

export default Header;