import { Link } from 'react-router-dom';

export const IdentificarUsuario = () => {
  return (
    
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        margin: 'auto',
        gap: '10px'
      }}>
      <div><h1>Iniciar Sesión</h1></div>
      <input
        style={{ width: '33vw', margin: 'auto' }}
        placeholder="Correo Electronico"
      />
       <input
        style={{ width: '33vw', margin: 'auto' }}
        placeholder="Contraseña"
      />
      <button style={{ width: '33vw', margin: 'auto' }}>Acceder</button>
      <Link to="/crearUsuario">Ir a registrarse</Link>
      <Link to="/crearListaCanciones">Ir a crear lista de canciones</Link>
    </div>
  );
};
