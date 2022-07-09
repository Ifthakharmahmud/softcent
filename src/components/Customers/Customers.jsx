import React from 'react';
import "./Customers.css";

const Customers = () => {
    return (
        <>
            <section className="customers mw">
                <h3 className="section-title">Our Customers</h3>
                <div className="customers-logo">
                    <img src="./img/c1.png" alt="Customer 1" />
                    <img src="./img/c2.png" alt="Customer 1" />
                    <img src="./img/c3.png" alt="Customer 1" />
                    <img src="./img/c4.png" alt="Customer 1" />
                </div>
            </section>
        </>
    );
};

export default Customers;