import ContactUs from "../Pages/ContactUs";
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
import MohDrDashboard from "../Pages/MohDoctor/MohDrDashboard";

import MOHDashboard from "../Pages/MOHAdmin/Dashboard";
import Register from "../Pages/MOHAdmin/Register";
import View from "../Pages/MOHAdmin/View";
import Summary from "../Pages/MOHAdmin/Summary";
import Messages from "../Pages/MOHAdmin/Messages";
import Clinic from "../Pages/MOHAdmin/Clinic";
import BabyDashboard from "../Pages/Family/Baby/BabyDashboard";
import FamilyMyBabies from "../Pages/Family/FamilyMyBabies";
import RegisterdBabies from "../Pages/Midwife/RegisterdBabies";
import BabyRegistrationForm1 from "../Pages/Family/Baby/RegistrationPage/BabyRegistration/BabyRegistrationForm1";
import BabyImmunization from "../Pages/Family/Baby/BabyImmunization";
import BabyReferels from "../Pages/Family/Baby/BabyReferels";
import BabyNutrients from "../Pages/Family/Baby/BabyNutrients";
import BabyWeight from "../Pages/Family/Baby/BabyWeight";
import LandingPage from "../Pages/Resources/LandingPage";
import BabyCare from "../Pages/Resources/BabyCare";
import BirthControl from "../Pages/Resources/BirthControl";
import Pregnancy from "../Pages/Resources/Pregnancy";
import Planing from "../Pages/Resources/Planing";
import Home from "../Pages/Home";
import BabyNewBornHelath from "../Pages/Family/Baby/BabyNewBornHelath";
import BabyProfileForm1 from "../Components/BabyProfileComponents/BabyProfileForm1";
import BabyDetails from "../Pages/Family/Baby/BabyDetails";

import PregnancyRegistration from "../Pages/Midwife/PregnancyRegistration";
import BabyRegistrationForm2 from "../Pages/Family/Baby/RegistrationPage/BabyRegistration/BabyRegistrationForm2";
import BabyRegistrationForms from "../Pages/Family/Baby/RegistrationPage/BabyRegistration/BabyRegistrationForms";
import VogRegisterdBabies from "../Pages/VOGDoctor/VogRegisterdBabies";
import AddRefferal from "../Pages/VOGDoctor/AddRefferal";
import SpecialMsgDisplay from "../Pages/SpecialMsgDisplay";
import RegisteredPregMothers from "../Pages/Midwife/RegisteredPregnancyMothers";
import PregnantMotherProfileView from "../Pages/Midwife/PregnantMotherProfileView";
import PregnancyRegView from "../Pages/Midwife/PregnancyRegView";
import FieldClinicInformationForm from "../Pages/Midwife/MidwifePregnancyForms/FieldClinicInformationForm";
import ClinicCareInformationForm from "../Pages/MohDoctor/MohDrPregnancyForms/ClinicCareInformationForm";
import ChartView from "../Pages/Midwife/MidwifePregnancyForms/ChartView";
import ScreeningForm from "../Pages/Midwife/MidwifePregnancyForms/ScreeningForm";
import TetanusTexoidForm from "../Pages/Midwife/MidwifePregnancyForms/TetanusTexoidForm";
import SessionAttendanceForm from "../Pages/Midwife/MidwifePregnancyForms/SessionAttendanceForm";
import FamilyPlanningForm from "../Pages/Midwife/MidwifePregnancyForms/FamilyPlanningForm";
import DeliveryCare from "../Pages/Midwife/MidwifePregnancyForms/DeliveryCare";
import PostpartumFieldCare from "../Pages/Midwife/MidwifePregnancyForms/PostpartumFieldCare";
import IECMaterial from "../Pages/Midwife/MidwifePregnancyForms/IECMaterial"

