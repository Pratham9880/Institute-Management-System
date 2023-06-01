import React from 'react';
import DownloadBCss from '../Dropdowns/DownloadB.css'

class DownloadB extends React.Component {
  render() {
    return (
      <div className="container">
      <h1>Bachelor of Technology (B.Tech) Admission</h1>
      <p>Our college offers the following B.Tech branches:</p>
      <table>
        <thead>
          <tr>
            <th>Branch</th>
            <th>Intake</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chemical Engineering</td>
            <td>60</td>
          </tr>
          <tr>
            <td>Civil Engineering</td>
            <td>60</td>
          </tr>
          <tr>
            <td>Computer Engineering</td>
            <td>180</td>
          </tr>
          <tr>
            <td>Electronics and Telecommunication Engineering</td>
            <td>120</td>
          </tr>
          <tr>
            <td>Electronics Engineering</td>
            <td>60</td>
          </tr>
          <tr>
            <td>Mechanical Engineering</td>
            <td>180</td>
          </tr>
        </tbody>
      </table>
      <p>To be eligible for first year admission, candidates must meet the following criteria:</p>
      <ul>
        <li>For Maharashtra State Candidature Candidate:</li>
        <ul>
          <li>The Candidate should be an Indian National</li>
          <li>Passed HSC or its equivalent examination with subjects Physics and Chemistry as compulsory subjects along with one of the Mathematics or Biology and obtained at least 45% marks (at least 40 % marks in case of candidates of Backward Class categories, Economically Weaker Section and Persons with Disability category belonging to Maharashtra State) in the above subjects taken together;</li>
          <li>OR Passed Diploma Course in Pharmacy from institutes affiliated to State Board and having approval of competent central authority and State Government and obtained at least 45% marks (at least 40 % marks in case of candidates of Backward Class categories, Economically Weaker Section and Persons with Disability category belonging to Maharashtra State);</li>
          <li>The candidate should have appeared in all the subjects and obtained non zero score in the CET conducted by the Competent Authority.</li>
        </ul>
        <li>For All India Candidature Candidates:</li>
        <ul>
          <li>The candidate should be an Indian National</li>
          <li>Passed HSC or its equivalent examination with subjects Physics and Chemistry as compulsory subjects along with one of the Mathematics or Biology and obtained at least 45% marks (at least 40 % marks in case of candidates of Backward Class categories, Economically Weaker Section and Persons with Disability category belonging to Maharashtra State) in the above subjects taken together;</li>
          <li>OR Passed Diploma Course in Pharmacy from institutes affiliated to State Board and having approval of competent central authority and State Government and obtained at least 45 % marks (at least 40 % marks in case of candidates of Backward Class categories, Economically Weaker Section and Persons with Disability category belonging to Maharashtra State);</li>
          <li>Passed Diploma Course in Pharmacy from institutes affiliated to State Board and having approval of competent central authority and State Government and obtained at least 45 % marks (at least 40 % marks in case of candidates of Backward Class categories, Economically Weaker Section and Persons with Disability category belonging to Maharashtra State);</li>
        </ul>
      </ul>
    </div>

     
    );
  }
}

export default DownloadB;
