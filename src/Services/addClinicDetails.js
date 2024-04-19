import { apiClient } from "../API/ApiServer";
export const addClinicDetails = async (values) => {
    try {
      const response = await apiClient.post("/hospitalClinicCare/add", values);
      console.log(response);
      return response;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };


  export const getClinicDetailsByCoupleId = async (coupleid) => {
    try {
      const response = await apiClient.get(`/hospitalClinicCare/${coupleid}`);
      console.log(response);
      return response;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };