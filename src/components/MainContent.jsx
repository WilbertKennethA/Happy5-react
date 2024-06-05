import React from 'react';
import QuarterSection from './QuarterSection';

const MainContent = () => {
    const quarters = [
        { id: 1, period: 'Q1 2019', month: 'January - March', tasks: [{ title: 'Re-designed the zero-g doggie bags. No more spills!', progress: '64%'}, { title: 'Travel & Relocation Support', progress: '12%'}] },
        { id: 2, period: 'Q2 2019', month: 'April - June', tasks: [] },
        { id: 3, period: 'Q3 2019', month: 'July - September', tasks: [{ title: 'Bundle interplanetary analytics for improved transmission', progress: '90%'}] },
        { id: 4, period: 'Q4 2019', month: 'October - December', tasks: [{ title: 'Data Migration: Performance & Culture End Game', progress: '63%'}] }
    ];

    return (
        <main className="main-content">
            <h1>Product Roadmap</h1>
            <div className="quarters">
                {quarters.map(quarter => (
                    <QuarterSection key={quarter.id} period={quarter.period} month={quarter.month} tasks={quarter.tasks} />
                ))}
            </div>
        </main>
    );
};

export default MainContent;