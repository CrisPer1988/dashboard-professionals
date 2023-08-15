import { useState } from "react";
import AllJobs from "./components/AllJobs";
import FormJob from "./components/FormJob";
import "./styles/job.css";

const Job = () => {
  const [openForm, setOpenForm] = useState(false)

  const handleShow = () =>{
    setOpenForm(!openForm)
  }

  return (
    <div>
      <h1 onClick={handleShow} className="create__job">+</h1>
      {
        openForm ? <FormJob handleShow={handleShow} setOpenForm={setOpenForm} /> : ""
      }
      
      <AllJobs />
    </div>
  );
};

export default Job;
