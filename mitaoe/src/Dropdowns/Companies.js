import React from 'react';
class Companies extends React.Component {
  render() {
    return (
      <div>
      <h2>Placements at MIT AoE - Overview</h2>
      <p>There is no doubt that our students and alumni have been working with some of the finest global companies...</p>
      <table>
        <thead>
          <tr>
            <th>Particulars</th>
            <th>2020-2021 Batch</th>
            <th>2019-2020 Batch</th>
            <th>2018-2019 Batch</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Companies visited</td>
            <td>54</td>
            <td>111</td>
            <td>96</td>
          </tr>
          <tr>
            <td>Total No. of students Placed</td>
            <td>250 (ongoing)</td>
            <td>445 (ongoing)</td>
            <td>280</td>
          </tr>
          <tr>
            <td>Highest Salary (CTC)</td>
            <td>12.00 Lacs p.a</td>
            <td>10.75 Lacs p.a</td>
            <td>10.81 Lacs p.a</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    );
  }
}

export default Companies;