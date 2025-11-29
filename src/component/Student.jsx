import React from 'react';

const Student = ({ name, age, course }) => {
  return (
    <div className="student-card">
      <h2>Student Details</h2>
      <div className="student-info">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Age:</strong> {age}</p>
        <p><strong>Course:</strong> {course}</p>
      </div>
    </div>
  );
};

export default Student;
