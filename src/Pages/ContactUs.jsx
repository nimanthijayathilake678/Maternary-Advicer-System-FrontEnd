import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import ContactComponent from "../Components/ContactComponent";
import TranslateComponent from "../Components/TranslateComponent";
import Form from "react-bootstrap/Form";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import "../css/ContactUs/ContactUs.css";

export default function ContactUs() {
  return (
    <>
      <Nav />
      <div className="bg-white w-full">
        <div
          className="container mx-auto px-4 py-8 text-center"
          style={{
            backgroundImage: `url("https://www.health.gov.lk/wp-content/uploads/2022/07/banner-1.jpg")`,
            backgroundSize: "cover",
            height: "100vh",
            width: "100vw",
          }}
        >
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Contact Us</h1>
          <div className="text-center">
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're always here to help you. Feel free to contact us with any questions, concerns, or feedback you may have.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information and Opening Hours Box */}
          <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center">
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#00A9BB] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <h3 className="text-lg font-semibold text-gray-800">Contact Information</h3>
            </div>
            <p className="text-gray-600 mb-2">041-2222154</p>
            <p className="text-gray-600 mb-2">matarardhs@yahoo.com</p>
            <div className="flex items-center mt-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#00A9BB] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <h3 className="text-lg font-semibold text-gray-800">Opening Hours</h3>
            </div>
            <p className="text-gray-600 mb-2">Monday - Friday: 9am - 5pm</p>
            <p className="text-gray-600 mb-2">Saturday: 10am - 2pm</p>
            <p className="text-gray-600 mb-2">Sunday: Closed</p>
          </div>
          {/* Contact Form */}
          <ContactComponent />
        </div>
        {/* Address and Map */}
        <div className="container mx-auto px-4 py-8">
          <h3 id="address" className="text-center text-2xl font-semibold mb-4 text-black">
          Reginal Director of Health Services Office<br/> 
          Paramulla, Matara
          </h3>
          <div className="h-screen">
        <div className="responsive-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63492.96728031859!2d80.46238914863281!3d5.951891600000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13f2c2b85a581%3A0xc5329341b82630bf!2sMedical%20Officer%20of%20Health%20Office!5e0!3m2!1ssi!2slk!4v1713514630693!5m2!1ssi!2slk"
            width="100%"
            height="650"
            allowFullScreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
