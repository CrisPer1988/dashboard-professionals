import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import config from "../../utils/getConfig";
import axiosInstance from "../../utils/getConfig";

export const jobsSlices = createSlice({
    name: "jobs",
    initialState: null,
    reducers: {
        setJobs: (state, action) => action.payload
    }
})

export const {setJobs} = jobsSlices.actions

export default jobsSlices.reducer

export const getAllJobsThunk = () => (dispatch:any) => {
 const url = 'http://localhost:4600/api/v1/jobs/me'

    axios.get(url, config)
    .then(res => dispatch(setJobs(res.data.jobs)))  
    .catch(err => console.log(err))
}
