import { apiClient } from "../API/ApiServer";

export const registerNewUser = async (values) => {
    try {
      const response = await apiClient.post("/newuser/add", values);
      console.log(response);
      return response;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  export const registerUsersView = async (values) => {
    try {
      const response = await apiClient.get("/newuser", values);
      console.log(response);
      return response;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };