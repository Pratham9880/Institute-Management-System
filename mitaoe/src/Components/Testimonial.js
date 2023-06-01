import React from "react";
import "./Testimonial.css";
import Person1Img from '../Image/Dhanshri.jpg';
import Person2Img from '../Image/Manthan.jpg';
import Person3Img from '../Image/Pratham.jpeg';
import Person4Img from '../Image/Shrutika.jpeg';

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-box">
        <div className="testimonial-image">
          <img src={Person1Img} alt="person1" className="testimonial-image-round" />
        </div>
        <div className="testimonial-info">
          <h3>Dhanshri</h3>
          <p>"Hello I am Dhanshri."</p>
        </div>
      </div>
      <div className="testimonial-box">
        <div className="testimonial-image">
          <img src={Person2Img} alt="person2" className="testimonial-image-round" />
        </div>
        <div className="testimonial-info">
          <h3>Manthan</h3>
          <p>"Hello I am Manthan."</p>
        </div>
      </div>
      <div className="testimonial-box">
        <div className="testimonial-image">
          <img src={Person3Img} alt="person3" className="testimonial-image-round" />
        </div>
        <div className="testimonial-info">
          <h3>Pratham</h3>
          <p>"Hello I am Pratham."</p>
        </div>
      </div>
      <div className="testimonial-box">
        <div className="testimonial-image">
          <img src={Person4Img} alt="person4" className="testimonial-image-round" />
        </div>
        <div className="testimonial-info">
          <h3>Shrutika</h3>
          <p>"Hello I am Shrutika."</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
