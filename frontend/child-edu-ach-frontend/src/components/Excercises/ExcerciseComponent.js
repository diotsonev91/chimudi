import React, { useState } from 'react';
import '../../styles/ExerciseComponent.css'; // Import your CSS styles
import soundExercisesImage from '../../assets/Notes.PNG';
import musicKnowledgeImage from '../../assets/Notes.PNG';
import Card from '../Util/Card';
import { useNavigate } from 'react-router-dom';
const ExerciseComponent = () => {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState(''); // State to track selected age group
  const [ageGroupError, setAgeGroupError] = useState(false); // State to track age group error
  const navigate = useNavigate();
  const handleAgeGroupChange = (event) => {
    setSelectedAgeGroup(event.target.value);
    setAgeGroupError(false);
  };

  const handleMusicKnowledgeClick = () => {
    if(selectedAgeGroup){
    navigate(`/music-knowledge/${selectedAgeGroup}`);
    }
    else{
        setAgeGroupError(true);
    }
  };

  const handleSoundExercises = () => {
    if(selectedAgeGroup){
    navigate(`/sound-knowledge/${selectedAgeGroup}`);
    }
    else{
        setAgeGroupError(true);
    }
  };

  return (
    <div className="exercise-container">
      <div className="age-group-dropdown">
      <label htmlFor="age-group">Choose Age Group: </label>
      <select id="age-group" value={selectedAgeGroup} onChange={handleAgeGroupChange}
      className={ageGroupError ? 'error' : ''} >
        <option value="">Select</option>
        <option value="1">Age Group 1</option>
        <option value="2">Age Group 2</option>
        <option value="3">Age Group 3</option>
        <option value="4">Age Group 4</option>
      </select>
      {ageGroupError && <p className="error-message">Select an age group</p>}
      </div>
      <div className="exercise-buttons">
      <Card
          image={soundExercisesImage}
          width="250px"
          height="400px"
          text="Sound Exercises"
          photoBackground="path_to_your_photo_background_image.jpg"
          onClick={handleSoundExercises}
        />
        <Card
          image={musicKnowledgeImage}
          width="250px"
          height="400px"
          text="Music Knowledge Exercises"
          photoBackground="path_to_your_photo_background_image.jpg"
          onClick={handleMusicKnowledgeClick}
        />
    </div>
    </div>
  );
};

export default ExerciseComponent;
