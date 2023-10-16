import { authApi } from "../apis/axios";
class FreelancerAuthService{
    Login(login){
        return authApi.post('/login',login);
    }
    SignUp(signup){
        return authApi.post('/register',signup);
    }
}
// eslint-disable-next-line
export default new FreelancerAuthService();