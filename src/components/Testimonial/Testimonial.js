import React from "react";
import "./Testimonial.css";
import { FaMedal } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosMedal } from "react-icons/io";
import Zoom from "react-reveal/Zoom";

const Testimonial = () => {
  const testimonialData = [
    {
      name: "Star Award (Oct-19 to Mar-2020)",
      imageLink:
        "https://drive.google.com/uc?id=1B6xGfWthApw2HgbrxuazhO4uj_JZFdaN",
    },
    {
      name: "TITANS Award (Jan to June-2018)",
      imageLink:
        "https://drive.google.com/uc?id=1jUOWER06Qe8ePPJkK3zfOnqcUlUZHvrt",
    },
    {
      name: "Award for Tool Development",
      imageLink:
        "https://drive.google.com/uc?id=1jKxE3vBtbOp8Goo2riD9ufDCRyC46dZ9",
    },
    {
      name: "Award for Exemplary Performance",
      imageLink:
        "https://drive.google.com/uc?id=1jato8BAfdkkIfxb03pGVgPvoyNb6ZGFR",
    },
    {
      name: "Pillar of the Month June-2015",
      imageLink:
        "https://drive.google.com/uc?id=1jYfXw9-FIgPHY7Ne2VLjX6z4Pf2-9pwl",
    },
  ];

  var settings = {
    dots: true,
    infinite: false,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <div id="testimonials" className="container testimonial-section">
      <div className="section-title">
        <div className="timeline-icon">
          <FaMedal />
        </div>

        <h5>Testimonials</h5>
        <span className="underline"></span>
      </div>
      <Zoom>
        <div className="testimonial-slider">
          <Slider {...settings}>
            {testimonialData.map((item, index) => (
              <div className="content-slider-main">
                <div className="content-slider" key={index}>
                  <div className="images-list">
                    <a href={item.imageLink} target="_blank">
                      <img
                        src={item.imageLink}
                        alt="testimonial image"
                        className="center-image"
                      ></img>
                    </a>
                  </div>
                </div>
                <div className="footer_medal">
                  <div id="styledimg"></div>
                </div>
                <footer>
                  <h4>{item.name}</h4>
                </footer>
              </div>
            ))}
          </Slider>
        </div>
      </Zoom>
    </div>
  );
};

export default Testimonial;
