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
import BabyRegistrationStepper from "../Pages/Family/Baby/RegistrationPage/BabyRegistration/BabyRegistrationStepper";
import BabyProfile from "../Pages/Family/Baby/BabyProfile";

import VogMessages from "../Pages/VOGDoctor/Messages";
import VogPatients from "../Pages/VOGDoctor/PatientHistory";
import VogDashboard from "../Pages/VOGDoctor/VogDashboard";
import AddPatientsDetails from "../Pages/VOGDoctor/AddPatientsDetails";
import Personal from "../Pages/VOGDoctor/Personal";


import Dashboard from "../Pages/MOHAdmin/Dashboard";
import Register from "../Pages/MOHAdmin/Register";
import View from "../Pages/MOHAdmin/View";
import Summary from "../Pages/MOHAdmin/Summary";
import MOHSidebar from "../Components/MOHSidebar";
import Messages from "../Pages/MOHAdmin/Messages";
import Clinic from "../Pages/MOHAdmin/Clinic";
import BabyDashboard from "../Pages/Family/Baby/BabyDashboard";
import MOHDashboard from "../Pages/MOHAdmin/Dashboard";
import FamilyMyBabies from "../Pages/Family/FamilyMyBabies";
import RegisterdBabies from "../Pages/Midwife/RegisterdBabies";
import BabyRegistrationForm1 from "../Pages/Family/Baby/RegistrationPage/BabyRegistration/BabyRegistrationForm1";
import BabyImmunization from "../Pages/Family/Baby/BabyImmunization";
import BabyReferels from "../Pages/Family/Baby/BabyReferels";
import BabyNutrients from "../Pages/Family/Baby/BabyNutrients";
import BabyWeight from "../Pages/Family/Baby/BabyWeight";
import RegisterNewBorn from "../Pages/VOGDoctor/RegisterNewBorn";


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
    path: "/family/babyDashboard/babyProfile",
    component: <BabyProfile />,
  },
  family_baby_dashboard: {
    path: "/family/babyDashboard",
    component: <BabyDashboard />,
  },

  family_my_babies: {
    path: "/family/mybabies",
    component: <FamilyMyBabies />,
  },
  family_baby_immunization: {
    path: "/family/babyDashboard/immunization",
    component: <BabyImmunization />,
  },

  family_baby_referels: {
    path: "/family/babyDashboard/immunization/referels",
    component: <BabyReferels />,
  },

  family_baby_nutrients: {
    path: "/family/babyDashboard/nutrients",
    component: <BabyNutrients />,
  },
  family_baby_weight: {
    path: "/family/babyDashboard/weight",
    component: <BabyWeight />,
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

  midwife_registerdbabies: {
    path: "/midwife/registerdbabies",
    component: <RegisterdBabies />,
  },
  //moh page routes
  moh: {
    path: "/moh",
    component: <Dashboard />,
  },
  moh: {
    path: "/vog",
    component: <VogDashboard />,
  },

  // vog page routes
  // vog: {
  //   path: "/vog/newbaby",
  //   component: <BabyRegistrationStepper />,
  // },
  vog: {
    path: "/vog/newbaby",
    component: <BabyRegistrationForm1 />,
  },
  vog_personal: {
    path: "/vog/personal_Info",
    component: <Personal />,
  },
  vog_messages: {
    path: "/vog/messages",
    component: < VogMessages/>,
  },
  vog_patients_history: {
    path: "/vog/patient_history",
    component: < VogPatients/>,
  },



  vog_add_patients_details: {
    path: "/vog/add_patients_details",
    component: < AddPatientsDetails/>,
  },

};
