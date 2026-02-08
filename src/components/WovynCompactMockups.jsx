import React, { useState } from 'react';
import './WovynCompactMockups.css';

/**
 * Compact mockups that minimize vertical scrolling
 * Based on actual Wovyn iOS app - NO extra sections
 */

const WovynCompactMockups = () => {
  const friendData = {
    name: 'Alex Chen',
    lastContactMessage: 'Last connected 1 week ago',
    howMet: 'Work',
    tags: ['Deep talks', 'Creative partner'],
    frequency: 30,
  };

  return (
    <div className="compact-mockups-container">
      <div className="compact-mockups-header">
        <h1>Compact Profile Tag Options</h1>
        <p>No extra scrolling - uses existing space efficiently</p>
      </div>

      <div className="compact-mockups-grid">

        {/* Option 1: Avatar Badge System */}
        <div className="compact-mockup-card">
          <div className="compact-mockup-label">
            <span className="compact-label-badge best">Best for Minimal</span>
            <h2>Option 1: Avatar Badges</h2>
            <p>Tiny emoji badges on/near the avatar - zero vertical space</p>
            <div className="compact-pros-cons">
              <div className="compact-pros">
                ✅ No scrolling impact<br/>
                ✅ Always visible<br/>
                ✅ Playful, warm aesthetic<br/>
                ✅ Easiest implementation
              </div>
              <div className="compact-cons">
                ❌ Limited information<br/>
                ❌ May feel cluttered on avatar
              </div>
            </div>
          </div>

          <div className="compact-phone-mockup">
            <div className="compact-phone-header">
              <span className="compact-back-btn">←</span>
              <span className="compact-header-dots">⋯</span>
            </div>

            <div className="compact-profile-content">
              {/* Profile Header with Avatar Badges */}
              <div className="compact-profile-header">
                <div className="compact-avatar-wrapper">
                  <div className="compact-avatar">AC</div>
                  <div className="compact-status-dot warning"></div>
                  {/* Emoji badges around avatar */}
                  <div className="compact-emoji-badge top-left">🏢</div>
                  <div className="compact-emoji-badge top-right">💬</div>
                  <div className="compact-emoji-badge bottom-left">🎭</div>
                </div>
                <div className="compact-profile-info">
                  <h1>Alex Chen</h1>
                  <p className="compact-last-contact">{friendData.lastContactMessage}</p>
                </div>
              </div>

              {/* Existing sections unchanged */}
              <div className="compact-section">
                <div className="compact-section-header">
                  <span>CONNECTION RHYTHM</span>
                  <span className="compact-rhythm-value">Monthly</span>
                </div>
              </div>

              <div className="compact-section">
                <div className="compact-section-header">
                  <span>MEMORY KNOTS</span>
                  <span className="compact-add-btn">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Option 2: Enhanced Last Contact Line */}
        <div className="compact-mockup-card">
          <div className="compact-mockup-label">
            <span className="compact-label-badge recommended">Recommended</span>
            <h2>Option 2: Enhanced Subtitle</h2>
            <p>Add one line under name with compact pills - minimal space</p>
            <div className="compact-pros-cons">
              <div className="compact-pros">
                ✅ Only ~30px vertical space<br/>
                ✅ Clear, readable<br/>
                ✅ Follows iOS patterns<br/>
                ✅ Scannable at a glance
              </div>
              <div className="compact-cons">
                ❌ Limited to 2-3 tags<br/>
                ❌ Adds one line to header
              </div>
            </div>
          </div>

          <div className="compact-phone-mockup">
            <div className="compact-phone-header">
              <span className="compact-back-btn">←</span>
              <span className="compact-header-dots">⋯</span>
            </div>

            <div className="compact-profile-content">
              {/* Profile Header with Compact Pills */}
              <div className="compact-profile-header">
                <div className="compact-avatar-wrapper">
                  <div className="compact-avatar">AC</div>
                  <div className="compact-status-dot warning"></div>
                </div>
                <div className="compact-profile-info">
                  <h1>Alex Chen</h1>
                  {/* Enhanced subtitle line */}
                  <div className="compact-pill-line">
                    <div className="compact-micro-pill">🏢 Work</div>
                    <div className="compact-micro-pill">💬 Deep talks</div>
                  </div>
                  <p className="compact-last-contact">{friendData.lastContactMessage}</p>
                </div>
              </div>

              {/* Existing sections unchanged */}
              <div className="compact-section">
                <div className="compact-section-header">
                  <span>CONNECTION RHYTHM</span>
                  <span className="compact-rhythm-value">Monthly</span>
                </div>
              </div>

              <div className="compact-section">
                <div className="compact-section-header">
                  <span>MEMORY KNOTS</span>
                  <span className="compact-add-btn">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Option 3: Rhythm Section Header Enhancement */}
        <div className="compact-mockup-card">
          <div className="compact-mockup-label">
            <h2>Option 3: Rhythm Header Enhancement</h2>
            <p>Add tags to Connection Rhythm section header - reuses space</p>
            <div className="compact-pros-cons">
              <div className="compact-pros">
                ✅ Zero extra vertical space<br/>
                ✅ Groups relationship metadata<br/>
                ✅ Contextually related<br/>
                ✅ Clean header area
              </div>
              <div className="compact-cons">
                ❌ Tags below the fold initially<br/>
                ❌ May seem disconnected
              </div>
            </div>
          </div>

          <div className="compact-phone-mockup">
            <div className="compact-phone-header">
              <span className="compact-back-btn">←</span>
              <span className="compact-header-dots">⋯</span>
            </div>

            <div className="compact-profile-content">
              {/* Profile Header - unchanged */}
              <div className="compact-profile-header">
                <div className="compact-avatar-wrapper">
                  <div className="compact-avatar">AC</div>
                  <div className="compact-status-dot warning"></div>
                </div>
                <div className="compact-profile-info">
                  <h1>Alex Chen</h1>
                  <p className="compact-last-contact">{friendData.lastContactMessage}</p>
                </div>
              </div>

              {/* Enhanced Rhythm Section */}
              <div className="compact-section">
                <div className="compact-section-header">
                  <span>CONNECTION RHYTHM</span>
                  <span className="compact-rhythm-value">Monthly</span>
                </div>
                {/* Tags inside rhythm section */}
                <div className="compact-context-row">
                  <span className="compact-context-text">🏢 Work • 💬 Deep talks • 🎭 Creative</span>
                </div>
              </div>

              <div className="compact-section">
                <div className="compact-section-header">
                  <span>MEMORY KNOTS</span>
                  <span className="compact-add-btn">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Option 4: Floating Tag Bar */}
        <div className="compact-mockup-card">
          <div className="compact-mockup-label">
            <h2>Option 4: Horizontal Scroll Bar</h2>
            <p>Compact horizontal scrolling pill bar under header</p>
            <div className="compact-pros-cons">
              <div className="compact-pros">
                ✅ ~40px vertical space total<br/>
                ✅ Supports many tags<br/>
                ✅ iOS-native pattern<br/>
                ✅ Clear separation
              </div>
              <div className="compact-cons">
                ❌ Requires horizontal scroll<br/>
                ❌ Hidden tags not visible
              </div>
            </div>
          </div>

          <div className="compact-phone-mockup">
            <div className="compact-phone-header">
              <span className="compact-back-btn">←</span>
              <span className="compact-header-dots">⋯</span>
            </div>

            <div className="compact-profile-content">
              {/* Profile Header */}
              <div className="compact-profile-header">
                <div className="compact-avatar-wrapper">
                  <div className="compact-avatar">AC</div>
                  <div className="compact-status-dot warning"></div>
                </div>
                <div className="compact-profile-info">
                  <h1>Alex Chen</h1>
                  <p className="compact-last-contact">{friendData.lastContactMessage}</p>
                </div>
              </div>

              {/* Horizontal Scroll Bar */}
              <div className="compact-horizontal-scroll">
                <div className="compact-scroll-pill">🏢 Work</div>
                <div className="compact-scroll-pill">💬 Deep talks</div>
                <div className="compact-scroll-pill">🎭 Creative partner</div>
                <div className="compact-scroll-pill">🎯 Mentor</div>
              </div>

              {/* Existing sections */}
              <div className="compact-section">
                <div className="compact-section-header">
                  <span>CONNECTION RHYTHM</span>
                  <span className="compact-rhythm-value">Monthly</span>
                </div>
              </div>

              <div className="compact-section">
                <div className="compact-section-header">
                  <span>MEMORY KNOTS</span>
                  <span className="compact-add-btn">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Option 5: Name Subtitle Integration */}
        <div className="compact-mockup-card">
          <div className="compact-mockup-label">
            <span className="compact-label-badge clean">Cleanest</span>
            <h2>Option 5: Name Subtitle</h2>
            <p>Single line under name like iOS Contacts - ultra minimal</p>
            <div className="compact-pros-cons">
              <div className="compact-pros">
                ✅ Zero extra space<br/>
                ✅ Native iOS feel<br/>
                ✅ Very clean<br/>
                ✅ Professional
              </div>
              <div className="compact-cons">
                ❌ Shows only 1-2 tags<br/>
                ❌ Less visual interest
              </div>
            </div>
          </div>

          <div className="compact-phone-mockup">
            <div className="compact-phone-header">
              <span className="compact-back-btn">←</span>
              <span className="compact-header-dots">⋯</span>
            </div>

            <div className="compact-profile-content">
              {/* Profile Header with Subtitle */}
              <div className="compact-profile-header">
                <div className="compact-avatar-wrapper">
                  <div className="compact-avatar">AC</div>
                  <div className="compact-status-dot warning"></div>
                </div>
                <div className="compact-profile-info">
                  <h1>Alex Chen</h1>
                  {/* Subtitle line */}
                  <p className="compact-subtitle">Work colleague • Deep talks</p>
                  <p className="compact-last-contact">{friendData.lastContactMessage}</p>
                </div>
              </div>

              {/* Existing sections unchanged */}
              <div className="compact-section">
                <div className="compact-section-header">
                  <span>CONNECTION RHYTHM</span>
                  <span className="compact-rhythm-value">Monthly</span>
                </div>
              </div>

              <div className="compact-section">
                <div className="compact-section-header">
                  <span>MEMORY KNOTS</span>
                  <span className="compact-add-btn">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Summary Table */}
      <div className="compact-summary">
        <h2>Vertical Space Impact Comparison</h2>
        <table className="compact-table">
          <thead>
            <tr>
              <th>Option</th>
              <th>Extra Vertical Space</th>
              <th>Tag Capacity</th>
              <th>Implementation</th>
              <th>Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1. Avatar Badges</td>
              <td><strong>0px</strong></td>
              <td>2-3 emojis</td>
              <td>Very Easy</td>
              <td>Minimalists</td>
            </tr>
            <tr className="recommended-row">
              <td>2. Enhanced Subtitle</td>
              <td><strong>~30px</strong></td>
              <td>2-3 tags</td>
              <td>Easy</td>
              <td>Most users ⭐</td>
            </tr>
            <tr>
              <td>3. Rhythm Header</td>
              <td><strong>0px</strong></td>
              <td>2-4 tags</td>
              <td>Easy</td>
              <td>Info hoarders</td>
            </tr>
            <tr>
              <td>4. Horizontal Scroll</td>
              <td><strong>~40px</strong></td>
              <td>Unlimited</td>
              <td>Medium</td>
              <td>Many tags</td>
            </tr>
            <tr>
              <td>5. Name Subtitle</td>
              <td><strong>0px</strong></td>
              <td>1-2 tags</td>
              <td>Very Easy</td>
              <td>Clean UI lovers</td>
            </tr>
          </tbody>
        </table>

        <div className="compact-recommendation">
          <h3>🎯 My Recommendation: Option 2 (Enhanced Subtitle)</h3>
          <p>Best balance of visibility, space efficiency, and iOS familiarity. Only adds ~30px but makes the enrichment data immediately visible and scannable.</p>

          <h4>Implementation:</h4>
          <pre>{`// In FriendProfileView.swift, add after name:
HStack(spacing: 8) {
    if let howMet = parseHowMet(from: friend.notes) {
        CompactPill(emoji: getEmoji(for: howMet), text: howMet)
    }
    if let primaryVibe = friend.tags.first {
        CompactPill(emoji: getEmoji(for: primaryVibe), text: primaryVibe)
    }
}
.padding(.top, 4)`}</pre>
        </div>
      </div>
    </div>
  );
};

export default WovynCompactMockups;
