import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/login/Login';
import LoginLayout from './pages/layouts/LoginLayout';
import CreateTicket from './pages/tickets/create';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Routes</h1>
        <Routes>
            <Route path="/" element={<LoginLayout />}>
              <Route path="/" element={<Login />} />
              <Route path="/about" element={<CreateTicket />} />
            </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;