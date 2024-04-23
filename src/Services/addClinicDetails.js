import { apiClient } from "../API/ApiServer";
export const addClinicDetails = async (values) => {
    try {
      const response = await apiClient.post("/hospitalClinicCare", values);
      console.log(response);
      return response;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  export const getClinicDetails = async (values) => {
    try {
      const response = await apiClient.get("/hospitalClinicCare", values);
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