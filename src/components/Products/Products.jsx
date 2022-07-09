import React from 'react';
import "./Products.css";

const Products = () => {
    return (
        <>
            {/* Our Products  */}
        <section className="products main-content">
            <div className="mw title-section">
                <h2>Our Products</h2>
                <img src="./img/Underline.png"/>
                <div className="desc-btn">
                    <p>We believe that great design should not be out of reach, so our services are less than half the price of a full-time designer.</p>
                    <button>See More</button>
                </div>
            </div>
            <div className="top-product product-content">
                <div className="text-block">
                    <div className="text-inner">
                        <h3>SwipeXYZ Product</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <a href="#">View product</a>
                    </div>
                </div>
                <div className="image-block">
                    <img src="./img/product-1.jpg"/>
                </div>
            </div>
            <div className="bottom-product product-content">
                <div className="image-block">
                    <img src="./img/product-2.jpg"/>
                </div>
                <div className="text-block">
                    <div className="text-inner">
                        <h3>Cashback Product</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <a href="#">View product</a>
                    </div>
                </div>
            </div>
        </section>

                {/* <div classNameName="single-product-1">
                    <div classNameName="single-product-1-content">
                        <h4>SwipeXYZ Product</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <a href="#">View product</a>
                    </div>
                    <div classNameName="single-product-1-img">
                        <img src="./img/mobile.png" alt="single product 1" />
                    </div>
                </div>
                <div classNameName="single-product-2">
                    <div classNameName="single-product-2-img">
                        <img src="./img/mobile2.png" alt="single product 1" />
                    </div>
                    <div classNameName="single-product-2-content">
                        <h4>Cashback Product</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <a href="#">View product</a>
                    </div>                    
                </div> */}


            {/* </section> */}
            
        </>
    );
};

export default Products;