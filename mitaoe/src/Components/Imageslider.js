import React from 'react';
import p1 from '../Image/p1.jpg';
import p2 from '../Image/p2.jpg';
import p3 from '../Image/p3.jpg';

class Imageslider extends React.Component {
  render() {
    return (
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={p1}
              className="d-block w-100"
              alt="First slide"
              style={{ width: '400px', height: '630px' }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Campus</h5>
              <p> A buliding of MITAOE.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={p2}
              className="d-block w-100"
              alt="Second slide"
              style={{ width: '400px', height: '630px' }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={p3}
              className="d-block w-100"
              alt="Third slide"
              style={{ width: '400px', height: '630px' }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}

export default Imageslider;
