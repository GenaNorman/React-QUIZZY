import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email,
      password,
    };

    try {
      const response = await fetch("https://quizzy-react-adapt.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        navigate("/student");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (error) {
      setError("An error occurred: " + error.message);
    }
  };

  return (
    <div className="access">
      <div className="access__left">
        <form onSubmit={handleSubmit} className="signup">
          <div className="signup__block">
            <p className="signup__block-name">Username</p>
            <input
              type="text"
              className="signup__block-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="signup__block">
            <p className="signup__block-name">Email</p>
            <input
              type="text"
              className="signup__block-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="signup__block">
            <p className="signup__block-name">Password</p>
            <input
              type="password"
              className="signup__block-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn-signup" type="submit">Sign In</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
      <div className="access__right"></div>
    </div>
  );
}

export default Signin;
