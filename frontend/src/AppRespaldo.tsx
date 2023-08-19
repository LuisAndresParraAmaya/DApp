import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { IdentificarUsuario } from './componentes/verificarIdentidad/identificarUsuario';
import { CrearUsuario } from './componentes/crearEntidad/crearUsuario';
import { CrearListaCanciones } from './componentes/crearEntidad/crearListaCanciones';
import { Example } from './componentes/crearEntidad/example';
// consultas HTTP GET
import { getMessengerMessage } from './consultasHTTP/messenger';

function App() {
  const [message, setMessage] = useState();

  const getApiData = async () => {
    const response = await getMessengerMessage();
    setMessage(response.message);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<IdentificarUsuario />}/>
        <Route path="/example" element={<Example currentMessage={message}/>} />
        <Route path="/crearListaCanciones" element={<CrearListaCanciones />} />
        <Route path="/crearUsuario" element={<CrearUsuario />} />
      </Routes>
    </Router>
  );
}

export default App;

