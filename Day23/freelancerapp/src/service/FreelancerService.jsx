import { freelancerApi } from "../apis/axios";

class FreelancerService {
  getById(id) {
    return freelancerApi.get(`/getbyid/${id}`);
  }  


}
// eslint-disable-next-line
export default new FreelancerService();
