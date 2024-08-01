import React from 'react';
import './Faculty.css';

const facultyDetails = [
  { id: 1, name: 'Gunti Surendra', designation: 'Professor', department: 'CSIT' },
  { id: 2, name: 'Joe Nithin Veguri', designation: 'Professor', department: 'AIDS' },
  { id: 3, name: 'Murali Mohan Vutukuru', designation: 'Professor', department: 'CSE' },
];




const Faculty = () => {
  return (
    <div className="faculty-container">
      <h1>Faculty Details</h1>
      <div className="card-container">
        {facultyDetails.map(faculty => (
          <div key={faculty.id} className="card">
            <h2>{faculty.name}</h2>
            <p><strong>Designation:</strong> {faculty.designation}</p>
            <p><strong>Department:</strong> {faculty.department}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faculty;
