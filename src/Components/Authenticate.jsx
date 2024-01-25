// this component is used for protected routes
import { Outlet, useLocation, Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import unauthorized from "../Pages/Unauthorized";


const Authenticate = ({ allowedRole }) => {
  const { auth } = useAuth();
  const location = useLocation(); // to redirect the user to where he/she came from

  if ( auth?.authRole && auth?.authRole===allowedRole) {
    return <Outlet />
  }
  else if (auth) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
};



export default Authenticate;