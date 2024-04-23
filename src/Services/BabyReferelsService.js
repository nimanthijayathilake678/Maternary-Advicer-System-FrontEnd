import { apiClient } from "../API/ApiServer";
export const babyreferels = async (values) => {
  try {
    const response = await apiClient.post(
      "/newbabyimmunereferels/addImmuneReferels",
      values
    );
    console.log(response);
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getbabyreferels = async (babyNum) => {
  try {
    const response = await apiClient.get(
      `/newbabyimmunereferels/getbabyImmuneReferel/${babyNum}`
    );
    console.log(response);
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
