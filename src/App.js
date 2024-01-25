import Login from "./Pages/LoginPage/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BabyRegistrationStepper from "./Pages/RegistrationPage/BabyRegistration/BabyRegistrationStepper";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<BabyRegistrationStepper />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
