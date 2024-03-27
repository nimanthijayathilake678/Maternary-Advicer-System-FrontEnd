import { apiClient } from "../API/ApiServer";
export const registerbaby = async (values) => {
  try {
    const response = await apiClient.post("/newbaby/add", values);
    console.log(response);
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getRegisterBaby = async () => {
  try {
    const response = await apiClient.get("/newbaby/getbabyInfo");
    console.log(response);
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getRegisterBabyByBabyNum = async () => {
  try {
    const response = await apiClient.get("/newbaby/getbabyInfo{babyNum}");
    console.log(response);
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
