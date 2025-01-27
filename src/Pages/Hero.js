import React from "react";
import Slider from "react-slick";
import Contact from "./Contact"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Hero.css";

// Import images
import WifiHomepage from '../assets/images/wifi_homepage.png';
import Cloud2 from '../assets/images/cloud2.jpg';
import WebDev from '../assets/images/web_dev.jpg';
import PromoPic from '../assets/images/promo_pic.jpg';

const App = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const slides = [
    {
      title: "Internet Packages",
      imageUrl: WifiHomepage,
    },
    {
      title: "Cloud Packages",
      imageUrl: Cloud2,
    },
    {
      title: "Web Services",
      description: "Our Products",
      imageUrl: WebDev,
    },
    {
      title: "Promo",
      imageUrl: PromoPic,
    },
  ];

  return (
    <div className="app-container">
      {/* Slider Section */}
      <section className="slider-section w-full">
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <div
            key={index}
            className="slide relative w-full h-screen flex items-center justify-center"
          >
            {/* Background Image */}
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          
            {/* Overlay */}
            <div className="overlay"></div>
          
            {/* Content */}
            <div className="content">
              {slide.description && (
                <p className="text-lg font-semibold mb-2">{slide.description}</p>
              )}
              <h2 className="text-5xl font-bold mb-4 text-green">{slide.title}</h2>
              {slide.buttonText && (
                <button className="bg-yellow-600 px-6 py-3 rounded-md mt-4">
                  {slide.buttonText}
                </button>
              )}
            </div>
          </div>
          
            
          ))}
        </Slider>
      </section>

      <section className="about-us-section">
        <div className="container">
          <h1>About Us</h1>
          <p>
            At OnUncapped Networks, we are passionate about empowering businesses
            and individuals with cutting-edge technology solutions. Our expertise
            in cloud storage, bandwidth security, and ICT consulting ensures that
            both commercial and residential customers enjoy the best service and
            reliability.
          </p>

          <div className="why-choose-us">
            <h2>Why Choose Us?</h2>
            <ul>
              <li>Reliable Speeds for Streaming & Gaming</li>
              <li>Best Coverage in South Africa</li>
              <li>Reduced Latency</li>
              <li>Uncapped 4G Experience</li>
              <li>24/7 Customer Support</li>
            </ul>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <Contact />

      
    </div>
  );
};

export default App;
