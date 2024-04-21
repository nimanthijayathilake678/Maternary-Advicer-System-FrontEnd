import { apiClient } from "../API/ApiServer";
export const addchatmsg = async (values) => {
  try {
    const response = await apiClient.post("/chatforum/addchat", values);
    console.log(response);
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getchatmsg = async () => {
  try {
    const response = await apiClient.get(`/chatforum/getmsg`);
    console.log(response);
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
