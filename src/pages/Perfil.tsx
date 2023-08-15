import axios from "axios"
import { useEffect, useState } from "react"
import config from "../utils/getConfig"
import "./styles/perfil.css"
import axiosInstance from "../utils/getConfig"


const Perfil = () => {
  const [professional, setProfessional] = useState<any>()
  useEffect(() => {
    const url = 'http://localhost:4600/api/v1/professionals/me/'

    axios.get(url, config)
    .then(res => setProfessional(res.data.professional))
    .catch(err => console.log(err))
  }, [])
  
console.log(localStorage.getItem("token"));

  return (
    <div className="content__perfil">
    <h2>Nombre: {professional?.name}</h2>
    <h2>Email: {professional?.email}</h2>
    <h2>Telefono: {professional?.number_tel}</h2>

    </div>
  )
}

export default Perfil