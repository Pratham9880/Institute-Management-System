import React from 'react';
import './Aboutus.css';

class AboutUs extends React.Component {
  render() {
    return (
      <div className="about-us-container">
        <h1>About Us</h1>
        <div className="about-us-grid">
          <div className="about-us-card">
            <img src="https://picsum.photos/200" alt="MIT Academy of Engineering" />
            <h2>MIT Academy of Engineering</h2>
            <p>
              MIT Academy of Engineering (MITAOE) is the third institute in Pune which has been bestowed with ‘academic autonomy’ by the University Grants Commission (UGC).
            </p>
          </div>
          <div className="about-us-card">
            <img src="https://picsum.photos/200" alt="MIT School of Design" />
            <h2>MIT School of Design</h2>
            <p>
              The MIT School of Design (MITSD) provides a unique blend of Technology-enabled Design curriculum which will make the learners professionally equipped to face the challenges of the industry.
            </p>
          </div>
          <div className="about-us-card">
            <img src="https://picsum.photos/200" alt="Arts, Commerce and Science College" />
            <h2>Arts, Commerce and Science College</h2>
            <p>
              The MIT Arts, Commerce and Science College offers a range of Undergraduate and Postgraduate programs to eligible students.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
