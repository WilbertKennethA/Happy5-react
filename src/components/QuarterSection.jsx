import React from 'react';
import TaskCard from './TaskCard';

const QuarterSection = ({ period, month, tasks }) => {
    return (
        <div className="quarter-section">
            <div className='period'>
                <h2>{period}</h2>
                <h3>{month}</h3>
                {tasks.length === 0 ? <p>No Task Available</p> : tasks.map((task, index) => <TaskCard key={index} title={task.title} progress={task.progress}/>)}
            </div>
            <button className='button'>
                <img src="src/assets/plus.png" alt="plus" className="plus"/>
                <h5>Create new task</h5>
            </button>
        </div>
    );
};

export default QuarterSection;