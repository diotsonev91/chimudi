import React from 'react';
import './Card.css'; // Import your CSS styles for the card

const Card = ({ image, width, height, text , onClick}) => {
  const cardStyle = {
    backgroundImage: `url(${image})`,
    width: width,
    height: height,
  };

  return (
    <div className="exercise-card" style={cardStyle}  onClick={onClick}>
      <div className="card-content">
        <div className="exercise-title">{text}</div>
      </div>
    </div>
  );
};

export default Card;
