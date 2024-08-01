import React from 'react';
import './Courses.css';

const courseDetails = [
  { id: 1, name: 'Artificial Intelligence and Machine Learning', code: '23AD2001A' },
  { id: 2, name: 'Mern Stack Web Development', code: '23CS06EF' },
  { id: 3, name: 'Data Science and Statistics', code: '	23SC3201' },
];

const Courses = () => {
  return (
    <div className="course-container">
      <h1>Course Details</h1>
      <div className="card-container">
        {courseDetails.map(course => (
          <div key={course.id} className="card">
            <h2>{course.name}</h2>
            <p><strong>Course Code:</strong> {course.code}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
