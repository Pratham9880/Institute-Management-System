import React from 'react';
class CorporateRelation extends React.Component {
  render() {
    return (
      <div className="App">
      <div className="header">
        <h1>Corporate Relations Office</h1>
        <h2>Maharashtra Institute of Technology Academy of Engineering</h2>
      </div>

      <div className="box-container">
        <div className="box">
          <h3>Our Mission</h3>
          <p>The Corporate Relations Office (CRO) at MITAOE aims at providing its students a comprehensive platform for different curricular and cocurricular activities such as Student Internship Program (SIP), Semester Long Internship Program (SLIP), Industry Sponsored Projects, Student Development Programs like Seminars, Workshops, Guest Lecture Series, Industrial Visits, Add-On Courses etc.</p>
        </div>

        <div className="box">
          <h3>Industry Collaborations</h3>
          <p>MITAOE has international collaborations with some of the prestigious foreign universities such as the Manchester Metropolitan University, UK, the University of Dundee, UK, iCarnegie Inc., Pittsburgh, USA, Liverpool John Moores University, UK, the London School of Training, UK, the University of Aberdeen, UK, the University of Dayton, USA, NTU Singapore, NUS Singapore, Ben-Gurion University of The Negev Israel, and Tel Aviv University Israel.</p>
        </div>

        <div className="box">
          <h3>Training and Placement</h3>
          <p>The CRO is a unique entity at MITAOE campus which offers counseling and provides assistance to the students to encourage them for Skill Based Training, Various Internship Program, Recruitment Process, and Higher Education in renowned universities across the world.</p>
        </div>
      </div>

      <div className="paragraph-container">
        <p>To make MITAOE students more employable, experts from various industries are called for Academic audit and Product audit to check their required technical expertise as well as soft skills. MITAOE provides SIP to all students and SLIP to final year students during their eighth semester, which offers them the opportunity to work as full-time interns at various medium and large-scale industries. The corporate relations office also has connections with renowned Indian academic and research Institutions such as IITs, NITs, IIScs, CDAC, DIAT, DRDO, NCL, etc. Eminent Academicians and Researchers from these institutions are frequently invited to interact with students and faculty members to help in Curriculum Design and Development.</p>

        <p>If you have any queries related to training and placement, you can contact Prof. Anuradha Pawar, the Training and Placement Officer at anuradha.pawar@mitaoe.ac.in or mobile no: 7972261296. For corporate collaborations, you can contact Mr. Pramod Dastoorkar, the Head of Corporate Relations, or Mr. Jayant Patkar and Mr. Gangadhar Phad, the Corporate Relations Specialists, whose email ids and mobile numbers are mentioned above.</p>
      </div>
    </div>
    );
  }
}

export default CorporateRelation;