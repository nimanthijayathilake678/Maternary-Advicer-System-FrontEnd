import { apiClient } from "../API/ApiServer";
import { executeJwtAuthenticationService } from "../API/Auth/LoginUser";

//const { createContext, useContext, useState, useEffect } = require("react");
const { createContext, useContext, useState, useEffect } = require("react");

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [token, setToken] = useState(null);
  const [position, setPosition] = useState(null);

  const role = null;

  useEffect(() => {
    console.log("User:", user);
    console.log("IsAuthenticated:", isAuthenticate);
    console.log("Position:", position);
  }, [user, isAuthenticate, position]);

  async function login(username, password) {
    try {
      const response = await executeJwtAuthenticationService(
        username,
        password
      );

      if (response.status == 200) {
        console.log("Success!");
        console.log("Success!");
        const jwtToken = "Bearer " + response.data.jwtToken;
        const responseData = response.data;
        const { user: userData } = responseData;
        const { position: positionData } = userData;

        setIsAuthenticate(true);
        setUser(userData);
        setUser(userData);
        setToken(jwtToken);
        setPosition(positionData);
        setPosition(positionData);

        apiClient.interceptors.request.use((config) => {
          console.log("intercepting and adding a token");
          config.headers.Authorization = jwtToken;
          return config;
        });
        console.log(user);
        console.log(userData);
        console.log(isAuthenticate);
        console.log(user);
        console.log(userData);
        console.log(isAuthenticate);
        return true;
      } else {
        logout();
        console.error(response.status);
        return false;
      }
    } catch (error) {
      console.error("Catch error");
      logout();
      return false;
    }
  }
  function logout() {
    setIsAuthenticate(false);
    setToken(null);
    setUser(null);
  }

  async function getPosition() {
    return Promise.resolve(position);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticate,
        user,
        login,
        logout,
        token,
        position,
        getPosition,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
