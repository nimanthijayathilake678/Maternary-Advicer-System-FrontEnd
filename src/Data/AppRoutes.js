import ContactUs from "../Pages/ContactUs";
import Home from "../Pages/Home";
import Resource from "../Pages/Resource";
import AboutUs from "../Pages/AboutUs";
import PageNotFound from "../Pages/PageNotFound";
import LoginPersist from "../Components/LoginPersist";
import Authenticate from "../Components/Authenticate";
import MidwifeDashboard from "../Pages/Midwife/MidwifeDashboard";
import MidwifeEligibleFamilies from "../Pages/Midwife/MidwifeEligibleFamilies";
import MidwifePregnancies from "../Pages/Midwife/MidwifePregnancies";
import FamilyDashboard from "../Pages/Family/FamilyDashboard";
import FamilyPregnancies from "../Pages/Family/FamilyPregnancies";
import Login from "../Pages/LoginPage/Login";
import AuthContext, { AuthProvider } from "../Contexts/AuthProvider";
import SideBarContent from "../Components/SideBarContent";
import FamilyProfile from "../Pages/Family/FamilyProfile";
import Unauthorized from "../Pages/Unauthorized";
import MidwifeEligibleCoupleRegistrationForm from "../Pages/Midwife/MidwifeEligibleCoupleRegistrationForm";
import FamilyEligibleFamilyForm from "../Pages/Family/FamilyEligibleFamilyForm";
//import BabyRegistrationStepper from "./Pages/RegistrationPage/BabyRegistration/BabyRegistrationStepper";
import BabyProfile from "../Pages/Family/Baby/BabyProfile";

import VogMessages from "../Pages/VOGDoctor/Messages";
import VogPatients from "../Pages/VOGDoctor/PatientHistory";
import VogDashboard from "../Pages/VOGDoctor/VogDashboard";
import VogPersonal from "../Pages/VOGDoctor/Personal";
import VOGSidebar from "../Components/VOGSidebar";

import Dashboard from "../Pages/MOHAdmin/Dashboard";
import Register from "../Pages/MOHAdmin/Register";
import View from "../Pages/MOHAdmin/View";
import Summary from "../Pages/MOHAdmin/Summary";
import MOHSidebar from "../Components/MOHSidebar";
import Messages from "../Pages/MOHAdmin/Messages";
import Clinic from "../Pages/MOHAdmin/Clinic";

export const AppRoutes = {
  loginpath: { path: "/login", component: <Login /> },
  login: { path: "/", component: <Login /> },

  // Home page routes
  home: { path: "/home", component: <Home /> },

  //FamilyPage routes
  family_home: { path: "/family", component: <FamilyDashboard /> },
  family_eligible_families: {
    path: "/family/eligibleFamilyForm",
    component: <FamilyEligibleFamilyForm />,
  },
  family_pregnancies: {
    path: "/family/pregnancies",
    component: <FamilyPregnancies />,
  },
  family_Profile: {
    path: "/family/familyProfile",
    component: <FamilyProfile />,
  },
  family_baby_profile: {
    path: "/family/babyProfile",
    component: <BabyProfile />,
  },

  //Midwife Page ROutes
  midwife_home: { path: "/midwife", component: <MidwifeDashboard /> },
  midwife_eligible_couple_register: {
    path: "/midwife/eligibleCoupleRegister",
    component: <MidwifeEligibleCoupleRegistrationForm />,
  },
  midwife_eligible_families_register: {
    path: "/midwife/eligibleFamilyRegister",
    component: <MidwifeEligibleFamilies />,
  },
  //   midwife_Profile: {
  //     path: "/family/familyProfile",
  //     component: <MidwifeProfile />,
  //   },
  midwife_pregnancies: {
    path: "/midwife/pregancies",
    component: <MidwifePregnancies />,
  },
};
