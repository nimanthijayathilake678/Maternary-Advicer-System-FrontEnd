import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Grid, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import DefaultButton from "../Components/Button/DefaultButton.jsx";
import { chatForumSchema } from "../Pages/Validations/validation.js";
import { getchatmsg, addchatmsg } from "../Services/ChatForumService.js";
import { useParams, useNavigate } from "react-router-dom";
import DisplaySidebar from "../Components/DisplaySidebar";
import SuccessAlert from "../Components/SuccessMsg.jsx";
import { Picker } from "emoji-mart";
import { Prev } from "react-bootstrap/esm/PageItem.js";
import useAuth from "../Hooks/useAuth.js";
import babylogo from "../Assest/babylogo.png";

const VISIBLE_FIELDS_ONE = ["regNum", "msg_Date", "msg_Content"];

function getRandomColor() {
  const letters = "ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return `${color}99`; // Adding alpha value to make it very light
}

function ChatForum() {
  const [customDataset, setCustomDataset] = useState([]);

  const [isSendMessage, setIsSendMessage] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const authContext = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getchatmsg();
        const data = response.data.map((row, index) => ({
          id: index + 1,
          ...row,
          backgroundColor: getRandomColor(),
        }));
        setCustomDataset(data);
      } catch (error) {
        console.log("Error getting data:", error);
      }
    };

    fetchData();
  }, [isSendMessage]);

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      {/* Sidebar */}
      <Box sx={{ width: "25%", padding: "20px" }}>
        <DisplaySidebar />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "75%",
        }}
      >
        <Box
          sx={{
            maxWidth: "900px",
            display: "flex",
            paddingTop: "10px",
          }}
        >
          <div>
            <span className="text-xl text-[#2A777C] text-center font-bold">
              Chat Forum
            </span>
          </div>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
            backgroundColor: "#2A777C",
            marginTop: "10px",
            borderRadius: "3px",
            maxWidth: "800px",
          }}
        >
          <img
            src="https://img.freepik.com/free-photo/mom-holds-legs-newborn-baby-her-hands_169016-37036.jpg?w=1060&t=st=1713614392~exp=1713614992~hmac=edf6b39c998e60c1df03dac795c576500fa44ea99aca22ae9242f3aa0f72e858" // Cute and baby-like image URL
            alt="Group Icon"
            style={{
              width: "60px",
              height: "50px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          />
          <Typography variant="h8" style={{ color: "#FFFFFF" }}>
            Mother & Midwife
          </Typography>
        </Box>

        {/* Chat Box */}
        <Box
          sx={{
            flex: 1,
            padding: "20px",
            overflowY: "auto",
            maxHeight: "calc(80vh - 40px - 80px)", // Height minus header and form height
            bgcolor: "#f5f5f5",
            maxWidth: "800px",
          }}
        >
          {customDataset.map((msg, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",

                alignItems: msg.regNum === id ? "flex-end" : "flex-start",
                marginTop: "10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: msg.regNum === id ? "#dcf8c6" : "#ffffff",
                  padding: "10px",
                  borderRadius: "10px",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                  maxWidth: "70%",
                  wordWrap: "break-word",
                }}
              >
                <Typography variant="caption" color="#20b2aa">
                  {msg.regNum}
                </Typography>
                <Typography variant="body1" color="#49796b">
                  {msg.msg_Content}
                </Typography>
                <Typography
                  variant="caption"
                  color="#264348"
                  sx={{ textAlign: "right" }}
                >
                  {new Date(msg.msg_Date).toLocaleString("en-US", {
                    hour12: false,
                  })}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Form */}
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            //padding: "20px",
            maxHeight: "350px",

            zIndex: 999, // Ensure it's above other content
          }}
        >
          <Formik
            initialValues={{
              regNum: id,
              msg_Date: new Date().toISOString().slice(0, 10),
              msg_Content: "",
            }}
            enableReinitialize={true}
            validationSchema={chatForumSchema}
            validateOnChange={false}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                values.msg_Date = new Date().toISOString().slice(0, 10);

                const response = await addchatmsg(values);
                if (response.status === 200) {
                  console.log("success");
                }
                setIsSendMessage((Prev) => !Prev);
                console.log(response);
              } catch (error) {
                console.error("Error submitting form:", error.message);
              }
            }}
          >
            {({
              handleChange,
              values,
              isSubmitting,
              handleSubmit,
              touched,
              errors,
            }) => (
              <Form>
                <Box sx={{ display: "flex" }}>
                  {/* Form */}

                  <Grid
                    container
                    spacing={2}
                    sx={{
                      padding: "50px",
                      maxWidth: "1000px",
                      paddingleft: "60px",
                      margin: "auto",
                      display: "flex",
                      marginBottom: "20px",
                    }}
                  >
                    {/* <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        placeholder="Registration Number"
                        name="regNum"
                        label="Registration Number"
                        onChange={handleChange}
                        value={id}
                        error={touched.regNum && Boolean(errors.regNum)}
                        helperText={touched.regNum && errors.regNum}
                      />
                    </Grid> */}

                    {/* <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        type="date"
                        placeholder="Message Date"
                        name="msg_Date"
                        //label="Message Date"
                        onChange={handleChange}
                        value={values.msg_Date}
                        error={touched.msg_Date && Boolean(errors.msg_Date)}
                        helperText={touched.msg_Date && errors.msg_Date}
                      />
                    </Grid> */}
                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        placeholder="Share Your Thoughts"
                        name="msg_Content"
                        label="Share Your Thoughts"
                        onChange={handleChange}
                        value={values.msg_Content}
                        error={
                          touched.msg_Content && Boolean(errors.msg_Content)
                        }
                        helperText={touched.msg_Content && errors.msg_Content}
                        InputProps={{
                          endAdornment: (
                            <Button
                              onClick={() =>
                                setShowEmojiPicker(!showEmojiPicker)
                              }
                            >
                              😊
                            </Button>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <DefaultButton
                        type="submit"
                        height="40px"
                        width="150px"
                        title="Send"
                        disabled={isSubmitting}
                        style={{ marginTop: "20px" }}
                        onClick={() => {
                          handleSubmit();
                          Object.keys(values).forEach((field) => {
                            touched[field] = true;
                          });
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
}

export default ChatForum;
