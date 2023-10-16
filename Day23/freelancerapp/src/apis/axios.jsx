import axios from 'axios'
const authApi=axios.create(({
    baseURL:process.env.REACT_APP_FREELANCERAUTH_BASE_URL
}))

const freelancerApi = axios.create(({
    baseURL:process.env.REACT_APP_FREELANCER_BASE_URL,
    headers:{
        Authorization:"Bearer "+localStorage.getItem('token')
    }
}))

export {authApi,freelancerApi};