import React from 'react';
import { healthData } from '../../data/HealthData';
import { upcomingAppointments } from '../../data/appointments';
import { FiActivity, FiHeart, FiEye, FiCheckCircle } from 'react-icons/fi';
import '../DashboardOverview/DashboardOverview.css';

const DashboardOverview = () => {
  const todayAppointments = upcomingAppointments.filter(
    appt => appt.day === 'Today'
  );

  return (
    <div className="dashboard-overview">
      <div className="overview-header">
        <h2>Health Overview</h2>
        <div className="date-selector">
          <span>October 15, 2021</span>
          <button className="date-arrow">▼</button>
        </div>
      </div>

      <div className="overview-grid">
        {/* Health Stats Cards */}
        <div className="stats-card">
          <div className="stats-icon heart">
            <FiHeart />
          </div>
          <div className="stats-content">
            <h3>Heart Rate</h3>
            <p className="stats-value">72 <span>bpm</span></p>
            <p className="stats-status healthy">Normal</p>
          </div>
        </div>

        <div className="stats-card">
          <div className="stats-icon activity">
            <FiActivity />
          </div>
          <div className="stats-content">
            <h3>Activity</h3>
            <p className="stats-value">8,240 <span>steps</span></p>
            <p className="stats-status warning">65% of goal</p>
          </div>
        </div>

        <div className="stats-card">
          <div className="stats-icon sleep">
            <FiEye />
          </div>
          <div className="stats-content">
            <h3>Sleep</h3>
            <p className="stats-value">7.5 <span>hours</span></p>
            <p className="stats-status healthy">Good</p>
          </div>
        </div>

        <div className="stats-card">
          <div className="stats-icon checkup">
            <FiCheckCircle />
          </div>
          <div className="stats-content">
            <h3>Last Checkup</h3>
            <p className="stats-value">Oct 12</p>
            <p className="stats-status healthy">Completed</p>
          </div>
        </div>

        
        <div className="today-appointments">
          <h3>Today's Appointments</h3>
          {todayAppointments.length > 0 ? (
            todayAppointments.map(appt => (
              <div key={appt.id} className="appointment-item">
                <div className="appointment-time">{appt.time}</div>
                <div className="appointment-details">
                  <h4>{appt.title}</h4>
                  <p>With {appt.doctor}</p>
                </div>
                <div className={`appointment-status ${appt.status}`}>
                  {appt.status}
                </div>
              </div>
            ))
          ) : (
            <p className="no-appointments">No appointments scheduled for today</p>
          )}
        </div>

        {/* Health Indicators */}
        <div className="health-indicators">
          <h3>Health Indicators</h3>
          <div className="indicators-grid">
            {healthData.map(indicator => (
              <div key={indicator.id} className={`indicator-card ${indicator.status}`}>
                <h4>{indicator.name}</h4>
                <p>{indicator.value}</p>
                <div className="indicator-bar">
                  <div 
                    className="indicator-progress"
                    style={{ width: `${indicator.progress}%` }}
                  ></div>
                </div>
                <span className="indicator-date">{indicator.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;