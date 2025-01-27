import React from 'react';
import './Footer.css'; // Ensure the CSS file exists and is correctly linked

const Footer = () => {
  return (
    <footer className="footer">
      {/* Header Section */}
      <div className="footer-header">
        <h2 className="footer-title">LOCATION</h2>
      </div>

      {/* Unified Location Content Section */}
      <div className="footer-container">
        {/* Footer Details and Map Combined */}
        <div className="location-content">
          {/* Details Section */}
          <div className="footer-details">
            <div className="venue-name">
              <strong>Fountain Grove Block 5</strong>
            </div>
            <div className="event-dates">
              <span role="img" aria-label="calendar">📅</span> Monday - Friday <br />
              <span>9:00 am - 5:00 pm</span>
            </div>
            <div className="event-address">
              <span role="img" aria-label="location">📍</span> 5 2nd Rd, Hyde Park <br />
            </div>
            <div className="phone-number">
              <span role="img" aria-label="phone">📞</span> +27 87 150 4628 <br />
              <small>Phone Number</small>
            </div>
          </div>

          {/* Map Section */}
          <div className="map-section">
            <div className="gmap-frame">
              <iframe
                title="Onuncapped Office Location"
                src="https://maps.google.com/maps?width=400&height=300&hl=en&q=Block%204,%20Fountain%20Grove,%205%202nd%20Rd,%20Hyde%20Park,%20Sandton,%202191+(Onuncapped)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="footer-contact">
        <h3>Contact Us</h3>
        <ul>
          <li><strong>General Enquiry:</strong> <a href="mailto:info@onuncapped.store">info@onuncapped.store</a></li>
          <li><strong>Sales:</strong> <a href="mailto:connectme@onuncapped.store">connectme@onuncapped.store</a></li>
          <li><strong>Technical Support:</strong> <a href="mailto:support@onuncapped.store">support@onuncapped.store</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
