import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { FaPlay } from "react-icons/fa";
import "./Hero.css";
// import LightBoxBg from "../../bg/hero-video-layout.png"

const Hero = () => {
    const [toggler, setToggler] = useState(false);
    let style = {
        background:'https://i.ibb.co/rv880p7/hero-video-layout.png',

    }
    return (
        <>  
            {/* Hero Area  */}
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Software services for startups without limits..</h1>
                    <p className='hero-desc'>We believe that great design should not be out of reach, so our services are less than half the price of a full-time designer.</p>
                </div>

                {/* Light Box  */}

                <div className="light-box">
                
                <div className="light-box-icon"><FaPlay onClick={() => setToggler(!toggler)} /></div>
                <FsLightbox
                toggler={toggler}
                sources={[
                'https://www.youtube.com/watch?v=3nQNiWdeH2Q',
                ]}
                />
                </div>
            </section>            
        </>
    );
};

export default Hero;