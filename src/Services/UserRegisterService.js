import { apiClient } from "../API/ApiServer";
export const userregistration = async (postData) => {
  try {
    const response = await apiClient.post("/newuser/add", postData);
    console.log(response);
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
