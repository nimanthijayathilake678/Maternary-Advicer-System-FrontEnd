import React, { useEffect } from "react";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { MdPregnantWoman } from "react-icons/md";
import { useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

export default function SideBar() {
  const { auth, setAuth } = useAuth();
  const userRole = auth?.authRole;
  const location = useLocation();

  const midwifeRoutes = [
    {
      name: "Dashboard",
      link: "/midwife",
      icon: <RxDashboard className="w-6 h-auto " />,
      current: location.pathname === "/",
    },
    {
      name: "Eligible Families",
      link: "/midwife/eligibleFamilies",
      icon: <MdOutlineFamilyRestroom className="w-6 h-auto" />,
      current: location.pathname === "/eligibleFamilies",
    },
    {
      name: "Pregnancies",
      link: "/midwife/pregnancies",
      icon: <MdPregnantWoman className="w-6 h-auto" />,
      current: location.pathname === "/pregnancies",
    },
  ];

  const familyRoutes = [
    {
      name: "Dashboard",
      link: "/family",
      icon: <RxDashboard className="w-6 h-auto " />,
      current: location.pathname === "/",
    },
    {
      name: "Eligible Families",
      link: "/family/eligibleFamilies",
      icon: <MdOutlineFamilyRestroom className="w-6 h-auto" />,
      current: location.pathname === "/eligibleFamilies",
    },
    {
      name: "Pregnancies",
      link: "/family/pregnancies",
      icon: <MdPregnantWoman className="w-6 h-auto" />,
      current: location.pathname === "/pregnancies",
    },
  ];

  const vogRoutes = [
    {
      name: "Dashboard",
      link: "/vog",
      icon: <RxDashboard className="w-6 h-auto " />,
      current: location.pathname === "/",
    },
    {
      name: "Personal Information",
      link: "/vog/personal_Info",
      icon: <MdOutlineFamilyRestroom className="w-6 h-auto" />,
      current: location.pathname === "/personal_Info",
    },
    {
      name: "Patient Details",
      link: "/vog/patient_history",
      icon: <MdPregnantWoman className="w-6 h-auto" />,
      current: location.pathname === "/pregnancies",
    },
    {
      name: "Add Patient Details",
      link: "/vog/add_patients_details",
      icon: <MdPregnantWoman className="w-6 h-auto" />,
      current: location.pathname === "/patient_history",
    },
  ];

  let userRoute = [];

  switch (userRole) {
    case "midwife":
      userRoute = midwifeRoutes;
      break;

    case "family":
      userRoute = familyRoutes;
      break;

    default:
      //userRoute = [];
      userRoute = familyRoutes; //default was updated as family temporary as userRole is still not functioning with backend
  }

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <div className=" w-max drop-shadow-xl pl-2 pt-2 text-slate-600  bg-[#00A9BB]  flex-col flex">
      {userRoute.map((item, index) => (
        <a
          key={index}
          className={classNames(
            item.current
              ? "text-white  bg-[#00A9BB]"
              : "text-slate-600  hover:text-[#00A9BB] hover:bg-[#2A777C]",
            "flex w-max px-3 items-center gap-3  py-2 font-semibold rounded-l-xl"
          )}
          href={item.link}
        >
          {item.icon}
          <span className="hidden sm:block ">{item.name}</span>
        </a>
      ))}
    </div>
  );
}
