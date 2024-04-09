import { apiClient } from "../API/ApiServer";
export const babynewbornhealth = async (values) => {
  try {
    const response = await apiClient.post(
      "/newbornhealth/addnewbornhealth",
      values
    );
    console.log(response);
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getbabynewbornhealth = async () => {
  try {
    const response = await apiClient.get(
      "/newbornhealth/getbabyHealth/{babyNum}"
    );
    console.log(response);
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
