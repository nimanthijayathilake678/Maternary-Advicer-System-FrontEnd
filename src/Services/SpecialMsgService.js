import { apiClient } from "../API/ApiServer";
export const addSpecialMsg = async (values) => {
  try {
    const response = await apiClient.post("/newmsg/add", values);
    console.log(response);
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getSpecialMsg = async (regNum) => {
  try {
    const response = await apiClient.get(`/newmsg/getmsgInfo/${regNum}`);
    console.log(response);
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
