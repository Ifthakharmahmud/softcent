import React, { Component } from "react";
import Slider from "react-slick";
import "./AboutCarousel.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <>
        <Slider {...settings}>
            {/* Single Slide  */}
        <div className="single-slider">
            <div className="slider-content">
                <p className='slider-desc'>We had a bit of a slow and bumpy start, but after changing the designer on their side everything went in a very good direction. The designers were talented and easy to work with.</p>

                <div className="author">
                    <img src="./img/author.png" alt="Author" />
                    <div className="author-title">
                        <h5>Shuvo Roy</h5>
                        <p>Softcent Co-Founder</p>
                    </div>
                </div>
            </div>
            <div className="slider-img">
                <img src="./img/slider1.png" alt="" />
            </div>
          </div>

           {/* Single Slide  */}
        <div className="single-slider">
            <div className="slider-content">
                <p className='slider-desc'>We had a bit of a slow and bumpy start, but after changing the designer on their side everything went in a very good direction. The designers were talented and easy to work with.</p>

                <div className="author">
                    <img src="./img/man.jpg" alt="Author" />
                    <div className="author-title">
                        <h5>Jesse Pinkman</h5>
                        <p>Softcent Co-Founder</p>
                    </div>
                </div>


            </div>
            <div className="slider-img">
                <img src="./img/mountain.jpg" alt="" />
            </div>
          </div>
        </Slider>
      </>
    );
  }
}