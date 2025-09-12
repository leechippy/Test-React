import React, { Suspense, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
  useNavigate,
} from 'react-router-dom';

import Home from './pages/Home';
import Settings from './pages/Settings';
import Usage from './pages/Usage';
import UserDetails from './pages/UserDetails';
import NoRecord from './pages/NoRecord';
import Marks from './pages/Marks';
import Sports from './pages/Sports';
import Login from './pages/Login';
import Header from './componets/Layout/Header';
import ProtectedRoute from './componets/ProtectedRoute';
import Signout from './pages/Signout';

const CompUser = React.lazy(() => import('./pages/Users'));

const Reactrouterpage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem('isAuthenticated')
  );

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading..</div>}>
        <Routes>
          {/* Public Login Route (always accessible) */}
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
            {/* Header layout */}
            <Route element={<Header />}>
              <Route index element={<Home />} />
              <Route path="settings" element={<Settings />} />
              <Route path="usage" element={<Usage />} />

              {/* Nested Users Route */}
              <Route path="users" element={<Outlet />}>
                <Route index element={<CompUser />} />
                <Route path=":userid" element={<UserDetails />}>
                  <Route index element={<Marks />} />
                  <Route path="sports" element={<Sports />} />
                </Route>
                
              </Route>
             <Route path="logout" element={<Signout/>} />
              {/* Fallback */}
              <Route path="*" element={<NoRecord />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Reactrouterpage;
