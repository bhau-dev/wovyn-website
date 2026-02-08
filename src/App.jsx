import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import FriendProfileMockups from './components/FriendProfileMockups'
import WovynFriendProfileMockups from './components/WovynFriendProfileMockups'
import WovynCompactMockups from './components/WovynCompactMockups'

function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/mockups" element={<FriendProfileMockups />} />
        <Route path="/wovyn-mockups" element={<WovynFriendProfileMockups />} />
        <Route path="/compact-mockups" element={<WovynCompactMockups />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
