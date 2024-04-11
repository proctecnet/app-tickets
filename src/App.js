import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/login/Login';
import LoginLayout from './pages/layouts/LoginLayout';
import CreateTicket from './pages/tickets/create';
import TicketLayout from './pages/layouts/TicketLayout';
import { SessionProvider } from './context/SessionContext';
import Tickets from './pages/tickets/ticket';
import { TicketProvider } from './context/TicketContext';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Protecnet</h1>
        <SessionProvider>
          <TicketProvider>
            <Routes>
                <Route path="/" element={<LoginLayout />}>
                  <Route path="/" element={<Login />} />
                </Route>
                
                <Route path="/tickets" element={<TicketLayout />}>
                  <Route path="/tickets" element={<Tickets />} />
                  <Route path="/tickets/create" element={<CreateTicket />} />
                </Route>
            </Routes>
          </TicketProvider>
        </SessionProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;