import React, { useState } from 'react';
import './WovynFriendProfileMockups.css';

/**
 * Mockups based on actual Wovyn iOS app structure
 * Matches the SwiftUI implementation patterns in FriendProfileView.swift
 */

const WovynFriendProfileMockups = () => {
  const [option2Expanded, setOption2Expanded] = useState(false);

  // Sample friend data based on actual Friend.swift model
  const friendData = {
    name: 'Alex Chen',
    lastContactMessage: 'Last connected 1 week ago',
    avatar: null, // Will use WarmAvatarView style
    status: 'warning', // urgent, warning, good, neutral

    // Enrichment data
    howMet: 'Work', // From notes field "Met through: Work"
    tags: ['Deep talks', 'Creative partner', 'Mentor/Mentee'], // Vibes array
    frequency: 30, // Connection rhythm in days

    // Other data
    knots: [
      { text: 'Loves Ethiopian coffee', date: 'JAN 15' },
      { text: 'Working on a novel', date: 'DEC 28' }
    ],
    history: [
      { label: 'Coffee', type: 'coffee', date: 'JAN 20' },
      { label: 'Video call', type: 'video-call', date: 'JAN 10' }
    ]
  };

  return (
    <div className="wovyn-mockups-container">
      <div className="wovyn-mockups-header">
        <h1>Friend Profile Tag Display Options</h1>
        <p>Based on actual Wovyn iOS app SwiftUI implementation</p>
      </div>

      <div className="wovyn-mockups-grid">

        {/* Option 1: New "CONNECTION CONTEXT" Section */}
        <div className="wovyn-mockup-card">
          <div className="wovyn-mockup-label">
            <span className="wovyn-label-badge recommended">Recommended</span>
            <h2>Option 1: "Connection Context" Section</h2>
            <p>New section between profile header and Connection Rhythm</p>
            <div className="pros-cons">
              <div className="pros">
                <strong>Pros:</strong>
                <ul>
                  <li>Follows existing section pattern (uppercase header + white cards)</li>
                  <li>Groups all enrichment data logically</li>
                  <li>Editable in edit mode</li>
                  <li>Clear visual hierarchy</li>
                </ul>
              </div>
              <div className="cons">
                <strong>Cons:</strong>
                <ul>
                  <li>Adds vertical scroll length</li>
                  <li>Requires new section implementation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="wovyn-phone-mockup">
            <div className="wovyn-phone-header">
              <span className="wovyn-back-btn">←</span>
              <span className="wovyn-header-dots">⋯</span>
            </div>

            <div className="wovyn-profile-content">
              {/* Profile Header */}
              <div className="wovyn-profile-header">
                <div className="wovyn-avatar-wrapper">
                  <div className="wovyn-avatar">AC</div>
                  <div className="wovyn-status-dot warning"></div>
                </div>
                <div className="wovyn-profile-info">
                  <h1>Alex Chen</h1>
                  <p className="wovyn-last-contact">{friendData.lastContactMessage}</p>
                </div>
              </div>

              {/* NEW: Connection Context Section */}
              <div className="wovyn-section">
                <div className="wovyn-section-header">
                  <span>CONNECTION CONTEXT</span>
                </div>
                <div className="wovyn-context-grid">
                  <div className="wovyn-context-item">
                    <span className="wovyn-context-label">HOW WE MET</span>
                    <div className="wovyn-tag-pill">
                      <span className="wovyn-tag-emoji">🏢</span>
                      <span>{friendData.howMet}</span>
                    </div>
                  </div>
                  <div className="wovyn-context-item full-width">
                    <span className="wovyn-context-label">OUR VIBE</span>
                    <div className="wovyn-tag-row">
                      <div className="wovyn-tag-pill">
                        <span className="wovyn-tag-emoji">💬</span>
                        <span>Deep talks</span>
                      </div>
                      <div className="wovyn-tag-pill">
                        <span className="wovyn-tag-emoji">🎭</span>
                        <span>Creative partner</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Existing Connection Rhythm Section */}
              <div className="wovyn-section">
                <div className="wovyn-section-header">
                  <span>CONNECTION RHYTHM</span>
                  <span className="wovyn-rhythm-value">Monthly</span>
                </div>
                <div className="wovyn-slider-container">
                  <div className="wovyn-slider"></div>
                  <div className="wovyn-slider-labels">
                    <span>Daily</span>
                    <span>Monthly</span>
                    <span>Quarterly</span>
                  </div>
                </div>
              </div>

              {/* Memory Knots Preview */}
              <div className="wovyn-section">
                <div className="wovyn-section-header">
                  <span>MEMORY KNOTS</span>
                  <span className="wovyn-add-btn">+</span>
                </div>
                <div className="wovyn-knot-preview">
                  <p className="wovyn-knot-text">"Loves Ethiopian coffee"</p>
                  <span className="wovyn-knot-date">JAN 15</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Option 2: Inline Under Name */}
        <div className="wovyn-mockup-card">
          <div className="wovyn-mockup-label">
            <h2>Option 2: Inline Tags Under Name</h2>
            <p>Displays tags directly in profile header area</p>
            <div className="pros-cons">
              <div className="pros">
                <strong>Pros:</strong>
                <ul>
                  <li>Most prominent placement</li>
                  <li>Visible immediately without scrolling</li>
                  <li>Minimal code changes</li>
                  <li>Follows contact app patterns</li>
                </ul>
              </div>
              <div className="cons">
                <strong>Cons:</strong>
                <ul>
                  <li>Can make header cluttered with many tags</li>
                  <li>Less space for other header content</li>
                  <li>Harder to edit individually</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="wovyn-phone-mockup">
            <div className="wovyn-phone-header">
              <span className="wovyn-back-btn">←</span>
              <span className="wovyn-header-dots">⋯</span>
            </div>

            <div className="wovyn-profile-content">
              {/* Profile Header with Inline Tags */}
              <div className="wovyn-profile-header">
                <div className="wovyn-avatar-wrapper">
                  <div className="wovyn-avatar">AC</div>
                  <div className="wovyn-status-dot warning"></div>
                </div>
                <div className="wovyn-profile-info">
                  <h1>Alex Chen</h1>
                  <p className="wovyn-last-contact">{friendData.lastContactMessage}</p>

                  {/* Inline Tags */}
                  <div className="wovyn-inline-tags">
                    <span className="wovyn-inline-tag">🏢 Work</span>
                    <span className="wovyn-inline-tag-separator">•</span>
                    <span className="wovyn-inline-tag">💬 Deep talks</span>
                    <span className="wovyn-inline-tag-separator">•</span>
                    <span className="wovyn-inline-tag">🎭 Creative</span>
                  </div>
                </div>
              </div>

              {/* Existing sections */}
              <div className="wovyn-section">
                <div className="wovyn-section-header">
                  <span>CONNECTION RHYTHM</span>
                  <span className="wovyn-rhythm-value">Monthly</span>
                </div>
                <div className="wovyn-slider-container">
                  <div className="wovyn-slider"></div>
                  <div className="wovyn-slider-labels">
                    <span>Daily</span>
                    <span>Monthly</span>
                    <span>Quarterly</span>
                  </div>
                </div>
              </div>

              <div className="wovyn-section">
                <div className="wovyn-section-header">
                  <span>MEMORY KNOTS</span>
                  <span className="wovyn-add-btn">+</span>
                </div>
                <div className="wovyn-knot-preview">
                  <p className="wovyn-knot-text">"Loves Ethiopian coffee"</p>
                  <span className="wovyn-knot-date">JAN 15</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Option 3: Expandable Card */}
        <div className="wovyn-mockup-card">
          <div className="wovyn-mockup-label">
            <h2>Option 3: Collapsible Info Card</h2>
            <p>Compact by default, expands to show details</p>
            <div className="pros-cons">
              <div className="pros">
                <strong>Pros:</strong>
                <ul>
                  <li>Clean, minimal default state</li>
                  <li>User controls information density</li>
                  <li>Good for power users</li>
                  <li>Organized grouping</li>
                </ul>
              </div>
              <div className="cons">
                <strong>Cons:</strong>
                <ul>
                  <li>Hidden by default (discoverability issue)</li>
                  <li>Requires interaction to view</li>
                  <li>Not common in iOS patterns</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="wovyn-phone-mockup">
            <div className="wovyn-phone-header">
              <span className="wovyn-back-btn">←</span>
              <span className="wovyn-header-dots">⋯</span>
            </div>

            <div className="wovyn-profile-content">
              {/* Profile Header */}
              <div className="wovyn-profile-header">
                <div className="wovyn-avatar-wrapper">
                  <div className="wovyn-avatar">AC</div>
                  <div className="wovyn-status-dot warning"></div>
                </div>
                <div className="wovyn-profile-info">
                  <h1>Alex Chen</h1>
                  <p className="wovyn-last-contact">{friendData.lastContactMessage}</p>
                </div>
              </div>

              {/* Collapsible Card */}
              <div className="wovyn-collapsible-card" onClick={() => setOption2Expanded(!option2Expanded)}>
                <div className="wovyn-collapsible-header">
                  <span className="wovyn-collapsible-title">About This Connection</span>
                  <span className="wovyn-chevron">{option2Expanded ? '▼' : '▶'}</span>
                </div>

                {option2Expanded && (
                  <div className="wovyn-collapsible-content">
                    <div className="wovyn-info-row">
                      <span className="wovyn-info-label">How we met</span>
                      <div className="wovyn-tag-small">
                        <span>🏢</span>
                        <span>Work</span>
                      </div>
                    </div>
                    <div className="wovyn-divider"></div>
                    <div className="wovyn-info-row column">
                      <span className="wovyn-info-label">Our vibe</span>
                      <div className="wovyn-tag-row">
                        <div className="wovyn-tag-small">
                          <span>💬</span>
                          <span>Deep talks</span>
                        </div>
                        <div className="wovyn-tag-small">
                          <span>🎭</span>
                          <span>Creative partner</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Existing sections */}
              <div className="wovyn-section">
                <div className="wovyn-section-header">
                  <span>CONNECTION RHYTHM</span>
                  <span className="wovyn-rhythm-value">Monthly</span>
                </div>
                <div className="wovyn-slider-container">
                  <div className="wovyn-slider"></div>
                  <div className="wovyn-slider-labels">
                    <span>Daily</span>
                    <span>Monthly</span>
                    <span>Quarterly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Option 4: Subtle Badges */}
        <div className="wovyn-mockup-card">
          <div className="wovyn-mockup-label">
            <h2>Option 4: Minimal Badges Above Rhythm</h2>
            <p>Lightweight display with minimal visual weight</p>
            <div className="pros-cons">
              <div className="pros">
                <strong>Pros:</strong>
                <ul>
                  <li>Extremely subtle and clean</li>
                  <li>Doesn't disrupt existing flow</li>
                  <li>Easy to implement</li>
                  <li>iOS-native feel</li>
                </ul>
              </div>
              <div className="cons">
                <strong>Cons:</strong>
                <ul>
                  <li>Easy to miss/overlook</li>
                  <li>Limited space for multiple tags</li>
                  <li>Less scannable</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="wovyn-phone-mockup">
            <div className="wovyn-phone-header">
              <span className="wovyn-back-btn">←</span>
              <span className="wovyn-header-dots">⋯</span>
            </div>

            <div className="wovyn-profile-content">
              {/* Profile Header */}
              <div className="wovyn-profile-header">
                <div className="wovyn-avatar-wrapper">
                  <div className="wovyn-avatar">AC</div>
                  <div className="wovyn-status-dot warning"></div>
                </div>
                <div className="wovyn-profile-info">
                  <h1>Alex Chen</h1>
                  <p className="wovyn-last-contact">{friendData.lastContactMessage}</p>
                </div>
              </div>

              {/* Subtle badges between header and sections */}
              <div className="wovyn-subtle-badges">
                <div className="wovyn-badge">🏢 Work colleague</div>
                <div className="wovyn-badge-separator">•</div>
                <div className="wovyn-badge">💬 Deep talks</div>
              </div>

              {/* Existing sections */}
              <div className="wovyn-section">
                <div className="wovyn-section-header">
                  <span>CONNECTION RHYTHM</span>
                  <span className="wovyn-rhythm-value">Monthly</span>
                </div>
                <div className="wovyn-slider-container">
                  <div className="wovyn-slider"></div>
                  <div className="wovyn-slider-labels">
                    <span>Daily</span>
                    <span>Monthly</span>
                    <span>Quarterly</span>
                  </div>
                </div>
              </div>

              <div className="wovyn-section">
                <div className="wovyn-section-header">
                  <span>MEMORY KNOTS</span>
                  <span className="wovyn-add-btn">+</span>
                </div>
                <div className="wovyn-knot-preview">
                  <p className="wovyn-knot-text">"Loves Ethiopian coffee"</p>
                  <span className="wovyn-knot-date">JAN 15</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Implementation Recommendations */}
      <div className="wovyn-recommendations">
        <h2>Implementation Recommendations</h2>

        <div className="wovyn-rec-section">
          <h3>🎯 Recommended: Option 1 (Connection Context Section)</h3>
          <p>Best matches your existing SwiftUI patterns and provides clear information hierarchy.</p>

          <div className="code-suggestion">
            <h4>SwiftUI Implementation Approach:</h4>
            <ol>
              <li>Add new section after profile header, before "CONNECTION RHYTHM"</li>
              <li>Use existing section pattern: uppercase header + white background cards</li>
              <li>Parse "Met through:" from <code>friend.notes</code> field</li>
              <li>Display <code>friend.tags</code> array as pills with emojis</li>
              <li>In edit mode, allow tapping tags to change them (sheet modal)</li>
            </ol>
          </div>
        </div>

        <div className="wovyn-rec-section">
          <h3>💾 Data Model Suggestion</h3>
          <p>Consider adding dedicated fields to Friend.swift for better structure:</p>
          <pre>{`// Add to Friend struct
var howMet: String? // "Work", "School", "Family", etc.
var vibes: [String] // Rename from 'tags' for clarity

// Update EnrichedContactImportView.swift
friend.howMet = data.howMet
friend.vibes = Array(data.vibes)`}</pre>
        </div>

        <div className="wovyn-rec-section">
          <h3>🎨 Design Consistency Notes</h3>
          <ul>
            <li><strong>Colors:</strong> Use existing status colors (Stone, Amber, Rose, Emerald)</li>
            <li><strong>Typography:</strong> Times New Roman for labels, System font for tags</li>
            <li><strong>Spacing:</strong> Match existing 24px horizontal padding, 16px vertical spacing</li>
            <li><strong>Tags:</strong> Reuse EnrichmentTagButton styling (radius 24, padding 16h × 12v)</li>
            <li><strong>Animations:</strong> Spring (response: 0.3, dampingFraction: 0.8)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WovynFriendProfileMockups;
