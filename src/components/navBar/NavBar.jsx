import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../../data/AuthContext';

const Navbar = () => {
  const { isAuthenticated } = useAuth();
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/taller-refuerzo-wilmer-castro/login">Login</Link>
        </li>
        <li>
          <Link to="/taller-refuerzo-wilmer-castro/micomponente">Mi Componente</Link>
        </li>
        <li>
          <Link to="/taller-refuerzo-wilmer-castro/micontador">Mi Contador</Link>
        </li>
        <li>
          <Link to="/taller-refuerzo-wilmer-castro/misproductos">Mis Productos</Link>
        </li>
        <li>
          <Link to="/taller-refuerzo-wilmer-castro/miContadorUseReducer">Mi Contador Con UseReducer</Link>
        </li>
        {
          isAuthenticated? 
            <li>
              <Link to="/taller-refuerzo-wilmer-castro/miTodoList">Mi Todo List</Link>
            </li> : 
            <>
            </>
        }
      </ul>
    </nav>
    <Outlet/>
    </>
  );
};

export default Navbar;