import { apiClient } from "../API/ApiServer";

import { Axios } from "axios";

export const sendMail = (values) =>
  apiClient.post("/register/password-reset-request", values);

export const updateNewPassword = (values) =>
  apiClient.post("/register/reset-password", values);
