import React, { useState, createContext } from 'react';
import { env } from '../environments/env';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



export const SessionContext = createContext();

// Creamos un componente de contexto para proporcionar datos y funciones a los componentes hijos
export const SessionProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [license, setLicense] = useState('');
  const [loginData, setLoginData] = useState(null);
  const navigate = useNavigate();
  // Función para enviar la solicitud de inicio de sesión
  const handleLogin = async () => {
    const loginData = {
      username,
      password,
      license
    };

    try {
      const response = await axios.post(`${env.SERVER}/v1/auth/login`, loginData);
      console.log('Respuesta del servidor:', response.data);
      setLoginData(response.data)
      navigate('/tickets');
      // Aquí podrías hacer algo con la respuesta del servidor, como guardar el token de sesión
    } catch (error) {
      console.error('Error al enviar solicitud:', error);
    }
  };

  // Proporcionamos los datos y las funciones a los componentes hijos a través del contexto
  return (
    <SessionContext.Provider value={{ username, setUsername, password, setPassword, license, setLicense, handleLogin, loginData }}>
      {children}
    </SessionContext.Provider>
  );
};
