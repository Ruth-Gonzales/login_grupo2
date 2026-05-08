import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import MatriculaPage from './pages/MatriculaPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <MatriculaPage onLogout={handleLogout} />
      )}
    </>
  );
}

export default App;