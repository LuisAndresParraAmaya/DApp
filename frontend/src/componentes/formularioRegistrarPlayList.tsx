import { useState } from 'react';
import { setMessengerMessage } from '../consultasHTTP/messenger';

export const FormularioRegistrarPlayList = ({ currentMessage }: { currentMessage: string }) => {
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
      <div><h1>Crear PlayList</h1></div>
      <input
        placeholder="Nombre"
        onChange={(e) => setMessage(e.currentTarget.value)}
      />
       <input
        placeholder="Lista de canciones"
        onChange={(e) => setMessage(e.currentTarget.value)}
      />
       <button onClick={async () => await setMessengerMessage(message)}>Agregar</button>
       <input
        placeholder="Precio acceso: $0.01 MAT"
        onChange={(e) => setMessage(e.currentTarget.value)}
      />
      <button onClick={async () => await setMessengerMessage(message)}>Guardar</button>
    </div>
  );
};
