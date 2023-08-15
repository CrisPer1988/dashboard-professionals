import axios from "axios";
import { useForm } from "react-hook-form"
import { useState, useEffect } from "react";
import "./styles/login.css"
import axiosInstance from "../utils/getConfig";


const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const [token, setToken] = useState()
    const [modalWelcome, setModalWelcome] = useState(false)

    const submit = (data) => {
    const url = "http://localhost:4600/api/v1/professionals/login/"

        axios.post(url, data)
        .then(res => {
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("name", res.data.professional.name)
           // setToken(res.data.token)
            setModalWelcome(true)
            console.log(res.data)
           
        })
        .catch(err => console.log(err))
    }
 
    const handleLogout = () => {
        localStorage.clear()
        setToken("")
        setModalWelcome(false)
        reset()
    }

//     if(modalWelcome){
//         return <div className="content__login">
// <h2>{localStorage.getItem("name")}</h2>
//         <button onClick={handleLogout}>Salir</button>
//         </div>
        
//     } else {

    
  return (
    <>
    {
        modalWelcome ? 
        <div className="modal__login">
            <h1>Hola {localStorage.getItem("name")}</h1>
            <h3>Ya puedes empezar a crear tus trabajos</h3>
            <h4>Ve a la seccion "Mis Trabajos"</h4>
            <button onClick={handleLogout}>Salir</button>
        </div>
        

        :

        <form className="form__login" onSubmit={handleSubmit(submit)}>
        <div className="item__login">
            <label htmlFor="email">Email</label>
            <input {...register("email")} type="text" />
        </div>
        <div className="item__login">
            <label htmlFor="password">Password</label>
            <input {...register("password")} type="password" />
        </div>
        <button>Enviar</button>
    </form>
    }
    

   
    </>
  )
}
//}

export default Login