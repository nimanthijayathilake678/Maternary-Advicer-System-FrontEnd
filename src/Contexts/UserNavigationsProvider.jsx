import { createContext, useState } from "react";

const UserNavigationsContext = createContext({});

export const UserNavigationsProvider = ({ children }) => {
  const [userNavigations, setUserNavigations] = useState([]);
  return (
    <UserNavigationsContext.Provider
      value={{ userNavigations, setUserNavigations }}
    >
      {children}
    </UserNavigationsContext.Provider>
  );
};
export default UserNavigationsContext;
