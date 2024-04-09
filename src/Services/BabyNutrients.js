import { apiClient } from "../API/ApiServer";
export const babynutrients = async (values) => {
  try {
    const response = await apiClient.post(
      "/babyNutrients/addnutrients",
      values
    );
    console.log(response);
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getbabynutrients = async () => {
  try {
    const response = await apiClient.get(
      "/babyNutrients/getbabyNutrients/{babyNum}"
    );
    console.log(response);
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
