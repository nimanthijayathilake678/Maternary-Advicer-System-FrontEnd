import { apiClient } from "../API/ApiServer";
export const babyneonatal = async (values) => {
  try {
    const response = await apiClient.post("/babyNeonatal/addneonatal", values);
    console.log(response);
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// export const getbabyneonatal = async () => {
//   try {
//     const response = await apiClient.get(
//       "/newbornhealth/getbabyHealth/{babyNum}"
//     );
//     console.log(response);
//     return response;
//   } catch (err) {
//     console.error(err);
//     throw err;
//   }
// };
