import React from 'react';
import DashboardOverview from '../DashboardOverview/DashboardOverview';
import AnatomySection from '../AnatomySection/AnatomySection';
import ScheduleDate from '../CalendarView/ScheduleDate';
import UpcomingSchedule from '../UpcomingSchedule/UpcomingSchedule';
import ActivityFeed from '../ActivityFeed/ActivityFeed';
import '../DashboardMainContent/DashboardMainContent.css';

function DashboardMainContent() {
  return (
    <div className="dashboard-main">
      
      <div className="dashboard-grid">
        <div className="dashboard-left">
          <AnatomySection />
          <DashboardOverview />
        </div>
        <div className="dashboard-right">
          <ScheduleDate />
          <UpcomingSchedule />
          
        </div>
      </div>
      <ActivityFeed />
    </div>
  );
}

export default DashboardMainContent;