import { useState } from "react"
import { useForm } from 'react-hook-form';
import Dropzone from 'react-dropzone';
import "./styles/formJob.css"
import config from "../../utils/getConfig";
import { useDispatch } from "react-redux";
import { getAllJobsThunk } from "../../store/slices/jobs.slice";


const FormJob = ({setOpenForm, handleShow}) => {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch()


    const [jobs, setJobs] = useState()
    const [formData, setFormData] = useState({
        imageUrl: "",
        description: "",
        work_name: ""
    })

    const submit = (event) => {
    const data = new FormData();
    data.append('imageUrl', formData.imageUrl);
    data.append('work_name', formData.work_name);
    data.append('description', formData.description);

    const resetForm = () => {
      setFormData({
        imageUrl: '',
        work_name: '',
        description: ''
      });
    };
    
    fetch('http://localhost:4600/api/v1/jobs/', {
      method: 'POST',
      body: data,
      headers: config.headers
    })
      .then(response => response.json())
      .then(data => {
        setJobs(data)
        resetForm()
        setOpenForm(false)
        dispatch(getAllJobsThunk())
      })
      .catch(error => console.log(error));
}

console.log(jobs);



const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
    }
  
    const handleDrop = (acceptedFiles) => {
      setFormData({
        ...formData,
        imageUrl: acceptedFiles[0]
      });
    }
    

  return (
 
    <form className="form__job" onSubmit={handleSubmit(submit)}>
      <h1 className="close__form" onClick={handleShow}>X</h1>
        <h1>Crear Producto</h1>
      <div className="content__item">
      <label htmlFor="">Nombre del trabajo</label>
      <input 
      {...register("work_name")}
      type="text" 
      name="work_name"
      value={formData.work_name} 
      onChange={handleChange} />
      </div>

      <div className="content__item">
      <label htmlFor="">Descripcion</label>
      <input 
      {...register("description")}
      type="text" 
      name="description"
      value={formData.description} 
      onChange={handleChange} />
      </div>

      <div className="content__item">
      <label className='subir__img'>
      Subir imagen
        <Dropzone onDrop={handleDrop}>
          {({getRootProps, getInputProps}) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              
            </div>
          )}
        </Dropzone>

      </label>
      </div>
      <button type="submit">Enviar</button>
</form>
  )
}

export default FormJob