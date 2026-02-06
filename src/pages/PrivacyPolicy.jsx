import { motion } from 'framer-motion'
import Header from '../components/Header/Header'
import styles from './LegalPage.module.css'

function PrivacyPolicy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Header />
      <main className={styles.content}>
        <motion.h1
          className={styles.pageTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Privacy Policy
        </motion.h1>
        <motion.p
          className={styles.effectiveDate}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Effective Date: February 4, 2026 | Last Updated: February 4, 2026
        </motion.p>

        <motion.div
          className={styles.policyContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>Introduction</h2>
          <p>Wovyn ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.</p>

          <h2>Information We Collect</h2>

          <h3>Information You Provide</h3>
          <ul>
            <li><strong>Account Information:</strong> Email address, full name, and password</li>
            <li><strong>Friend Information:</strong> Names of friends you add to the app</li>
            <li><strong>Activity Data:</strong> Activities you log with friends, including dates and custom notes</li>
            <li><strong>Relationship Context:</strong> Optional context you provide about your friendships</li>
            <li><strong>Memory Knots:</strong> Text notes you write to capture memories with friends</li>
          </ul>

          <h3>Relationship Type Data</h3>
          <p>When you designate relationship types for your friends (such as "Close Friend", "Family", or "Work Colleague"), this information is:</p>
          <ul>
            <li>Stored locally on your device</li>
            <li>Synced to iCloud if iCloud sync is enabled</li>
            <li>Sent to Google Gemini AI when generating personalized message suggestions (with your consent)</li>
          </ul>
          <p>Relationship types help personalize AI-generated message suggestions to match the nature of your friendships.</p>

          <h3>Automatically Collected Information</h3>
          <ul>
            <li><strong>Device Information:</strong> Device type, operating system version</li>
            <li><strong>Usage Data:</strong> App features used, interaction patterns</li>
            <li><strong>Analytics Data:</strong> Firebase Analytics events for app performance monitoring</li>
          </ul>

          <h2>AI Message Suggestions</h2>

          <h3>What Data We Share with Google</h3>
          <p>Wovyn uses <strong>Google's Gemini AI</strong> to generate personalized message suggestions. Before any data is sent to Google, we will ask for your explicit consent through an in-app privacy notice.</p>
          <p>If you consent to AI message suggestions, we share the following data with Google:</p>
          <ul>
            <li><strong>Friend's name</strong> (first name only)</li>
            <li><strong>Relationship context</strong> (if you provided it)</li>
            <li><strong>Activity history summary</strong> (recent activities logged with that friend)</li>
            <li><strong>Writing style patterns</strong> from your memory knots</li>
          </ul>

          <h3>How Google Uses This Data</h3>
          <p>Google processes this data to generate message suggestions according to their AI services terms. Google's use of this data is governed by their privacy policy, available at: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></p>

          <h3>Your Control Over AI Features</h3>
          <ul>
            <li><strong>Consent Required:</strong> We will not send any data to Google's AI until you explicitly consent</li>
            <li><strong>Edit Before Sending:</strong> All AI-generated suggestions are shown to you for review and editing before sending</li>
            <li><strong>Disable Anytime:</strong> You can withdraw your consent and disable AI features at any time in Settings</li>
            <li><strong>No Pre-caching:</strong> AI suggestions are generated on-demand only when you request them</li>
          </ul>

          <h3>Data Retention for AI</h3>
          <p>We do not store AI-generated suggestions on our servers. Google retains data according to their AI services retention policies. You can review Google's data retention practices in their privacy policy.</p>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and maintain the Wovyn app</li>
            <li>Remind you to reach out to friends</li>
            <li>Generate personalized message suggestions (with your consent)</li>
            <li>Analyze app usage to improve features</li>
            <li>Send you notifications (with your permission)</li>
            <li>Respond to your support requests</li>
          </ul>

          <h2>Data Sharing and Disclosure</h2>

          <h3>Third-Party Service Providers</h3>
          <p>We use the following third-party services:</p>
          <ul>
            <li><strong>Firebase (Google):</strong> Authentication, database, analytics, remote configuration</li>
            <li><strong>Google Gemini AI:</strong> Message suggestion generation (only with your consent)</li>
          </ul>

          <h3>Legal Requirements</h3>
          <p>We may disclose your information if required by law or in response to valid legal requests.</p>

          <h2>Data Security</h2>
          <p>We implement industry-standard security measures to protect your data, including:</p>
          <ul>
            <li>Encrypted data transmission (HTTPS/TLS)</li>
            <li>Firebase Authentication for secure account access</li>
            <li>Encrypted data storage in Firebase Firestore</li>
            <li>Regular security audits</li>
          </ul>
          <p>However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>

          <h2>Your Privacy Rights</h2>
          <p>Depending on your location, you may have the following rights:</p>

          <h3>GDPR Rights (European Users)</h3>
          <ul>
            <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
            <li><strong>Right to Rectification:</strong> Correct inaccurate data</li>
            <li><strong>Right to Erasure:</strong> Request deletion of your data</li>
            <li><strong>Right to Withdraw Consent:</strong> Withdraw AI data sharing consent at any time</li>
            <li><strong>Right to Data Portability:</strong> Receive your data in a portable format</li>
            <li><strong>Right to Object:</strong> Object to data processing for specific purposes</li>
          </ul>

          <h3>CCPA Rights (California Users)</h3>
          <ul>
            <li><strong>Right to Know:</strong> Know what personal information we collect</li>
            <li><strong>Right to Delete:</strong> Request deletion of your personal information</li>
            <li><strong>Right to Opt-Out:</strong> Opt out of the sale of personal information (we do not sell your data)</li>
          </ul>

          <h3>Exercising Your Rights</h3>
          <p>To exercise any of these rights:</p>
          <ul>
            <li><strong>Delete Your Account:</strong> Use the "Delete Account" option in Settings to permanently delete all your data</li>
            <li><strong>Withdraw AI Consent:</strong> Disable AI features in Settings to stop sharing data with Google</li>
            <li><strong>Data Request:</strong> Contact us at <a href="mailto:wovynapp@gmail.com" className={styles.contactEmail}>wovynapp@gmail.com</a> for data access or portability requests</li>
          </ul>

          <h2>Children's Privacy</h2>
          <p>Wovyn is not intended for users under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.</p>

          <h2>International Data Transfers</h2>
          <p>Your information may be transferred to and processed in countries other than your own. We use Firebase services, which may store data in Google Cloud servers worldwide. By using Wovyn, you consent to such transfers.</p>

          <h2>Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by:</p>
          <ul>
            <li>Updating the "Last Updated" date</li>
            <li>Showing an in-app notice</li>
            <li>Sending an email notification (for significant changes)</li>
          </ul>
          <p>Your continued use of Wovyn after changes constitutes acceptance of the updated Privacy Policy.</p>

          <h2>Contact Us</h2>
          <p>If you have questions about this Privacy Policy or our privacy practices, contact us at:</p>
          <p><strong>Email:</strong> <a href="mailto:wovynapp@gmail.com" className={styles.contactEmail}>wovynapp@gmail.com</a><br />
          <strong>App Support:</strong> Use the "Contact Support" option in Settings</p>

          <h2>Consent Record</h2>
          <p>By using Wovyn's AI message suggestions feature, you acknowledge that:</p>
          <ol>
            <li>You have read and understood this Privacy Policy</li>
            <li>You consent to sharing the specified data types with Google's Gemini AI</li>
            <li>You understand you can withdraw consent at any time</li>
            <li>You have been informed of your privacy rights under GDPR and CCPA</li>
          </ol>

          <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #e0e0e0', color: '#666', fontSize: '0.9rem' }}>
            <p><strong>Version:</strong> 1.0 | <strong>Policy ID:</strong> WVN-PP-2026-02</p>
          </div>
        </motion.div>
      </main>

      <footer className={styles.footer}>
        <p>Copyright &copy; 2026 Bhaumik Uttam Jain</p>
      </footer>
    </motion.div>
  )
}

export default PrivacyPolicy
