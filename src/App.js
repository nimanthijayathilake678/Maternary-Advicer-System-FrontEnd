import { AppRoutes } from "./Data/AppRoutes";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthProvider";

function App() {
  let routes = Object.values(AppRoutes);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {routes.map((route, i) => {
            return (
              <Route key={i} path={route.path} element={route.component} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
