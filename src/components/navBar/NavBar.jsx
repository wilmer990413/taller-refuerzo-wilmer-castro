import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/taller-refuerzo-wilmer-castro/micomponente">Mi Componente</Link>
        </li>
        <li>
          <Link to="/taller-refuerzo-wilmer-castro/micontador">Mi Contador</Link>
        </li>
        <li>
          <Link to="/taller-refuerzo-wilmer-castro/misproductos">Mis Productos</Link>
        </li>
      </ul>
    </nav>
    <Outlet/>
    </>
  );
};

export default Navbar;