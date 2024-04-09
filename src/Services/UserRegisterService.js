import { apiClient } from "../API/ApiServer";
export const userregistration = async (values) => {
  try {
    const response = await apiClient.post("/newuser/add", values);
    console.log(response);
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
