import { configureStore } from "@reduxjs/toolkit";
import userReducer  from './userSlice'
import dashboardNav2ViewReducer  from './dashboardNav2ViewSlice'
import activenav1editReducer from './editAvailabilitySlice'
export default configureStore({
    reducer :{
        user:userReducer,
        dashboardNav2View:dashboardNav2ViewReducer,
        activenav1edit:activenav1editReducer,
    }
})