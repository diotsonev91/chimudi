import React from 'react';
import '../../styles/ExerciseComponent.css'; // Import your CSS styles for this component
import Card from '../Util/Card'; // Import the Card component
import instrumentKnowledgeImage from '../../assets/Notes.PNG';
import musicalExpressionImage from '../../assets/Notes.PNG';
import { useParams } from 'react-router-dom'; // Import useParams

const MusicKnowledgeExercise = () => {
    const { ageGroup } = useParams();
  return (
    <div className="exercise-container">
      <div className="exercise-buttons">
        <Card
          image={instrumentKnowledgeImage}
          width="250px"
          height="400px"
          text="Instrument Knowledge"
        
        />
        <Card
          image={musicalExpressionImage}
          width="250px"
          height="400px"
          text="Musical Expression"
        />
        {/* Add more Card components here */}
      </div>
      <p className="selected-age-group">Selected Age Group: {ageGroup}</p>
    </div>
  );
};

export default MusicKnowledgeExercise;
