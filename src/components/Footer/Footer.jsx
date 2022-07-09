import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
       <footer className="footer-container ">
            <div className="footer-top mw">
                <p>Looking for a <br /> Software Partner? </p>
                <button> Start a project</button>
            </div>

        <div className="footer-bottom mw">
            <div className="footer-bottom-box-different">
                <img src="./img/footer-logo.png" alt="Footer Logo" />
                <p className="details">Get a fully stacked design team that will <br /> give you accessible design, exhaustive
                    <br /> research, and an outstanding experience.</p>
                <p className="footer-contact">Email: info@softcent.eu</p>
                <p className="footer-contact">Phone: +(372) 57836500</p>

                <p className="footer-contact">
                    <a href="#"> <i className="fa-brands fa-facebook"></i> </a>
                    <a href="#"> <i className="fa-brands fa-whatsapp"></i> </a>
                    <a href="#"> <i className="fa-brands fa-twitter"></i> </a>
                    <a href="#"> <i className="fa-brands fa-instagram"></i> </a>
                </p>
                
            </div>
            <div className="footer-bottom-box">
                <h5>Company</h5>
                <ul>
                    <li>About Us</li>
                    <li>Our Portfolio</li>
                    <li>Our Product</li>
                    <li>Our Team</li>
                    <li>Our Pricing</li>
                    <li>Our Testimonials</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="footer-bottom-box">
                <h5>Our Service</h5>
                <ul>
                    <li>Marketing</li>
                    <li>UI/UX Design</li>
                    <li>Graphic Design (Branding)</li>
                    <li>Development</li>
                    <li>New Products</li>
                </ul>
            </div>
            <div className="footer-bottom-box">
                <h5>Supports</h5>
                <ul>
                    <li>FAQs</li>
                    <li>Support Policy</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Refund Policy</li>
                </ul>
            </div>
        </div>

        <div className="divider"></div>

        <p className="copyright-text mw"> &copy; 2022, Softcent EU, A European IT company</p>

    </footer>

        </>
    );
};

export default Footer;