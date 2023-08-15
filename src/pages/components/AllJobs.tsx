import {  useEffect } from "react"
import "./styles/allJobs.css"
import { useDispatch, useSelector } from "react-redux"
import { getAllJobsThunk } from "../../store/slices/jobs.slice"
import axios from "axios"


const AllJobs = () => {
   const {jobs} = useSelector((state:any) => state)
   const dispatch = useDispatch()
   
   useEffect(() => {
    dispatch(getAllJobsThunk())
   }, [])

   const deleteJob = (id) => {
    const url = `http://localhost:4600/api/v1/jobs/${id}`

    axios.delete(url)
    .then(res => {
      console.log(res)
      dispatch(getAllJobsThunk())
    })
    .catch(err => console.log(err))
   }

   console.log(jobs);
   console.log(localStorage.getItem("token"));
   
  return (
    <div>
      <h1 className="title">Mis trabajos</h1>
      <div className="content__card">
       {
        jobs?.map((job:any) => (
            <div className="card" key={job.id}>
              <div>
              <h2>{job.work_name}</h2>
                <h4>{job.description}</h4>
              </div>
                
                <img className="img__job" src={job.imageUrl} alt="" />
                <div className="content__buttons">
                <button className="btn" onClick={() => deleteJob(job.id)}>Eliminar</button>
                <button className="btn btn__edit">Editar</button>
                </div>
                
            </div>
        ))
       }
       </div>
    </div>
  )
}

export default AllJobs