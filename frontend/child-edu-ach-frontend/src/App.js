import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import TeacherHome from './components/RoleComponents/TeacherHome';
import SignInComponent from './components/SignInComponent';
import MusicComponent from './components/Excercises/MusicComponent';
import Results from './components/ChildComponents/Results';
import ExerciseComponent from './components/Excercises/ExcerciseComponent';
import MusicKnowledgeExercise from './components/Excercises/MusicKnowledgeExcercise';
const diagnosticData = [
  {
    id:0,
    name: 'Alice',
    age: 7,
    core1: 'very well sing',
    dateOfDiagnosis: '2023-08-15',
    achivementScore: 5,
  },
  {
    id:1,
    name: 'Bob',
    age: 5,
    core1: 'well sing',
    dateOfDiagnosis: '2023-07-20',
    achivementScore: 4,
  },
  // Add more data entries as needed
];



function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Router>
        <NavigationBar setShowSignIn={setShowSignIn} setShowSignUp={setShowSignUp} setIsLoggedIn= {setIsLoggedIn} isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Header showSignIn={showSignIn} showSignUp={showSignUp}/>} />
          <Route path="/teacher-home" element={<TeacherHome />} />
          <Route path="/sign-in" element={<SignInComponent />} />
          <Route path="/exercises" element={<ExerciseComponent />} />
          <Route path="/results" element={<Results diagnosticData={diagnosticData} />} />
          <Route path="/results/:childId" element={<Results diagnosticData={diagnosticData} />} />   
          <Route path="/music-knowledge/:ageGroup" element={<MusicKnowledgeExercise />} />
          <Route path="/sound-knowledge/:ageGroup" element={<MusicComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
