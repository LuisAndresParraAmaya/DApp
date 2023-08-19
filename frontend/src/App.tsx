import { useEffect, useState } from 'react';
import './App.css';
import { ChangeMessengerMessage } from './componentes/ChangeMessengerMessage';
import { FormularioRegistrarUsuario } from './componentes/formularioRegistrarUsuario';
import { FormularioRegistrarPlayList } from './componentes/formularioRegistrarPlayList';
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
    <div>
      {message && <ChangeMessengerMessage currentMessage={message} />}
    </div>
  );
}

export default App;
