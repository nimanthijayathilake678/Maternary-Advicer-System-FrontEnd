import { apiClient } from "../API/ApiServer";

export const addClinicDate = async (values) => {
    try {
      const response = await apiClient.post("/clinicDate", values);
      console.log(response);
      return response;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  export const getClinicDates = async () => {
    try {
      const response = await apiClient.get("/clinicDate");
      console.log(response);
      return response;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };