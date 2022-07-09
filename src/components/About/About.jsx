import React from 'react';
import AboutCarousel from '../AboutCarousel/AboutCarousel';
import "./About.css";

const About = () => {
   
    return (
        <>  
            {/* About Us Section  */}
            <section className="about mw">
                <h3 className='section-title'>Talk About Us!</h3>

                <div  className="testimonial-carousel">
                    <AboutCarousel></AboutCarousel>
                </div>
            </section>            
        </>
    );
};

export default About;