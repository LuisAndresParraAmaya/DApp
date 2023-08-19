import { useState } from 'react';
import { setMessengerMessage } from '../../consultasHTTP/messenger';

export const Example = ({ currentMessage }: { currentMessage: string }) => {
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
      <input
        placeholder="Change Message"
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
      />
      <button onClick={async () => await setMessengerMessage(message)}>Cambiar mensaje</button>
    </div>
  );
};