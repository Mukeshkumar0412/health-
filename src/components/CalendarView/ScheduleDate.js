import React from 'react';
import { calendarData } from '../../data/calendarData';
import '../CalendarView/scheduleDate.css';

function ScheduleDate() {
  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <h2>October 2021</h2>
        <div className="calendar-nav">
          <button className="nav-button prev">‹</button>
          <button className="nav-button next">›</button>
        </div>
      </div>
      <div className="calendar-grid">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="calendar-day-header">
            {day}
          </div>
        ))}
        {calendarData.days.map((day) => (
          <div
            key={day.date}
            className={`calendar-day ${day.hasAppointment ? 'has-appointment' : ''} ${
              day.isCurrent ? 'current-day' : ''
            }`}
          >
            <span className="day-number">{day.date}</span>
            {day.appointments && (
              <div className="appointment-times">
                {day.appointments.map((time, index) => (
                  <span key={index} className="appointment-time">
                    {time}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="appointment-cards">
        <div className="appointment-card">
          <h3>Dentist</h3>
          <p>Dr. Sarah Johnson</p>
          <p>Today, 09:00 AM</p>
        </div>
        <div className="appointment-card">
          <h3>Physiotherapy Appointment</h3>
          <p>Dr. Michael Brown</p>
          <p>Today, 11:00 AM</p>
        </div>
      </div>
    </div>
  );
}

export default ScheduleDate;