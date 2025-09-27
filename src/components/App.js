import React, { useState } from "react";
import "./../styles/App.css";
import Login from "./Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      {isLoggedIn ? (
        <h2>Welcome! You are logged in ✅</h2>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
