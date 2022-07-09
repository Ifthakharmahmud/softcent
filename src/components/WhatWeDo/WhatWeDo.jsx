import React from 'react';
import "./WhatWeDo.css";

const WhatWeDo = () => {
    return (
        <>  
        {/* What We Do Section  */}
            <section className="what-we-do mw">
                <h3 className='section-title'>What we do</h3>

                {/* Services  */}
                <div className="services">
                    {/* Single Service Box  */}
                    <div className="single-service">
                        <div className="service-title">
                            <img src="./img/branding.png" alt="Single Service Title Image" />
                            <h4>Branding</h4>
                        </div>

                        <ul className="service-list">
                            <li>Brand Strategy </li>
                            <li>Social media</li>
                            <li>Marketing Assets</li>
                            <li>Presentations</li>
                            <li>Build MVP Version</li>
                            <li>Pitch Deck</li>
                        </ul>
                    </div>
                    {/* Single Service Box  */}
                    <div className="single-service">
                        <div className="service-title">
                            <img src="./img/UX.png" alt="Single Service Title Image" />
                            <h4>UI/UX Design</h4>
                        </div>

                        <ul className="service-list">
                            <li>User Interface</li>
                            <li>User Experience</li>
                            <li>Design System</li>
                            <li>Wireframe</li>
                            <li>Prototype</li>
                            <li>Website &amp; Mobile App</li>
                            <li>IOS + Android</li>
                        </ul>
                    </div>
                    {/* Single Service Box  */}
                    <div className="single-service">
                        <div className="service-title">
                            <img src="./img/UX.png" alt="Single Service Title Image" />
                            <h4>Development</h4>
                        </div>

                        <ul className="service-list">
                            <li>Front End (HTML, CSS, React) </li>
                            <li>Backend (Node.js, MongoDB)</li>
                            <li>iOS (Swift)</li>
                            <li>Android (Kotlin, Flutter)</li>
                            <li>Blockchain Development (NFT)</li>
                        </ul>
                    </div>
                </div>
            </section>

        

            
        </>
    );
};

export default WhatWeDo;