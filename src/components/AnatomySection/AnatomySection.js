import React from 'react';
import { healthData } from '../../data/HealthData';
import '../AnatomySection/AnatomySection.css';
import humanbody from "../../assets/image/human-body-frontal.jpg";
import HealthStatusCards from '../HealthStatusCards/HealthStatusCards';

function AnatomySection() {
  return (
    <div className="anatomy-container">
      <div className="anatomy-section">
        <div className="anatomy-image-container">
          <img src={humanbody} alt="Human anatomy" className="anatomy-image" />
          {healthData.map((item) => (
            <div
              key={item.id}
              className={`health-indicator ${item.status}`}
              style={{ top: `${item.position.top}%`, left: `${item.position.left}%` }}
            >
              <div className="indicator-dot"></div>
              <span className="indicator-text">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="health-cards-container">
        <HealthStatusCards />
      </div>
    </div>
  );
}

export default AnatomySection;