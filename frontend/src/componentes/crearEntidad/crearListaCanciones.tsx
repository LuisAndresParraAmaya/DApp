export const CrearListaCanciones = () => {

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
      />
       <input
        placeholder="Lista de canciones"
      />
       <button>Agregar</button>
       <input
        placeholder="Precio acceso: $0.01 MAT"
      />
      <button>Guardar</button>
    </div>
  );
};
