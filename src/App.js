// src/App.js

import React from 'react';
import './App.css';
import Header from './Components/Header';
import User from './Components/User';
import Footer from './Components/Footer';
import Faculty from './Components/Faculty';
import Courses from './Components/Courses';
import Students from './Components/Students';
import Timetable from './Components/Timetable';
import Assignments from './Components/Assignments';
import { timetable, assignments } from './Components/data';

function App() {
  return (
    <div className="App">
      <Header />
      <User name="ABC" type="Guest" />
      <Timetable timetable={timetable} />
      <Assignments assignments={assignments} />
      <Faculty />
      <Courses />
      <Students />
      <Footer />
    </div>
  );
}

export default App;
