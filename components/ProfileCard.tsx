import React from 'react';
import { Icon } from '@iconify/react';

const ProfileCard = () => {
  return (
    <div className="profile-card">
      {/* Ambient Background */}
      <div className="profile-card-ambient">
        <div className="profile-card-glow-red"></div>
        <div className="profile-card-glow-blue"></div>
        <div className="profile-card-noise"></div>
      </div>

      {/* Image Layer */}
      <div className="profile-card-image-wrapper">
        <img src="/images/bj-profile.png" alt="Bhavesh Jariwala" className="profile-card-image" />
        <div className="profile-card-image-overlay"></div>
      </div>

      {/* Header */}
      <div className="profile-card-header">
        <div className="profile-card-handle-badge">
          <div className="profile-card-status-dot"></div>
          <div className="profile-card-status-text">Based in India</div>
        </div>
        {/* <a href="#" className="profile-card-external-btn">
          <Icon icon="lucide:external-link" width="16" height="16" />
        </a> */}
      </div>

      {/* Footer */}
      <div className="profile-card-footer">
        <div className="profile-card-work-pill">
          {/* <Icon icon="lucide:sparkles" width="12" height="12" style={{ color: '#FF3CAC' }} /> */}
          <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#00FF9D", animation: "pulse 2s infinite" }} />
          <div className='profile-card-work-pill-text'>Open to Work</div>
        </div>

        <div className="profile-card-name-block desktop-only">
          <h1 className="profile-card-first-name">Bhavesh</h1>
          <h2 className="profile-card-last-name">Jariwala</h2>
          <div className="profile-card-role-line">
            <span className="profile-card-line-sep"></span>
            <p className="profile-card-role-text grad">Sr UI/UX & Product Designer</p>
            <span className="profile-card-line-sep profile-card-line-sep-rev"></span>
          </div>
        </div>

        <div className="profile-card-cta-container">
          <a href="/about" className="profile-card-cta-button">
            <div className="profile-card-shimmer"></div>
            <div className="profile-card-cta-left">
              <div className="profile-card-avatar-mini">BJ</div>
              <div className="profile-card-cta-text">
                <span className="profile-card-url-text">bhaveshjariwala.netlify.app</span>
                <span className="profile-card-sub-text">Learn More About Me</span>
              </div>
            </div>
            <div className="profile-card-arrow-icon-box">
              <Icon icon="lucide:arrow-right" width="16" height="16" />
            </div>
          </a>
        </div>
      </div>

      {/* Glass Reflection */}
      <div className="profile-card-glass-reflection"></div>
    </div>
  );
};

export default ProfileCard;
