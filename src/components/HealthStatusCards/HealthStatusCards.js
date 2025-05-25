import { healthData } from '../../data/HealthData';
import '../HealthStatusCards/HealthStatusCards.css';

function HealthStatusCards() {
  return (
    <div className="health-status-cards">
      {healthData.map((item) => (
        <div key={item.id} className={`health-card ${item.status}`}>
          <div className="card-header">
            <h3>{item.name}</h3>
            <span className="status-badge">{item.status}</span>
          </div>
          <p className="card-date">{item.date}</p>
          <p className="card-description">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;