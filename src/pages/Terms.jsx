import { motion } from 'framer-motion'
import Header from '../components/Header/Header'
import styles from './LegalPage.module.css'

function Terms() {
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
          Terms & Conditions
        </motion.h1>
        <motion.p
          className={styles.effectiveDate}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Effective as of February 6, 2026
        </motion.p>

        <motion.div
          className={styles.policyContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>These terms and conditions apply to the Wovyn app (hereby referred to as "Application") for mobile devices that was created by Bhaumik Uttam Jain (hereby referred to as "Service Provider") as a Free service.</p>

          <p>Upon downloading or utilizing the Application, you are automatically agreeing to the following terms. It is strongly advised that you thoroughly read and understand these terms prior to using the Application.</p>

          <p>Unauthorized copying, modification of the Application, any part of the Application, or our trademarks is strictly prohibited. Any attempts to extract the source code of the Application, translate the Application into other languages, or create derivative versions are not permitted. All trademarks, copyrights, database rights, and other intellectual property rights related to the Application remain the property of the Service Provider.</p>

          <p>The Service Provider is dedicated to ensuring that the Application is as beneficial and efficient as possible. As such, they reserve the right to modify the Application or charge for their services at any time and for any reason. The Service Provider assures you that any charges for the Application or its services will be clearly communicated to you.</p>

          <p>The Application stores and processes personal data that you have provided to the Service Provider in order to provide the Service. It is your responsibility to maintain the security of your phone and access to the Application. The Service Provider strongly advise against jailbreaking or rooting your phone, which involves removing software restrictions and limitations imposed by the official operating system of your device. Such actions could expose your phone to malware, viruses, malicious programs, compromise your phone's security features, and may result in the Application not functioning correctly or at all.</p>

          <p>Please note that the Application utilizes third-party services that have their own Terms and Conditions. Below are the links to the Terms and Conditions of the third-party service providers used by the Application:</p>
          <ul>
            <li><a href="https://www.google.com/analytics/terms/" target="_blank" rel="noopener noreferrer">Google Analytics for Firebase</a></li>
            <li><a href="https://firebase.google.com/terms" target="_blank" rel="noopener noreferrer">Firebase (Authentication, Remote Config)</a></li>
            <li><a href="https://ai.google.dev/gemini-api/terms" target="_blank" rel="noopener noreferrer">Google Gemini AI</a></li>
            <li><a href="https://www.apple.com/legal/internet-services/icloud/" target="_blank" rel="noopener noreferrer">Apple iCloud</a></li>
          </ul>

          <p>Please be aware that the Service Provider does not assume responsibility for certain aspects. Some functions of the Application require an active internet connection, which can be Wi-Fi or provided by your mobile network provider. The Service Provider cannot be held responsible if the Application does not function at full capacity due to lack of access to Wi-Fi or if you have exhausted your data allowance.</p>

          <p>If you are using the application outside of a Wi-Fi area, please be aware that your mobile network provider's agreement terms still apply. Consequently, you may incur charges from your mobile provider for data usage during the connection to the application, or other third-party charges. By using the application, you accept responsibility for any such charges, including roaming data charges if you use the application outside of your home territory (i.e., region or country) without disabling data roaming. If you are not the bill payer for the device on which you are using the application, they assume that you have obtained permission from the bill payer.</p>

          <p>Similarly, the Service Provider cannot always assume responsibility for your usage of the application. For instance, it is your responsibility to ensure that your device remains charged. If your device runs out of battery and you are unable to access the Service, the Service Provider cannot be held responsible.</p>

          <p>In terms of the Service Provider's responsibility for your use of the application, it is important to note that while they strive to ensure that it is updated and accurate at all times, they do rely on third parties to provide information to them so that they can make it available to you. The Service Provider accepts no liability for any loss, direct or indirect, that you experience as a result of relying entirely on this functionality of the application.</p>

          <p>The Service Provider may wish to update the application at some point. The application is currently available as per the requirements for the operating system (and for any additional systems they decide to extend the availability of the application to) may change, and you will need to download the updates if you want to continue using the application. The Service Provider does not guarantee that it will always update the application so that it is relevant to you and/or compatible with the particular operating system version installed on your device. However, you agree to always accept updates to the application when offered to you. The Service Provider may also wish to cease providing the application and may terminate its use at any time without providing termination notice to you. Unless they inform you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must cease using the application, and (if necessary) delete it from your device.</p>

          <h2>AI Message Suggestions</h2>
          <p>The Application offers AI-powered message suggestions using Google's Gemini AI service. By opting in to this feature, you acknowledge and agree that:</p>
          <ul>
            <li>Certain data (friend's first name, relationship context, activity history, and writing style patterns) will be sent to Google for processing.</li>
            <li>AI-generated suggestions are provided as-is and are not professional, medical, legal, or psychological advice.</li>
            <li>You are solely responsible for reviewing, editing, and choosing to send any AI-generated message.</li>
            <li>The Service Provider does not guarantee the accuracy, appropriateness, or quality of AI-generated content.</li>
            <li>You may withdraw your consent and disable AI features at any time through the Application's Settings.</li>
          </ul>
          <p>Use of the AI feature is subject to your explicit consent, which you may grant or revoke at any time. See our <a href="/privacy-policy">Privacy Policy</a> for full details on data shared with Google.</p>

          <h2>iCloud Sync</h2>
          <p>The Application uses Apple's iCloud service to sync your data (including friends, activities, groups, and preferences) across your devices. By using the Application, you acknowledge that:</p>
          <ul>
            <li>Your data is stored in Apple's iCloud Key-Value Storage and is subject to Apple's iCloud Terms of Service.</li>
            <li>The Service Provider is not responsible for data loss or sync issues caused by Apple's iCloud service.</li>
            <li>You are responsible for maintaining adequate iCloud storage on your Apple ID.</li>
          </ul>

          <h2>User Content</h2>
          <p>You retain ownership of all content you create within the Application, including friend information, activity logs, memory knots, and custom activities. By using the Application, you grant the Service Provider a limited license to process this data solely for the purpose of providing the Application's features (including AI message suggestions, if you consent to that feature).</p>

          <h2>Account Deletion</h2>
          <p>You may delete your account at any time through the Application's Settings. Upon account deletion:</p>
          <ul>
            <li>Your authentication credentials will be permanently removed.</li>
            <li>Locally stored data on your device will be erased.</li>
            <li>Any data synced to iCloud will be removed from iCloud storage.</li>
            <li>AI consent records will be cleared.</li>
          </ul>
          <p>Account deletion is permanent and cannot be undone.</p>

          <h2>Changes to These Terms and Conditions</h2>
          <p>The Service Provider may periodically update their Terms and Conditions. Therefore, you are advised to review this page regularly for any changes. The Service Provider will notify you of any changes by posting the new Terms and Conditions on this page.</p>

          <h2>Contact Us</h2>
          <p>If you have any questions or suggestions about the Terms and Conditions, please do not hesitate to contact the Service Provider at <a href="mailto:wovynapp@gmail.com" className={styles.contactEmail}>wovynapp@gmail.com</a>.</p>
        </motion.div>
      </main>

      <footer className={styles.footer}>
        <p>Copyright &copy; 2026 Bhaumik Uttam Jain</p>
      </footer>
    </motion.div>
  )
}

export default Terms
