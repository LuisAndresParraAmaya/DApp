import { useState } from 'react';
import { setMessengerMessage } from '../consultasHTTP/messenger';

export const FormularioRegistrarUsuario = ({ currentMessage }: { currentMessage: string }) => {
  const [message, setMessage] = useState(currentMessage);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '500px',
        margin: 'auto',
        gap: '10px'
      }}
    >
      <div><h1>Crear Cuenta</h1></div>
      <input
        placeholder="Correo Electronico"
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
      />
       <input
        placeholder="Contraseña"
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
      />
       <input
        placeholder="Confirmar Contraseña"
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
      />
      <button onClick={async () => await setMessengerMessage(message)}>Registrarse</button>
    </div>
  );
};
