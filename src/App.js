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
import BabyProfile from "./Pages/Family/Baby/BabyProfile";

import VogMessages from "./Pages/VOGDoctor/Messages";
import VogPatients from "./Pages/VOGDoctor/PatientHistory";
import VogDashboard from "./Pages/VOGDoctor/VogDashboard";
import VogPersonal from "./Pages/VOGDoctor/Personal";
import VOGSidebar from "./Components/VOGSidebar";

import Dashboard from "./Pages/MOHAdmin/Dashboard";
import Register from "./Pages/MOHAdmin/Register";
import View from "./Pages/MOHAdmin/View";
import Summary from "./Pages/MOHAdmin/Summary";
import MOHSidebar from "./Components/MOHSidebar";
import Messages from "./Pages/MOHAdmin/Messages";
import Clinic from "./Pages/MOHAdmin/Clinic";

function App() {
  function VOGRoutes() {
    <VOGSidebar>
      <Routes>
        <Route path="/vogdash" element={<VogDashboard />} />
        <Route path="/vogpersonal" element={<VogPersonal />} />
        <Route path="/vogpatients" element={<VogPatients />} />
        <Route path="/vogmessages" element={<VogMessages />} />
      </Routes>
    </VOGSidebar>;
  }

  function MOHAdminRoutes() {
    <MOHSidebar>
      <Routes>
        <Route path="/mohadmindash" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/view" element={<View />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/clinic" element={<Clinic />} />
      </Routes>
    </MOHSidebar>;
  }

  const [count, setCount] = useState(0);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route element={<LoginPersist />}>
              <Route path="login" element={<Login />} />
              <Route element={<MainContent />}>
                <Route path="/home" element={<Home />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/resource" element={<Resource />} />

                <Route element={<SideBarContent />}>
                  <Route
                    path="/register"
                    element={<BabyRegistrationStepper />}
                  />
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
                      <Route
                        path="babyprofile"
                        element={<BabyProfile />}
                      ></Route>
                    </Route>
                  </Route>
                </Route>
              </Route>
            </Route>
            <Route path="unauthorized" element={<Unauthorized />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
