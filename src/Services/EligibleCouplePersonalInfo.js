import { apiClient } from "../API/ApiServer";
export const saveEligibleCouplePersonalInfo = async (values) => {
  try {
    const response = await apiClient.post("/personalInfo", values);
    console.log(response);
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
};