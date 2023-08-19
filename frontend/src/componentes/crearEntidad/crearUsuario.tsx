export const CrearUsuario = () => {
  const message = "";

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
      />
       <input
        placeholder="Contraseña"
        value={message}
      />
       <input
        placeholder="Confirmar Contraseña"
        value={message}
      />
      <button>Registrarse</button>
    </div>
  );
};
