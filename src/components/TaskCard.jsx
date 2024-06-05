import React from 'react';
import '../TaskCard.css';

const TaskCard = ({ title, progress}) => {
    return (
        <div className="task-card">
            <h4>{title}</h4>
            <div className='icons'>
                <div className='progress'>
                    <img src="src/assets/weight.png" alt="weight" className='weight'/>
                    <h5>{progress}</h5>
                </div>
                <img src="src/assets/option.png" alt="option" className='option'/>
            </div>
        </div>
    );
};

export default TaskCard;