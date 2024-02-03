import React from "react";
import axios from "../API/api.js";
import useAuth from "./useAuth.js";

const useRefreshLogin = () => {
  const { setAuth } = useAuth();

  return async () => {
    try {
      // let response = await axios.get("http://localhost:8080/authenticate");
      // setAuth(response?.data?.data || null);
      // return response?.data;

      // setAuth({
      //   name: "Binishi",
      //   authRole:"midwife"
      // })

      // setAuth({
      //   name: "Binishi",
      //   authRole:"family"
      // })

      // setAuth({
      //   name: "Binishi",
      //   authRole:"admin"
      // })

      setAuth({
        name: "Binishi",
        authRole: "vog",
      });

      //setAuth(null);
    } catch (error) {
      console.log(error?.response);
      setAuth(null);
      return null;
    }
  };
};

export default useRefreshLogin;
