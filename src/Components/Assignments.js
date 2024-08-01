// src/components/Assignments.js

import React from 'react';

const Assignments = ({ assignments }) => {
  return (
    <div className="assignments">
      <h2>Assignments</h2>
      <div className="cards">
        {assignments.map((assignment, index) => (
          <div className="card" key={index}>
            <p><strong>Due Date:</strong> {assignment.duedate}</p>
            <p><strong>Year:</strong> {assignment.year}</p>
            <p><strong>Grading:</strong> {assignment.grading}</p>
            <p><strong>Subject:</strong> {assignment.subject}</p>
            <p><strong>Assignment Type:</strong> {assignment.assignmentType}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
