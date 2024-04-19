import { apiClient } from "../API/ApiServer";
export const babyimmunization = async (values) => {
  try {
    const response = await apiClient.post("/newbabyimmune/addImmune", values);
    console.log(response);
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getbabyImmunization = async (babyNum) => {
  try {
    const response = await apiClient.get(
      `/newbabyimmune/getbabyImmune/${babyNum}`
    );
    console.log(response);
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
