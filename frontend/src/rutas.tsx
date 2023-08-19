// Routes.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CrearUsuario } from './componentes/crearEntidad/crearUsuario';
import { CrearListaCanciones } from './componentes/crearEntidad/crearListaCanciones';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/crearUsuario" element={<CrearUsuario />} />
        <Route path="/crearListaCanciones" element={<CrearListaCanciones/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
