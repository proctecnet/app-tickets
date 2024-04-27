import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { env } from '../environments/env';
import { SessionContext } from './SessionContext';


export const TicketContext = createContext();

const axiosInstance = axios.create({
    baseURL: `${env.SERVER}/v1/tickets`,
  });


// Definimos el proveedor del contexto
export const TicketProvider = ({ children }) => {
    const userContext = useContext(SessionContext);
    const [tickets, setTickets] = useState([]);
    const [displayDialog, setDisplayDialog] = useState(false);
    const [phishingForm, setPhishingForm] = useState({
      url: '',
      sitioAfectado: {URL: '', marca: ''}
      });

    axiosInstance.interceptors.request.use(
        config => {
            const token = userContext.loginData?.token;
            if (token) {
            config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        error => Promise.reject(error)
    );

    const instaceNewPhishing =() =>{
        setDisplayDialog(true)
        setPhishingForm({
            url: '',
            sitioAfectado: {URL: '', marca: ''}
            })
    }

    const createTicket = async () => {
        await axiosInstance.post("/analyze", [phishingForm]);
        fetchTickets().then(() => {
          setDisplayDialog(false)
        })

    }


    const fetchTickets = async () => {
        try {
        const response = await axiosInstance.get();
        setTickets(response.data);
        } catch (error) {
        console.error('Error al obtener tickets:', error);
        }
    };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setPhishingForm((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };
  
    const handleNestedInputChange = (event) => {
      const { name, value } = event.target;

      setPhishingForm((prevState) => ({
        url: prevState.url,
        sitioAfectado: {
          ...prevState.sitioAfectado,
          [name]: value,
        },
      }));
    };



  useEffect(() => {
    // Llama a fetchTickets cuando el componente se monta
    fetchTickets(); // Puedes pasar companyId si es necesario
  }, []); // El segundo argumento asegura que solo se ejecute una vez al montar el componente

  // Proporcionamos el estado de los tickets y la función para obtenerlos a los componentes hijos
  return (
    <TicketContext.Provider value={{ tickets, fetchTickets, displayDialog, createTicket, instaceNewPhishing, phishingForm, 
    handleInputChange, handleNestedInputChange}}>
      {children}
    </TicketContext.Provider>
  );
};

// Función personalizada para usar el contexto de Tickets en cualquier componente hijo
export const useTicketContext = () => useContext(TicketContext);
