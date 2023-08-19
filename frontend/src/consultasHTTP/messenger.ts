import { headers } from './headers';

// Consulta HTPP #1
export const getMessengerMessage = async () =>
  await fetch('http://localhost:20001/messenger', 
  { method: 'GET', 
    headers
  }).then((response) => response.json()
  );

// Consulta HTTP #2
export const setMessengerMessage = async (message: string) =>
  await fetch(`http://localhost:20001/messenger/?message=${message}`, {
    method: 'PUT',
    headers
  }).then((response) => response.json());

