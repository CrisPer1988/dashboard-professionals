import { BrowserRouter } from "react-router-dom"
import {Routes, Route, NavLink, Navigate} from "react-router-dom"
import Job from "./pages/Job"
import Perfil from "./pages/Perfil"
import ProtectedRoutes from "./pages/ProtectedRoutes"
import Login from "./pages/Login"
import Panel from "./pages/Panel"

const Navigation = () => {

  return (
    <BrowserRouter>
    
    <div>
      <nav className="main-layout">
      {/* <ul>
          <li>
            <NavLink className={({isActive}) => isActive ? "nav-active" : ""} to="/home">PANEL</NavLink>
          </li>
        </ul> */}
        <ul>
          <li>
            <NavLink className={({isActive}) => isActive ? "nav-active" : ""} to="/jobs">Mis Trabajos</NavLink>
          </li>
        </ul>
         <ul>
          <li>
            <NavLink className={({isActive}) => isActive ? "nav-active" : ""} to="/perfil">Mi Perfil</NavLink>
          </li>
        </ul>
        <ul>
        <li>
            <NavLink className={({isActive}) => isActive ? "nav-active" : ""} to="/login">Cuenta</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
      <Route path="login" element={<Login />}/>

      <Route element={<ProtectedRoutes />}>
                {/* <Route path="home" element={<Panel />}/> */}
                <Route path="jobs" element={<Job />}/>
                <Route path="perfil" element={<Perfil />}/>
                <Route path="*" element={<Navigate to="/home" replace />}/>
      </Route>

                {/* <Route path="jobs" element={<Job />}/>
                <Route path="perfil" element={<Perfil />}/> */}
                 {/*<Route path="users" element={<UsersRegister />}/>
                <Route path="home" element={<Dashboard />}/> */}
                
                <Route path="*" element={<Navigate to="/home" replace />}/>
            </Routes>
    </div>
    </BrowserRouter>
  )
}

export default Navigation