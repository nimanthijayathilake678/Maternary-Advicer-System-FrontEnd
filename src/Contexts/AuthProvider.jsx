import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    
    // {
    //   name:"Binishi",
    //   authRole: "midwife"
    // }

    //  {
    //   name:"Binishi",
    //   authRole: "family"
    // }

    // {
    //   name:"Binishi",
    //   authRole: "admin"
    // }

    {
      name:"Binishi",
      authRole: "vog"
    }

    
      //null
    
  );

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
