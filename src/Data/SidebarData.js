import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { MdPregnantWoman } from "react-icons/md";
import { useLocation } from "react-router-dom";

export const family = [
  {
    name: "Home",
    icon: <HomeRoundedIcon />,
    path: "/admin",
  },

  {
    name: "Dashboard",
    path: "/family",
    icon: <RxDashboard />,
  },
  {
    name: "Eligible Families",
    path: "/family/eligibleFamilies",
    icon: <MdOutlineFamilyRestroom />,
  },
  {
    name: "Pregnancies",
    path: "/family/pregnancies",
    icon: <MdPregnantWoman />,
  },
  {
    name: "My Babies",
    icon: <MdPregnantWoman />,
    subMenu: [
      {
        name: "Baby Profile",
        path: "/family/babyDashboard/babyProfile",
      },
      {
        name: "Baby Immunization",
        path: "/family/babyDashboard/immunization",
      },
      {
        name: "Baby Nutrients",
        path: "/family/babyDashboard/nutrients",
      },
      {
        name: "Baby Growth",
        path: "/family/babyDashboard/weight",
      },
      {
        name: "Baby Health",
        path: "/family/babyDashboard/babyhealth",
      },
    ],
  },
];

export const vog = [
  {
    name: "Dashboard",
    path: "/vog",
    icon: <RxDashboard />,
  },
  {
    name: "Personal Information",
    path: "/vog/personal_Info",
    icon: <MdOutlineFamilyRestroom />,
  },
  {
    name: "Patient Details",
    path: "/vog/patient_history",
    icon: <MdPregnantWoman />,
  },
  {
    name: "Add Patient Details",
    path: "/vog/add_patients_details",
    icon: <MdPregnantWoman />,
  },
];

export const midwife = [
  {
    name: "Home",
    icon: <HomeRoundedIcon />,
    path: "/admin",
  },
  {
    name: "Dashboard",
    path: "/midwife",
    icon: <RxDashboard />,
  },
  {
    name: "Eligible Families",
    path: "/midwife/eligibleFamilies",
    icon: <MdOutlineFamilyRestroom />,
  },
  {
    name: "Pregnancies",
    path: "/midwife/pregnancies",
    icon: <MdPregnantWoman />,
  },
];
