import { BrowserRouter, Routes, Route } from "react-router-dom";
import MiComponente from "../pages/MiComponente";
import MiContador from "../pages/MiContador";
import MisProductos from "../pages/misProductos/MisProductos";
import DetalleProducto from "../pages/DetalleProducto";
import Navbar from "../components/navBar/NavBar";
import MiContadorConUseReducer from "../pages/MiContadorConUseReducer";
import { CounterProvider } from "../data/CounterContext";
import { AuthProvider } from "../data/AuthContext";
import Login from "../pages/Login";
import PrivateRoute from "../components/PrivateRoute";
import MiToDoList from "../pages/MiToDoList";
import { TaskProvider } from "../data/TaskContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/taller-refuerzo-wilmer-castro/" element={<Navbar/>}>
              <Route index element={<Login />} />
              <Route path="/taller-refuerzo-wilmer-castro/micomponente" element={<MiComponente />}></Route>
              <Route path="/taller-refuerzo-wilmer-castro/micontador" element={<MiContador />}></Route>
              <Route path="/taller-refuerzo-wilmer-castro/misproductos" element={<MisProductos />}></Route>
              <Route path="/taller-refuerzo-wilmer-castro/miContadorUseReducer" element={<CounterProvider><MiContadorConUseReducer /></CounterProvider>}></Route>
              <Route path="/taller-refuerzo-wilmer-castro/misproductos/:id" element={<DetalleProducto />} />
                <Route path="/taller-refuerzo-wilmer-castro/login" element={<Login/>}/>
                <Route path='/taller-refuerzo-wilmer-castro/miTodoList' element={<PrivateRoute/>}>
                  <Route path={"/taller-refuerzo-wilmer-castro/miTodoList"} element={<TaskProvider><MiToDoList/></TaskProvider>}/>
                </Route>
            </Route>
          </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
