import { useState } from 'react';
import { setMessengerMessage } from '../consultasHTTP/messenger';

export const ChangeMessengerMessage = ({ currentMessage }: { currentMessage: string }) => {
  const [message, setMessage] = useState(currentMessage);
  return (
    
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        margin: 'auto',
        gap: '10px'
      }}
    >
      <div><h1>Iniciar Sesión</h1></div>
      <input
        style={{ width: '30vw', margin: 'auto' }}
        placeholder="Correo Electronico"
        onChange={(e) => setMessage(e.currentTarget.value)}
      />
       <input
        style={{ width: '30vw', margin: 'auto' }}
        placeholder="Contraseña"
        onChange={(e) => setMessage(e.currentTarget.value)}
      />
      <button style={{ width: '30vw', margin: 'auto' }} onClick={async () => await setMessengerMessage(message)}>Acceder</button>
      <button style={{ width: '30vw', margin: 'auto' }} onClick={async () => await setMessengerMessage(message)}>Registrarse</button>
    </div>
  );
};
