import { useLocation } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuItem } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Fragment } from "react";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Logo from "../Assest/msteee.png";

const Nav = () => {
  const { user } = useAuth();
  const location = useLocation();

  const navItems = [
    {
      name: "Home",
      href: "/",
      current: location.pathname === "/",
    },
    {
      name: "About Us",
      href: "/aboutUs",
      current: location.pathname === "/aboutUs",
    },
    {
      name: "Contact Us",
      href: "/contactUs",
      current: location.pathname === "/contactUs",
    },
    {
      name: "Resource",
      href: "/resource",
      current: location.pathname === "/resource",
    },
  ];

  const menus = [
    {
      name: "My profile",
      href: "/MyProfile",
      active: location.pathname === "/MyProfile",
    },
    {
      name: "Setting",
      href: "/Setting",
      active: location.pathname === "/Setting",
    },
  ];

  //functions
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: "#00A9BB",
      },
      //children: `${name.split("")[0][0]}`,
    };
  }

  console.log("Auth : " + user);

  return (
    <Disclosure
      as="header"
      className="sticky top-0 z-10 bg-[#00A9BB] border-b border-[#00A9BB]  "
    >
      {({ open }) => (
        <>
          <div className="w-full px-2 mx-auto sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-20">
              {" "}
              {/* Change h-16 to h-20 or desired height */}
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white">
                  <span className="absolute-inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {!open ? (
                    <svg
                      className="h-auto w-7"
                      data-slot="icon"
                      fill="none"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="h-auto w-7"
                      data-slot="icon"
                      fill="none"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      ></path>
                    </svg>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-between w-full ">
                <div className="flex items-center">
                  <div className="flex items-center-shrink-0">
                    <a href="/">
                      <img
                        className="w-36 h-auto"
                        src={Logo}
                        alt="Maternity Adviser Logo"
                      />
                    </a>
                  </div>

                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "text-[#00A9BB] border-b-2 border-[#00A9BB] rounded-t-md"
                              : "text-slate-600 hover:text-[#E6F4F1] rounded-md hover:bg-[#00A9BB]",
                            "px-3 py-2 text-sm font-medium "
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                {!user ? (
                  <Button
                    to="./login"
                    component={Link}
                    variant="contained"
                    sx={{ backgroundColor: "#00A9BB" }}
                  >
                    Login
                  </Button>
                ) : (
                  <Menu as="div" className="ml-3 ">
                    <div className="items-center hidden sm:flex ">
                      <span className="mr-3 text-[#2A777C] font-semibold">
                        {user?.Name}
                      </span>
                      <Menu.Button className="relative text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus-ring-offset-gray-800">
                        <span className="absolute-inset-1.5" />
                        <span className="sr-only">Open user menu</span>

                        <Avatar {...stringAvatar(user?.fullName)} />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out  duration-100"
                      enterform="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in-duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right rounded-md shadow-lg bg-[#E4FEFF] ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href={"/" + user.position + "/profile"}
                              className={classNames(
                                active ? "bg-[#00A9BB]" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              My Profile
                            </a>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href={"/" + user.position}
                              className={classNames(
                                active ? "bg-[#00A9BB]" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Dashboard
                            </a>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-[#00A9BB]" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Setting
                            </a>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-[#00A9BB]" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {!user ? (
                <Button to="./login" component={Link} variant="contained">
                  Login
                </Button>
              ) : (
                <div className="flex justify-center gap-4 items-center">
                  <span className="mr-3 text-[#2A777C] font-semibold">
                    {user.fullname}
                  </span>
                  <Avatar {...stringAvatar(user.fullname)} />
                </div>
              )}
              <div></div>

              <div class="border border-gray-300 w-full"></div>

              {navItems.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-[#00A9BB] "
                      : "text-slate-600 hover:text-[#E6F4F1]  hover:bg-[#00A9BB]",
                    "block px-3 text-base py-2 font-medium text-center rounded-md"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Nav;
