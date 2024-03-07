import { Routes, Route } from 'react-router-dom';
import { MenuHome, MenuProfile } from './components/pages';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import LandingPage from './components/LandingPage';
import ProtectedRoute from './components/ProtectedRoute';
import { UserAuthContextProvider } from './context/UserAuthContext';
import Footer from './components/utils/Footer';
import './components/css/App.css';

function App() {
  return (
    <div className="fixedBackgroundLight">
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <MenuHome />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <MenuProfile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserAuthContextProvider>
      <Footer />
    </div>
  );
}

export default App;