export const AppRoutes = {
  login: { path: "/login", component: <Login /> },

  // Home page routes
  home: { path: "/", component: <Home /> },

  resources_1: {
    path: "/birthcontrol",
    component: <BirthControl />,
  },
  resources_2: {
    path: "/planingbaby",
    component: <Planing />,
  },
  resources_3: {
    path: "/pregnancy",
    component: <Pregnancy />,
  },
  resources_4: {
    path: "/babycare",
    component: <BabyCare />,
  },

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
    path: `/family/babyDashboard/babyProfile/:id`,
    component: <BabyDetails />,
  },

  family_baby_dashboard: {
    path: `/family/babyDashboard/:id`,
    component: <BabyDashboard />,
  },

  family_my_babies: {
    path: "/family/mybabies",
    component: <FamilyMyBabies />,
  },
  family_baby_immunization: {
    path: `/family/babyDashboard/immunization/:id`,
    component: <BabyImmunization />,
  },

  family_baby_referels: {
    path: `/family/babyDashboard/immunization/referels/:id`,
    component: <BabyReferels />,
  },

  family_baby_nutrients: {
    path: `/family/babyDashboard/nutrients/:id`,
    component: <BabyNutrients />,
  },
  family_baby_weight: {
    path: `/family/babyDashboard/weight/:id`,
    component: <BabyWeight />,
  },
  family_baby_newborn_health: {
    path: `/family/babyDashboard/babyhealth/:id`,
    component: <BabyNewBornHelath />,
  },
  family_baby_special_notes: {
    path: `/family/babyDashboard/babynote/:id`,
    component: <SpecialMsgDisplay />,
  },

  //Midwife Page ROutes
  midwife_home: { path: "/midwife", component: <MidwifeDashboard /> },
  midwife_eligible_couple_register: {
    path: "/midwife/eligibleFamilies/createAccountForNewCouple",
    component: <MidwifeEligibleCoupleRegistrationForm />,
  },
  midwife_eligible_families_register: {
    path: "/midwife/eligibleFamilies",
    component: <MidwifeEligibleFamilies />,
  },

  midwife_pregnancy_registration: {
    path: "/midwife/pregnancyRegistration",
    component: <PregnancyRegistration />,
  },

  midwife_registered_pregnant_mothers:{
    path:"/midwife/registeredPregMothers",
    component: <RegisteredPregMothers/>,
  },

  midwife_pregnant_mother_profile_view:{
    path:"/midwife/registeredPregMothers/profileView",
    component:<PregnantMotherProfileView/>,
  },
  midwife_pregnancy_info_view:{
    path: "/midwife/registeredPregMothers/profileView/pregRegDetails",
    component:<PregnancyRegView/>,
  },

  
  midwife_pregnancies: {
    path: "/midwife/pregancies",
    component: <MidwifePregnancies />,
  },

  midwife_registerdbabies: {
    path: `/midwife/registerdbabies`,
    component: <RegisterdBabies />,
  },
  midwife_baby_dashboard: {
    path: `/midwife/babyDashboard/:id`,
    component: <BabyDashboard />,
  },
  midwife_baby_profile: {
    path: `/midwife/babyDashboard/babyProfile/:id`,
    component: <BabyDashboard />,
  },

  midwife_baby_immunization: {
    path: `/midwife/babyDashboard/immunization/:id`,
    component: <BabyImmunization />,
  },

  midwife_baby_referels: {
    path: `/midwife/babyDashboard/immunization/referels/:id`,
    component: <BabyReferels />,
  },

  midwife_baby_nutrients: {
    path: `/midwife/babyDashboard/nutrients/:id`,
    component: <BabyNutrients />,
  },
  midwife_baby_weight: {
    path: `/midwife/babyDashboard/weight/:id`,
    component: <BabyWeight />,
  },
  midwife_baby_newborn_health: {
    path: `/midwife/babyDashboard/babyhealth/:id`,
    component: <BabyNewBornHelath />,
  },
  midwife_baby_special_notes: {
    path: `/midwife/babyDashboard/babynote/:id`,
    component: <SpecialMsgDisplay />,
  },

  midwife_field_clinic:{
    path:"/midwife/registeredPregMothers/profileView/fieldClinic",
    component:<FieldClinicInformationForm/>
  },

  midwife_clinic_care:{
    path:"/midwife/registeredPregMothers/profileView/clinicCare",
    component:<ClinicCareInformationForm/>,
  },

  midwife_chart_view:{
    path:"/midwife/registeredPregMothers/profileView/chartView",
    component:<ChartView/>
  },
  
  midwife_screening:{
    path:"/midwife/registeredPregMothers/profileView/screening",
    component:<ScreeningForm/>
  },
 
  midwife_teanus_texoid:{
    path:"/midwife/registeredPregMothers/profileView/tetanusTexoidImmunization",
    component:<TetanusTexoidForm/>
  },

  midwife_session_attendance:{
    path:"/midwife/registeredPregMothers/profileView/sessionAttendance",
    component:<SessionAttendanceForm/>
  },

  midwife_iec_material:{
    path:"/midwife/registeredPregMothers/profileView/iecMaterial",
    component:<IECMaterial/>
  },

  midwife_family_planning:{
    path:"/midwife/registeredPregMothers/profileView/familyPlanning",
    component:<FamilyPlanningForm/>
  },

  midwife_delivery_care:{
    path:"/midwife/registeredPregMothers/profileView/deliveryCare",
    component:<DeliveryCare/>
  },

  midwife_postpartum_care:{
    path:"/midwife/registeredPregMothers/profileView/postpartumCare",
    component:<PostpartumFieldCare/>
  },

  //moh page routes
  moh: {
    path: "/moh",
    component: <MOHDashboard />,
  },
  moh_register: {
    path: "/moh/register",
    component: <Register />,
  },
  moh_view: {
    path: "/moh/view",
    component: <View />,
  },
  moh_summary: {
    path: "/moh/summary",
    component: <Summary />,
  },
  moh_summary: {
    path: "/moh/clinic",
    component: <Clinic />,
  },
  moh_message: {
    path: "/moh/messages",
    component: <Messages />,
  },

  // vog page routes

  vog: {
    path: "/vog",
    component: <VogDashboard />,
  },
  vog_newbaby: {
    path: "/vog/newbaby",
    component: <BabyRegistrationForm1 />,
  },
  vog_babyhealth: {
    path: "/vog/newbabyhealth",
    component: <BabyRegistrationStepper />,
  },
  vog_personal: {
    path: "/vog/personal_Info",
    component: <Personal />,
  },
  vog_messages: {
    path: "/vog/messages",
    component: <VogMessages />,
  },
  vog_patients_history: {
    path: "/vog/patient_history",
    component: <VogPatients />,
  },
  vog_add_patients_details: {
    path: "/vog/add_patients_details",
    component: <AddPatientsDetails />,
  },
  vog_add_patients_details_refferals: {
    path: "/vog/add_patients_details/refferal",
    component: <AddRefferal />,
  },

  vog_registerd_babies: {
    path: "/vog/show_registerd_babies",
    component: <VogRegisterdBabies />,
  },

  //Moh doctor
  mohdoc_dashboard: {
    path: "/mohdrdash",
    component: <MohDrDashboard />,
  },
  mohdoc_eligibleFam: {
    path: "/mohdrdash/eligible_families",
    component: <MohDrDashboard />,
  },
  mohdoc_pregnat_moms: {
    path: "/mohdrdash/pregnat_moms",
    component: <MohDrDashboard />,
  },
  mohdoc_babies: {
    path: "/mohdrdash/babies",
    component: <MohDrDashboard />,
  },
};
