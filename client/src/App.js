import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'materialize-css';

import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';

const App = () => {
  const { token, login, logout, userId, ready } = useAuth();
  const isAutheticated = !!token;
  const routes = useRoutes(isAutheticated);

  if (!ready) {
    return <Loader />;
  }
  return (
    <AuthContext.Provider
      value={{ token, login, logout, userId, isAutheticated }}
    >
      <Router>
        {isAutheticated && <Navbar />}
        <div className="container">{routes}</div>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
