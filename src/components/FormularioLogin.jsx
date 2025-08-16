import React, { useState } from "react";

const FormularioLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const isDisabled = username === "" || password === "";

  const inputStyle = {
    padding: "8px",
    borderRadius: "4px",
    border: "3px solid #bfa43a",
    fontSize: "16px",
    width: "100%",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    padding: "10px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "16px",
    cursor: isDisabled ? "not-allowed" : "pointer",
    opacity: isDisabled ? 0.6 : 1,
    transition: "transform 0.2s, box-shadow 0.2s",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    boxShadow: isHovered ? "0 4px 12px rgba(0,0,0,0.15)" : "none",
    width: "100%",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "100%",
    maxWidth: "350px",
    margin: "0 auto",
    padding: "20px",
    boxSizing: "border-box",
  };

  return (
    <form style={formStyle}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        style={inputStyle}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={inputStyle}
      />
      <button
        type="submit"
        disabled={isDisabled}
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Login
      </button>
    </form>
  );
};

export default FormularioLogin;
