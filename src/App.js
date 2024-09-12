// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './UserContext';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import ProfilePage from './ProfilePage';
import UploadPage from './UploadPage';
import CommunityPage from './CommunityPage'; // Import the CommunityPage

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/community" element={<CommunityPage />} /> {/* Add route for CommunityPage */}
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
