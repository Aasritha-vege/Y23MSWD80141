// src/components/Timetable.js

import React from 'react';

const Timetable = ({ timetable }) => {
  return (
    <div className="timetable">
      <h2>Timetable</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Hours</th>
            <th>Rooms</th>
            <th>Sections</th>
          </tr>
        </thead>
        <tbody>
          {timetable.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.hours}</td>
              <td>{entry.rooms}</td>
              <td>{entry.sections}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;
