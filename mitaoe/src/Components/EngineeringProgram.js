import React from 'react';
import eng1 from '../Image/Program/entc.png';
import eng2 from '../Image/Program/Civ.jpeg';
import eng3 from '../Image/Program/chem.png';
import eng4 from '../Image/Program/Mech.jpeg';
import eng5 from '../Image/Program/compu.png';
import './EngineeringProgram.css';

function EngineeringProgram() {
  return (
    <div className="engineering-program-container">
      <h2>Engineering Programs</h2>
      <div className="engineering-program-boxes-container">
        <div className="engineering-program-box">
          <img src={eng1} alt="Electronics and Telecommunication Engineering" />
          <h3>Electronics and Telecommunication Engineering</h3>
        </div>
        <div className="engineering-program-box">
          <img src={eng2} alt="Civil Engineering" />
          <h3>Civil Engineering</h3>
        </div>
        <div className="engineering-program-box">
          <img src={eng3} alt="Chemical Engineering" />
          <h3>Chemical Engineering</h3>
        </div>
        <div className="engineering-program-box">
          <img src={eng4} alt="Mechanical Engineering" />
          <h3>Mechanical Engineering</h3>
        </div>
        <div className="engineering-program-box">
          <img src={eng5} alt="Computer Engineering" />
          <h3>Computer Engineering</h3>
        </div>
      </div>
    </div>
  );
}

export default EngineeringProgram;
