import { Outlet } from "react-router-dom";
import useRefreshLogin from "../Hooks/useRefreshLogin.js";
import useAuth from "../Hooks/useAuth.js";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Typography } from "@mui/material";

const LoginPersist = () => {
  const { auth } = useAuth();
  const refresh = useRefreshLogin();
  const [isPageLoading, setIsPageLoading] = useState(true);

  // if the page was refreshed then aat the time of loading
  useEffect(() => {
    let mounted = true;
    const verifyUser = async () => {
      try {
        await refresh();
      } catch (error) {
        console.error(error);
      } finally {
        mounted && setIsPageLoading(false);
        // setIsPageLoading(false);
      }
    };

    !auth ? verifyUser() : setIsPageLoading(false);
    return () => {
      mounted = false;
    };
  }, [auth, refresh]);

  const boxStyles = {
    display: "flex",
    height: "100vh",
    flexDirection: "column",
    width: "100vw",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      {isPageLoading ? (
        <Box sx={boxStyles}>
          <Typography variant="h4" component="h4" gutterBottom>
            Please Wait...
          </Typography>
          <CircularProgress size={60} />
        </Box>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default LoginPersist;
