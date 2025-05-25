import React from 'react';
import '../SimpleAppointmentCard/SimpleAppointmentCard.css';

function SimpleAppointmentCard({ appointment }) {
  return (
    <div className="simple-appointment-card">
      <div className="card-icon">
        <appointment.icon />
      </div>
      <div className="card-content">
        <h3>{appointment.title}</h3>
        <p>{appointment.time}</p>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;