import React, { useState } from 'react';
import './FriendProfileMockups.css';

const FriendProfileMockups = () => {
  const [expandedSection, setExpandedSection] = useState(true);

  // Sample friend data
  const friendData = {
    name: 'Alex Chen',
    avatar: '/api/placeholder/120/120',
    lastContacted: '1 week ago',
    howMet: { emoji: '🏢', label: 'Work' },
    rhythm: { emoji: '🌙', label: 'Monthly' },
    vibes: [
      { emoji: '💬', label: 'Deep talks' },
      { emoji: '🎭', label: 'Creative partner' },
      { emoji: '🎯', label: 'Mentor/Mentee' }
    ],
    isInnerCircle: true
  };

  return (
    <div className="mockups-container">
      <div className="mockups-header">
        <h1>Friend Profile Design Options</h1>
        <p>Choose the design that best fits your app's aesthetic</p>
      </div>

      <div className="mockups-grid">

        {/* Option 1: Hero Section with Tags */}
        <div className="mockup-card">
          <div className="mockup-label">
            <span className="label-badge recommended">Recommended</span>
            <h2>Option 1: Hero Section with Tags</h2>
            <p>Tags prominently displayed below the name</p>
          </div>

          <div className="phone-mockup">
            <div className="phone-header">
              <span className="back-button">←</span>
              <span className="header-title">Profile</span>
              <span className="edit-button">Edit</span>
            </div>

            <div className="profile-content option-1">
              <div className="avatar-section">
                <div className="avatar-circle">
                  <div className="avatar-placeholder">AC</div>
                  {friendData.isInnerCircle && (
                    <div className="inner-circle-badge">⭐</div>
                  )}
                </div>
              </div>

              <h1 className="friend-name">{friendData.name}</h1>
              <p className="last-contacted">Last contacted {friendData.lastContacted}</p>

              <div className="tags-hero">
                <div className="tag-pill selected">
                  <span>{friendData.howMet.emoji}</span>
                  <span>{friendData.howMet.label}</span>
                </div>
                <div className="tag-pill selected">
                  <span>{friendData.rhythm.emoji}</span>
                  <span>{friendData.rhythm.label}</span>
                </div>
                {friendData.vibes.map((vibe, index) => (
                  <div key={index} className="tag-pill selected">
                    <span>{vibe.emoji}</span>
                    <span>{vibe.label}</span>
                  </div>
                ))}
              </div>

              <div className="divider"></div>

              <div className="section-preview">
                <p className="section-title">Recent Interactions</p>
                <div className="interaction-item">Coffee chat • 1 week ago</div>
                <div className="interaction-item">Quick text • 2 weeks ago</div>
              </div>
            </div>
          </div>
        </div>

        {/* Option 2: Collapsible Section */}
        <div className="mockup-card">
          <div className="mockup-label">
            <h2>Option 2: Collapsible "About" Section</h2>
            <p>Organized in an expandable section</p>
          </div>

          <div className="phone-mockup">
            <div className="phone-header">
              <span className="back-button">←</span>
              <span className="header-title">Profile</span>
              <span className="edit-button">Edit</span>
            </div>

            <div className="profile-content option-2">
              <div className="avatar-section">
                <div className="avatar-circle">
                  <div className="avatar-placeholder">AC</div>
                  {friendData.isInnerCircle && (
                    <div className="inner-circle-badge">⭐</div>
                  )}
                </div>
              </div>

              <h1 className="friend-name">{friendData.name}</h1>
              <p className="last-contacted">Last contacted {friendData.lastContacted}</p>

              <div className="collapsible-section">
                <div
                  className="section-header"
                  onClick={() => setExpandedSection(!expandedSection)}
                >
                  <span>About This Connection</span>
                  <span className="chevron">{expandedSection ? '▼' : '▶'}</span>
                </div>

                {expandedSection && (
                  <div className="section-content">
                    <div className="info-group">
                      <p className="info-label">How we met</p>
                      <div className="tag-pill-inline">
                        <span>{friendData.howMet.emoji}</span>
                        <span>{friendData.howMet.label}</span>
                      </div>
                    </div>

                    <div className="info-group">
                      <p className="info-label">Our vibe</p>
                      <div className="tags-inline">
                        {friendData.vibes.map((vibe, index) => (
                          <div key={index} className="tag-pill-inline">
                            <span>{vibe.emoji}</span>
                            <span>{vibe.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="info-group">
                      <p className="info-label">Connection rhythm</p>
                      <div className="tag-pill-inline">
                        <span>{friendData.rhythm.emoji}</span>
                        <span>{friendData.rhythm.label}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="divider"></div>

              <div className="section-preview">
                <p className="section-title">Recent Interactions</p>
                <div className="interaction-item">Coffee chat • 1 week ago</div>
                <div className="interaction-item">Quick text • 2 weeks ago</div>
              </div>
            </div>
          </div>
        </div>

        {/* Option 3: Subtle Inline */}
        <div className="mockup-card">
          <div className="mockup-label">
            <h2>Option 3: Subtle Inline Tags</h2>
            <p>Minimal integration, most subtle approach</p>
          </div>

          <div className="phone-mockup">
            <div className="phone-header">
              <span className="back-button">←</span>
              <span className="header-title">Profile</span>
              <span className="edit-button">Edit</span>
            </div>

            <div className="profile-content option-3">
              <div className="avatar-section">
                <div className="avatar-circle">
                  <div className="avatar-placeholder">AC</div>
                  {friendData.isInnerCircle && (
                    <div className="inner-circle-badge">⭐</div>
                  )}
                </div>
              </div>

              <h1 className="friend-name">{friendData.name}</h1>
              <p className="subtitle-tag">
                {friendData.howMet.emoji} {friendData.howMet.label} colleague
              </p>
              <p className="last-contacted">
                Last contacted {friendData.lastContacted}
              </p>
              <p className="rhythm-inline">
                Connects {friendData.rhythm.label.toLowerCase()} {friendData.rhythm.emoji}
              </p>

              <div className="divider"></div>

              <div className="vibes-footer">
                {friendData.vibes.map((vibe, index) => (
                  <span key={index} className="vibe-text">
                    {vibe.emoji} {vibe.label}
                    {index < friendData.vibes.length - 1 && ' • '}
                  </span>
                ))}
              </div>

              <div className="divider"></div>

              <div className="section-preview">
                <p className="section-title">Recent Interactions</p>
                <div className="interaction-item">Coffee chat • 1 week ago</div>
                <div className="interaction-item">Quick text • 2 weeks ago</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Comparison Guide */}
      <div className="comparison-section">
        <h2>Design Comparison</h2>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Aspect</th>
              <th>Option 1: Hero Tags</th>
              <th>Option 2: Collapsible</th>
              <th>Option 3: Inline</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Visual Weight</td>
              <td>Medium-High</td>
              <td>Low (collapsed), High (expanded)</td>
              <td>Very Low</td>
            </tr>
            <tr>
              <td>Scannability</td>
              <td>⭐⭐⭐ Excellent</td>
              <td>⭐⭐ Good</td>
              <td>⭐ Minimal</td>
            </tr>
            <tr>
              <td>Editability</td>
              <td>⭐⭐⭐ Pills feel tappable</td>
              <td>⭐⭐⭐ Clear "Edit" flow</td>
              <td>⭐⭐ Less obvious</td>
            </tr>
            <tr>
              <td>Consistency</td>
              <td>⭐⭐⭐ Matches onboarding</td>
              <td>⭐⭐ New pattern</td>
              <td>⭐⭐ iOS-native feel</td>
            </tr>
            <tr>
              <td>Best For</td>
              <td>Users who value context</td>
              <td>Power users, detailed info</td>
              <td>Minimalists, clean UI</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FriendProfileMockups;
