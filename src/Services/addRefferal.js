import { apiClient } from "../API/ApiServer";
export const addRefferal = async (values) => {
    try {
      const response = await apiClient.post("/addRefferal", values);
      console.log(response);
      return response;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };
