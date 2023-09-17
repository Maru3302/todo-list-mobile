import React, { useState } from "react";
import { useHistory } from "react-router-dom";


function ForgotPass() {
  const [email, setEmail] = useState("");
  const history = useHistory();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    history.push("./ResetPass");
  };

  return (
    <div>
      <h2>Olvidé mi contraseña</h2>
      <form onSubmit={handleEmailSubmit}>
        <label>
          Correo electrónico:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Enviar correo de recuperación</button>
      </form>
    </div>
  );
}

export default ForgotPass;
