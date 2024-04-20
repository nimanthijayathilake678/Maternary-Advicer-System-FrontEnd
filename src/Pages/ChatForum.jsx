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
        {/* Chat Box */}
        <Box
          sx={{
            flex: 1,
            padding: "20px",
            overflowY: "auto",
            maxHeight: "calc(80vh - 40px - 80px)", // Height minus header and form height
            bgcolor: "#f5f5f5",
          }}
        >
          {customDataset.map((msg, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: msg.sender === "user" ? "flex-end" : "flex-start",
                marginTop: "10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor:
                    msg.sender === "user" ? "#dcf8c6" : "#ffffff",
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
              regNum: "",
              msg_Date: "",
              msg_Content: "",
            }}
            enableReinitialize={true}
            validationSchema={chatForumSchema}
            validateOnChange={false}
            onSubmit={async (values, { setSubmitting }) => {
              try {
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
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        placeholder="Registration Number"
                        name="regNum"
                        label="Registration Number"
                        onChange={handleChange}
                        value={values.regNum}
                        error={touched.regNum && Boolean(errors.regNum)}
                        helperText={touched.regNum && errors.regNum}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
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
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        placeholder="Message Content"
                        name="msg_Content"
                        label="Message Content"
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
