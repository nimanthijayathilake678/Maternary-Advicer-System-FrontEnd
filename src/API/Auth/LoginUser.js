import axios, { SERVER_URL } from "../api";

const LoginUser = async (credentials) => {
  const URL = SERVER_URL + "/authenticate";
  return await axios.post(URL, credentials);
};

export default LoginUser;

// import axios from "axios";

// const LoginUser = async ({ username, password }) => {
//   try {
//     const response = await axios.post("/api/login", { username, password });
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export default LoginUser;
