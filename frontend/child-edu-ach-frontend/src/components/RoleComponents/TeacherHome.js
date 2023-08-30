import React from 'react';
import '../../styles/TeacherHome.css';
import ToDoComponent from '../ToDoComponent.js';
import Schedule from '../Excercises/Schedule';
const TeacherHome = () => {
  return (
    <div className="teacher-home-container">
      <h1>Welcome, Teacher!</h1>
      <div className="content-container">
        <Schedule/>
        <ToDoComponent />

      </div>
    </div>
  );
};

export default TeacherHome;
