import React from 'react';
import "./Pricing.css";
import { FaCheck } from "react-icons/fa";



const Pricing = () => {
    return (
        <>
           {/* Pricing Section  */}
           <section className="pricing mw">
                <div className="pricing-title">
                    <h3 className="section-title">Pricing Package Choose Your Plan</h3>

                    <p>We believe that great design should not be out of reach, so our services are less than half the price of a full-time designer.</p>
                </div>

                <div className="tab-toggler">
                    <button className="monthly">Monthly</button>
                    <button className="yearly">Yearly</button>
                </div>

                <div className="pricing-card">
                    <div className="single-card">
                        <div className="card-title">
                            <h5>Merketing</h5>
                            <p>$1000/ mo</p>
                        </div>

                        <ul className="service-list">
                            <li> <FaCheck/> Dedicated Designer</li>
                            <li> <FaCheck/> Unlimited requests</li>
                            <li> <FaCheck/> Unlimited brand profiles</li>
                            <li> <FaCheck/> Native source files</li>
                            <li> <FaCheck/> Real-time collaboration</li>
                            <li> <FaCheck/> Banner Ads</li>
                            <li> <FaCheck/> Clothing &amp; Merchandise Design</li>
                            <li> <FaCheck/> Packaging &amp; Label</li>
                            <li> <FaCheck/> Logo &amp; Brand Guide</li>
                        </ul>
                    </div>
                    <div className="single-card active-card">
                        <div className="card-title">
                            <h5>UI/UX Design</h5>
                            <p>$1000/ mo</p>
                        </div>

                        <ul className="service-list">
                            <li> <FaCheck/> Dedicated Designer</li>
                            <li> <FaCheck/> Unlimited requests</li>
                            <li> <FaCheck/> Unlimited brand profiles</li>
                            <li> <FaCheck/> Native source files</li>
                            <li> <FaCheck/> Real-time collaboration</li>
                            <li> <FaCheck/> Banner Ads</li>
                            <li> <FaCheck/> Clothing &amp; Merchandise Design</li>
                            <li> <FaCheck/> Packaging &amp; Label</li>
                            <li> <FaCheck/> Logo &amp; Brand Guide</li>
                        </ul>
                    </div>
                    <div className="single-card">
                        <div className="card-title">
                            <h5>Development</h5>
                            <p>$1000/ mo</p>
                        </div>

                        <ul className="service-list">
                            <li> <FaCheck/> Dedicated Designer</li>
                            <li> <FaCheck/> Unlimited requests</li>
                            <li> <FaCheck/> Unlimited brand profiles</li>
                            <li> <FaCheck/> Native source files</li>
                            <li> <FaCheck/> Real-time collaboration</li>
                            <li> <FaCheck/> Banner Ads</li>
                            <li> <FaCheck/> Clothing &amp; Merchandise Design</li>
                            <li> <FaCheck/> Packaging &amp; Label</li>
                            <li> <FaCheck/> Logo &amp; Brand Guide</li>
                        </ul>
                    </div>


                </div>


           </section>
        </>
    );
};

export default Pricing;