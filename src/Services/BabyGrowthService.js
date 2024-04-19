import { apiClient } from "../API/ApiServer";
export const babygrowths = async (values) => {
  try {
    const response = await apiClient.post("/babyGrowth/addgrowth", values);
    console.log(response);
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getbabygrowths = async (babyNum) => {
  try {
    const response = await apiClient.get(`/babyGrowth/getgrowth/${babyNum}`);
    console.log(response);
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
