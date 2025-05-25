import React from 'react';
import './ActivityFeed.css';

function ActivityFeed() {
  const activityData = [
    { day: 'Mon', value: 30 },
    { day: 'Tue', value: 60 },
    { day: 'Wed', value: 45 },
    { day: 'Thu', value: 80 },
    { day: 'Fri', value: 20 },
    { day: 'Sat', value: 50 },
    { day: 'Sun', value: 70 }
  ];

  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h2 className="activity-title">Activity</h2>
        <p className="activity-summary">3 appointments on this week</p>
      </div>
      <div className="activity-chart">
        <div className="chart-bars">
          {activityData.map((item, index) => (
            <div 
              key={index}
              className="chart-bar"
              style={{ height: `${item.value}%` }}
              data-value={item.value}
            ></div>
          ))}
        </div>
        <div className="chart-labels">
          {activityData.map((item, index) => (
            <span key={index}>{item.day}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ActivityFeed;