import { Routes, Route } from 'react-router-dom';
import { Home, Contact, MenuProfile } from './components/pages';

import SignIn from './components/SignIn';
import Signup from './components/SignUp';
import ProtectedRoute from './components/ProtectedRoute';
import { UserAuthContextProvider } from './context/UserAuthContext';

import Container from '@mui/material/Container';
import { CssBaseline } from '@mui/material';
import './components/css/App.css';

function App() {
  return (
    <Container maxWidth={false} style={{ padding: 0 }}>
      <CssBaseline />
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
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
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserAuthContextProvider>
    </Container>
  );
}

export default App;
