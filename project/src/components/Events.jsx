
import "./app.css"
import { useNavigate, Outlet } from "react-router-dom";

function Events(){
    const navigate =useNavigate();
    function handleclick(e){
        navigate("ViewEventDetails");
    }
    return(


<div className="events-container">
    <h2>Upcoming Events</h2>

 <Outlet />
    <div className="events-grid">

        <div className="event-card">
            <div className="event-date">
                <span className="day">12</span>
                <span className="month">MAR</span>
            </div>
            <div className="event-details">
                <h3>Product Launch Webinar</h3>
                <p className="event-time">🕒 10:00 AM – 12:00 PM</p>
                <p className="event-location">📍 Online (Zoom)</p>
                <p className="event-desc">
                    Join us for the official launch of our new product and live Q&A session.
                </p>
                <button className="event-btn" onClick={handleclick}>View Details</button>
            </div>
        </div>

        <div className="event-card">
            <div className="event-date">
                <span className="day">25</span>
                <span className="month">APR</span>
            </div>
            <div className="event-details">
                <h3>Annual Team Meetup</h3>
                <p className="event-time">🕒 9:00 AM – 5:00 PM</p>
                <p className="event-location">📍 New York Office</p>
                <p className="event-desc">
                    A full-day event with workshops, team bonding, and celebrations.
                </p>
                <button className="event-btn" onClick={handleclick}>View Details</button>
            </div>

        </div>
             <div className="event-card">
            <div className="event-date">
                <span className="day">25</span>
                <span className="month">APR</span>
            </div>
            <div className="event-details">
                <h3>Annual Team Meetup</h3>
                <p className="event-time">🕒 9:00 AM – 5:00 PM</p>
                <p className="event-location">📍 New York Office</p>
                <p className="event-desc">
                    A full-day event with workshops, team bonding, and celebrations.
                </p>
                <button className="event-btn" onClick={handleclick}>View Details</button>
            </div>

        </div>


             <div className="event-card">
            <div className="event-date">
                <span className="day">25</span>
                <span className="month">APR</span>
            </div>
            <div className="event-details">
                <h3>Annual Team Meetup</h3>
                <p className="event-time">🕒 9:00 AM – 5:00 PM</p>
                <p className="event-location">📍 New York Office</p>
                <p className="event-desc">
                    A full-day event with workshops, team bonding, and celebrations.
                </p>
                <button className="event-btn" onClick={handleclick}>View Details</button>
            </div>

        </div>


             <div className="event-card">
            <div className="event-date">
                <span className="day">25</span>
                <span className="month">APR</span>
            </div>
            <div className="event-details">
                <h3>Annual Team Meetup</h3>
                <p className="event-time">🕒 9:00 AM – 5:00 PM</p>
                <p className="event-location">📍 New York Office</p>
                <p className="event-desc">
                    A full-day event with workshops, team bonding, and celebrations.
                </p>
                <button className="event-btn" onClick={handleclick}>View Details</button>
            </div>

        </div>
             <div className="event-card">
            <div className="event-date">
                <span className="day">25</span>
                <span className="month">APR</span>
            </div>
            <div className="event-details">
                <h3>Annual Team Meetup</h3>
                <p className="event-time">🕒 9:00 AM – 5:00 PM</p>
                <p className="event-location">📍 New York Office</p>
                <p className="event-desc">
                    A full-day event with workshops, team bonding, and celebrations.
                </p>
                <button className="event-btn" onClick={handleclick}>View Details</button>
            </div>

        </div>
             <div className="event-card">
            <div className="event-date">
                <span className="day">25</span>
                <span className="month">APR</span>
            </div>
            <div className="event-details">
                <h3>Annual Team Meetup</h3>
                <p className="event-time">🕒 9:00 AM – 5:00 PM</p>
                <p className="event-location">📍 New York Office</p>
                <p className="event-desc">
                    A full-day event with workshops, team bonding, and celebrations.
                </p>
                <button className="event-btn" onClick={handleclick}>View Details</button>
            </div>

        </div>
             <div className="event-card">
            <div className="event-date">
                <span className="day">25</span>
                <span className="month">APR</span>
            </div>
            <div className="event-details">
                <h3>Annual Team Meetup</h3>
                <p className="event-time">🕒 9:00 AM – 5:00 PM</p>
                <p className="event-location">📍 New York Office</p>
                <p className="event-desc">
                    A full-day event with workshops, team bonding, and celebrations.
                </p>
                <button className="event-btn" onClick={handleclick}>View Details</button>
            </div>

        </div>
             <div className="event-card">
            <div className="event-date">
                <span className="day">25</span>
                <span className="month">APR</span>
            </div>
            <div className="event-details">
                <h3>Annual Team Meetup</h3>
                <p className="event-time">🕒 9:00 AM – 5:00 PM</p>
                <p className="event-location">📍 New York Office</p>
                <p className="event-desc">
                    A full-day event with workshops, team bonding, and celebrations.
                </p>
                <button className="event-btn" onClick={handleclick}>View Details</button>
            </div>

        </div>

    </div>
</div>

    );
}

export default Events;