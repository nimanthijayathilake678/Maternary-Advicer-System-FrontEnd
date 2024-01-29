import { apiClient } from "../ApiServer";

export const executeJwtAuthenticationService = (username, password) =>
  apiClient.post("/authenticate", { username, password });

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
