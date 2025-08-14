import React, { useState } from "react";

const FormularioLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isDisabled = username === "" || password === "";

  return (
    <form>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit" disabled={isDisabled}>Login</button>
    </form>
  );
};

export default FormularioLogin;
