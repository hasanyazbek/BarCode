import './app.css'
import { useNavigate } from 'react-router-dom';
function ViewEventDetails(){
    const navigate = useNavigate();
    function handleclick(){
        navigate("/Events");

    }
    return(
<div className="event-container">
  <div className="event-header">
    <div style={{marginLeft:"1em" , color:"blue" , cursor:"pointer"}} onClick={handleclick}>X</div>
    <span className="event-status upcoming">Upcoming</span>
  </div>

  <div className="event-content">
    <h1>Tech Innovation Conference 2026</h1>
    <p className="event-description">
      Join industry leaders and innovators for a full-day conference exploring
      the latest trends in technology, AI, and digital transformation.
    </p>

    <div className="event-info">
      <div className="info-card">
        <h3>Date & Time</h3>
        <p>March 18, 2026<br />10:00 AM – 5:00 PM</p>
      </div>

      <div className="info-card">
        <h3>Location</h3>
        <p>Grand Convention Center<br />San Francisco, CA</p>
      </div>

      <div className="info-card">
        <h3>Organizer</h3>
        <p>FutureTech Group</p>
      </div>
    </div>

    <div className="agenda">
      <h2>Event Agenda</h2>
      <ul>
        <li>10:00 AM – Opening Keynote</li>
        <li>11:30 AM – Panel Discussion</li>
        <li>01:00 PM – Networking Lunch</li>
        <li>03:00 PM – Workshops</li>
        <li>05:00 PM – Closing Remarks</li>
      </ul>
    </div>

    <div className="event-actions">
      <button className="btn primary">Register Now</button>
      <button className="btn secondary">Add to Calendar</button>
    </div>
  </div>
</div>


    );
}

export default ViewEventDetails;