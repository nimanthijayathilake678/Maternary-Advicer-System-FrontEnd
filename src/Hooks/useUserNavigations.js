import { useContext } from "react";
import UserNavigationsContext from "../Contexts/UserNavigationsProvider.jsx";

const useUserNavigations = () => {
  return useContext(UserNavigationsContext);
};

export default useUserNavigations;
