import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContent from "./Components/MainContent";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Resource from "./Pages/Resource";
import AboutUs from "./Pages/AboutUs";
import PageNotFound from "./Pages/PageNotFound";
import LoginPersist from "./Components/LoginPersist";
import Authenticate from "./Components/Authenticate";
import MidwifeDashboard from "./Pages/Midwife/MidwifeDashboard";
import MidwifeEligibleFamilies from "./Pages/Midwife/MidwifeEligibleFamilies";
import MidwifePregnancies from "./Pages/Midwife/MidwifePregnancies";
import FamilyDashboard from "./Pages/Family/FamilyDashboard";
import FamilyPregnancies from "./Pages/Family/FamilyPregnancies";
import Login from "./Pages/LoginPage/Login";
import { AuthProvider } from "./Contexts/AuthProvider";
import SideBarContent from "./Components/SideBarContent";
import FamilyProfile from "./Pages/Family/FamilyProfile";
import Unauthorized from "./Pages/Unauthorized";
import MidwifeEligibleCoupleRegistrationForm from "./Pages/Midwife/MidwifeEligibleCoupleRegistrationForm";
import FamilyEligibleFamilyForm from "./Pages/Family/FamilyEligibleFamilyForm";
import BabyRegistrationStepper from "./Pages/RegistrationPage/BabyRegistration/BabyRegistrationStepper";
import LandingPage from "./Pages/Resources/LandingPage";
import BabyCare from "./Pages/Resources/BabyCare";
import VogDashboard from "./Pages/VOGDoctor/VogDashboard";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/">
            <Route element={<LoginPersist />}>
              <Route path="login" element={<Login />} />
              <Route element={<MainContent />}>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/resource" element={<BabyCare />} />

                <Route element={<SideBarContent />}>
                  <Route path="/register" element={<BabyRegistrationStepper />}/>
                    <Route element={<Authenticate allowedRole={"midwife"} />}>
                    <Route path="/midwife/">
                      <Route path="" element={<MidwifeDashboard />} />
                      <Route path="eligibleFamilies/">
                        <Route path="" element={<MidwifeEligibleFamilies />} />
                        <Route
                          path="register"
                          element={<MidwifeEligibleCoupleRegistrationForm />}
                        />
                      </Route>
                      <Route
                        path="pregnancies"
                        element={<MidwifePregnancies />}
                      />
                    </Route>
                  </Route>

                  <Route element={<Authenticate allowedRole={"family"} />}>
                    <Route path="/family/">
                      <Route path="" element={<FamilyDashboard />} />
                      <Route
                        path="eligibleFamilies"
                        element={<FamilyEligibleFamilyForm />}
                      />
                      <Route
                        path="pregnancies"
                        element={<FamilyPregnancies />}
                      />
                      <Route path="profile" element={<FamilyProfile />}></Route>
                    </Route>
                  </Route>

                  <Route elementt={<Authenticate allowedRole={"vog"} />}>
                    <Route path="/vog/">
                      <Route path="" element={<VogDashboard/>}/>
                    </Route>
                  </Route>

                  
                </Route>
              </Route>
            </Route>
            <Route path="unauthorized" element={<Unauthorized />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
