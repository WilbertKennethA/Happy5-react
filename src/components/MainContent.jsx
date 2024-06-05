import React from 'react';

const MainContent = () => {
    const quarters = [
        { id: 1, period: 'Q1 2019', tasks: [{ title: 'Re-designed the zero-g doggie bags. No more spills!'}, { title: 'Travel & Relocation Support'}] },
        { id: 2, period: 'Q2 2019', tasks: [] },
        { id: 3, period: 'Q3 2019', tasks: [{ title: 'Bundle interplanetary analytics for improved transmission'}] },
        { id: 4, period: 'Q4 2019', tasks: [{ title: 'Data Migration: Performance & Culture End Game'}] }
    ];

    return (
    <main className="main-content">
      <h1>Product Roadmap</h1>
      <div className="quarters">
      {quarters.map(quarter => (
        <div key={quarter.id} className="quarter">
            <h2>{quarter.period}</h2>
            {quarter.tasks.length > 0 && (
            <ul>
                {quarter.tasks.map(task => (
                <li key={task.title}>
                    {task.title}
                </li>
                ))}
      </ul>
    )}
  </div>
))}
      </div>
     </main>
    );
};

export default MainContent;