import React, { useState } from 'react';
import "./Technology.css";
const Technology = () => {
    const [index, setIndex] = useState(0);
    return (
        <>
            {/* Our Dev Technology */}
            <section className="technology mw">
                <h3 className='section-title'>Our Dev Technology</h3>
                <div className="technology-tabs">
                    <div className="tabs">
                        <ul className="tab-menu">
                            <li onClick={()=>{setIndex(0)}}>Programming Languages</li>
                            <li onClick={()=>{setIndex(1)}}>Frameworks</li>
                            <li onClick={()=>{setIndex(2)}}>Databases</li>
                            <li onClick={()=>{setIndex(3)}}>Mobile Platforms</li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-one" hidden={index != 0}>
                                <div className="tab-data">
                                    <img src="./img/tab1.png" alt="" />
                                    <img src="./img/tab2.png" alt="" />
                                    <img src="./img/tab3.png" alt="" />
                                    <img src="./img/tab4.png" alt="" />
                                    <img src="./img/tab5.png" alt="" />
                                </div>
                            </div>
                            <div className="tab-two" hidden={index != 1}>
                                <div className="tab-data">
                                    <img src="./img/tab1.png" alt="" />
                                    <img src="./img/tab3.png" alt="" />
                                    <img src="./img/tab2.png" alt="" />
                                    <img src="./img/tab5.png" alt="" />
                                    <img src="./img/tab4.png" alt="" />
                                </div>
                            </div>
                            <div className="tab-three" hidden={index != 2}>
                                <div className="tab-data">
                                    <img src="./img/tab5.png" alt="" />
                                    <img src="./img/tab2.png" alt="" />
                                    <img src="./img/tab3.png" alt="" />
                                    <img src="./img/tab1.png" alt="" />
                                    <img src="./img/tab4.png" alt="" />
                                </div>
                            </div>
                            <div className="tab-four" hidden={index != 3}>
                                <div className="tab-data">
                                    <img src="./img/tab4.png" alt="" />
                                    <img src="./img/tab2.png" alt="" />
                                    <img src="./img/tab1.png" alt="" />
                                    <img src="./img/tab5.png" alt="" />
                                    <img src="./img/tab3.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Design Technology */}
            <section className="technology design-technology mw">
                <h3 className='section-title'>Our Design Technology</h3>
                <div className="design-tabs">
                    <div className="technology-images">
                        <img src="./img/design1.png" alt="" />
                        <img src="./img/design2.png" alt="" />
                        <img src="./img/design3.png" alt="" />
                        <img src="./img/design4.png" alt="" />
                        <img src="./img/design5.png" alt="" />
                    </div>
                </div>
            </section>

        </>
    );
};

export default Technology;