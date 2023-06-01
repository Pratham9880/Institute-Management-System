import React, { useState, useEffect } from "react";
import company1 from "../Image/Company/Acc.png";
import company2 from "../Image/Company/apple.png";
import company3 from "../Image/Company/google.png";
import company4 from "../Image/Company/fo.png";
import company5 from "../Image/Company/LG.png";
import company6 from "../Image/Company/samsung.png";
import company7 from "../Image/Company/tcs.png";
import "../Components/Slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 0,
      image: company1,
      alt: "Accenture",
    },
    {
      id: 1,
      image: company2,
      alt: "Apple",
    },
    {
      id: 2,
      image: company3,
      alt: "Google",
    },
    {
      id: 3,
      image: company4,
      alt: "Infosys",
    },
    {
      id: 4,
      image: company5,
      alt: "LG",
    },
    {
      id: 5,
      image: company6,
      alt: "Samsung",
    },
    {
      id: 6,
      image: company7,
      alt: "TCS",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <div
        className="slider-wrapper"
        style={{
          transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide) => (
          <div className="slide" key={slide.id}>
            <img className="slide-image" src={slide.image} alt={slide.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
