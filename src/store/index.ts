import { configureStore } from "@reduxjs/toolkit"
import jobs from "./slices/jobs.slice"

export default configureStore({
    reducer: {
        jobs
    }
})