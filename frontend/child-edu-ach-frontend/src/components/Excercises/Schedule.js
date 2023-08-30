import React, { useState, useEffect } from 'react';
import "../../styles/Schedule.css"
const Schedule = () => {  
    const [lessonData, setLessonData] = useState([]);
    const [currentDate, setCurrentDate] = useState('');
    const [currentWeekNumber, setCurrentWeekNumber] = useState('');
  
    useEffect(() => {
      // Simulate fetching data from a backend API
      // Replace this with your actual API call using fetch or Axios

      const fetchData = async () => {
        // Example fake data
        const fakeLessonData = [
          {
            group: 'Group A',
            schedule: ['Lesson 1A', 'Lesson 2A', 'Lesson 3A', 'No Lesson', 'Lesson 5A'],
          },
          {
            group: 'Group B',
            schedule: ['Lesson 1B', 'No Lesson', 'Lesson 3B', 'Lesson 4B', 'No Lesson'],
          },
          // Add more fake lesson data as needed
        ];
  
        setLessonData(fakeLessonData);
      };
  
      const today = new Date();
      setCurrentDate(today.toLocaleDateString());
  
      const startOfSeptember = new Date(today.getFullYear(), 8, 1);
      let weekNumber;
  
      if (today.getMonth() === 8 && today.getDate() >= 8) {
        weekNumber = 1;
      } else {
        const previousYear = today.getFullYear() - 1;
        const startOfPreviousSeptember = new Date(previousYear, 8, 1);
        const timeDiff = today - startOfPreviousSeptember;
        weekNumber = Math.floor(timeDiff / (7 * 24 * 60 * 60 * 1000)) + 2;
      }
  
      setCurrentWeekNumber(weekNumber);
    // Call the fetchData function
  fetchData();
    }, []);
  
    return (
      <div className="teaching-program-container">
        <h2>Teaching Program</h2>
        <div className="week-info">
          <p>Week number: {currentWeekNumber}</p>
          <p>Current Date: {currentDate}</p>
        </div>
        <div className="table-container">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Group</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
              </tr>
            </thead>
            <tbody>
              {lessonData.map((group, index) => (
                <tr key={index}>
                  <td>{group.group}</td>
                  {group.schedule.map((lesson, idx) => (
                    <td key={idx}>{lesson}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
    
 
    

export default Schedule;
