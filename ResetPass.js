
import React, { useState } from "react";
import { useParams } from "react-router-dom";

function ResetPass() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div>
      <h2>Restaurar contraseña</h2>
      <p>Token: {token}</p>
      <form onSubmit={handlePasswordSubmit}>
        <label>
          Nueva contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Confirmar contraseña:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Restaurar contraseña</button>
      </form>
    </div>
  );
}

export default ResetPass;
