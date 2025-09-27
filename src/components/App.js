import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // normally yahan validation hoti hai, abhi direct login karwa rahe hain
    setIsLoggedIn(true);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      {isLoggedIn ? (
        <h2>Welcome! You are logged in ✅</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Login Form</h2>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default App;
