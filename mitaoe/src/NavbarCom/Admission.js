import React, { Component } from 'react'
import '../NavbarCom/Admission.css';

export default class Admission extends Component {
  render() {
    return (
      <div className="admission-container">
        <h1>Admission</h1>
        <div className="programmes-container">
          <div className="programme-box">
            <h2>ELECTRONICS & TELECOMMUNICATION ENGINEERING</h2>
            <p>It takes pride in the quality and excellence of its joyful learning, industry institute interaction, activity-based learning.</p>
          </div>
          <div className="programme-box">
            <h2>ELECTRONICS ENGINEERING</h2>
            <p>Dedicated to the overall development of its students byproviding an environment for self-learning through various internationalcompetitions like world skills India</p>
          </div>
          <div className="programme-box">
            <h2>COMPUTER ENGINEERING</h2>
            <p>The sustained effort is to produce computing graduates with the potential to design and develop innovative approaches to programming and problem solving.</p>
          </div>
          <div className="programme-box">
            <h2>MECHANICAL ENGINEERING</h2>
            <p>Overall student development through best industry connect, live projects and best teaching-learning experience. Nation leaders in promising Indian student championship.</p>
          </div>
          <div className="programme-box">
            <h2>CIVIL ENGINEERING</h2>
            <p>Exposure to subjects like Structural, Hydraulics, Water Resources, Geotechnical, Transportation, Environmental Engineering and Smart structures.</p>
          </div>
        </div>
      </div>
    )
  }
}
