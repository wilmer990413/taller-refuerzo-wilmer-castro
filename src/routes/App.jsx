import { BrowserRouter, Routes, Route } from "react-router-dom";
import MiComponente from "../pages/MiComponente";
import MiContador from "../pages/MiContador";
import MisProductos from "../pages/misProductos/MisProductos";
import DetalleProducto from "../pages/DetalleProducto";
import Navbar from "../components/navBar/NavBar";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/taller-refuerzo-wilmer-castro/" element={<Navbar/>}>
            <Route index element={<MiComponente />} />
            <Route path="/taller-refuerzo-wilmer-castro/micomponente" element={<MiComponente />}></Route>
            <Route path="/taller-refuerzo-wilmer-castro/micontador" element={<MiContador />}></Route>
            <Route path="/taller-refuerzo-wilmer-castro/misproductos" element={<MisProductos />}></Route>
            <Route path="/taller-refuerzo-wilmer-castro/misproductos/:id" element={<DetalleProducto />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
