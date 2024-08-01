import React from 'react';
import './Students.css';

const studentDetails = [
  { id: 2400040169, name: 'Anna Taylor', branch: 'ECE', year: '1st Year' },
  { id: 2300080321, name: 'Jane Smith', branch: 'AIDS', year: '2nd Year' },
  { id: 2300050675, name: 'David Brown', branch: 'EEE', year: '2nd Year' },
  { id: 2200090183, name: 'John Doe', branch: 'CSIT', year: '3rd Year' },
  { id: 2100030278, name: 'Sam Wilson', branch: 'CSE', year: '4th Year' },
  
];

const Students = () => {
  return (
    <div className="student-container">
      <h1>Student Details</h1>
      <div className="card-container">
        {studentDetails.map(student => (
          <div key={student.id} className="student-card">
            <p><strong>ID:</strong> {student.id}</p>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Branch:</strong> {student.branch}</p>
            <p><strong>Year:</strong> {student.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Students;
