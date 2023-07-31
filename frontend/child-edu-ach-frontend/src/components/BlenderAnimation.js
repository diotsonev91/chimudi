import React from 'react';
import animationVideo from '../assets/animation.mp4';
import './BlenderAnimation.css'; // Import the CSS file for styling

const BlenderAnimation = () => {
  return (
    <div className="animation-container">
      <video autoPlay loop muted className="animation-video">
        <source src={animationVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BlenderAnimation;
