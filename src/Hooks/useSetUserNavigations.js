import { useEffect, useContext } from "react";
import UserNavigationsContext from "../Contexts/UserNavigationsProvider";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const useSetUserNavigations = (navigations) => {
  const { setUserNavigations } = useContext(UserNavigationsContext);
  const { auth } = useAuth();
  const Role = auth?.authRole;
  const navigate = useNavigate();

  useEffect(() => {
    !Role && navigate("/login");

    navigations = navigations.map((navigation, index) => {
      return {
        name: navigation.name,
        link:
          (String(navigation.link).includes("/" + Role) ? "" : "/" + Role) +
          navigation.link,
      };
    });
    setUserNavigations(navigations);
  }, []);
};

export default useSetUserNavigations;
