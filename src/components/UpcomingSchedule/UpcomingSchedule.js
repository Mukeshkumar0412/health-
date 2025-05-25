import React from 'react';
import SimpleAppointmentCard from '../SimpleAppointmentCard/SimpleAppointmentCard';
import { upcomingAppointments } from '../../data/appointments';
import '../UpcomingSchedule/UpcomingSchedule.css';

function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
      <h2>The Upcoming Schedule</h2>
      <div className="schedule-days">
        <div className="schedule-day">
          <h3>On Thursday</h3>
          {upcomingAppointments
            .filter((appt) => appt.day === 'Thursday')
            .map((appt) => (
              <SimpleAppointmentCard key={appt.id} appointment={appt} />
            ))}
        </div>
        <div className="schedule-day">
          <h3>On Saturday</h3>
          {upcomingAppointments
            .filter((appt) => appt.day === 'Saturday')
            .map((appt) => (
              <SimpleAppointmentCard key={appt.id} appointment={appt} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default UpcomingSchedule;