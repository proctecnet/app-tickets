
import React, { useContext } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { SessionContext } from '../../context/SessionContext';

export const useSession = () => useContext(SessionContext);

const Login = () => {
  const { username, setUsername, password, setPassword, license, setLicense, handleLogin } = useSession();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="p-field">
          <label htmlFor="username">Nombre de usuario</label>
          <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="p-field">
          <label htmlFor="password">Contraseña</label>
          <InputText id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="p-field">
          <label htmlFor="license">Licencia</label>
          <InputText id="license" value={license} onChange={(e) => setLicense(e.target.value)} />
        </div>
        <div className="p-field">
          <Button label="Iniciar sesión" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Login;