import './PersonCard.css';
import React from 'react';

const PersonCard = (props) => {
    return (
    <div className="person-card">
        <div className="name">{props.name}</div>
        <div className="position">{props.position}</div>
    </div>
    );
};

export default PersonCard;