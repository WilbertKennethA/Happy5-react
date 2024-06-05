import React from 'react';
import '../TaskCard.css';

const TaskCard = ({ title,}) => {
    return (
        <div className="task-card">
            <h4>{title}</h4>
        </div>
    );
};

export default TaskCard;