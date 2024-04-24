import {useEffect,useState,useRef} from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MessageIcon from "@mui/icons-material/Message";
import { IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { apiClient } from "../../API/ApiServer";
import useAuth from "../../Hooks/useAuth";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";


export default function RemarkModal({ name, detail, size ,url,id,column}) {

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: size,
    bgcolor: "white",
    // boxShadow: 24,
    p: 4,
    color: "black",
  };

  const [open, setOpen] = useState(false);
  const [openError,setOpenError] = useState(false);
  const [openSuccess,setOpenSuccess] = useState(false);
  const inputRef = useRef(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [messageIconColor,setMessageIconColor] = useState("blue");
  const [remarkValue,setRemarkValue] = useState("");
  const [data,setData] = useState(null);
  const [method,setMethod] = useState("post");



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get(url + id);
        setData(response?.data);
        if(response?.data.user_id){
          setMethod("put")
        }
        console.log(" Information " + response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [id]);

  const handleNext = async() => {
    
    try{
      const response = await apiClient[method](url+id,data)
      if(response.status===200 || response.status===201){
        setOpenSuccess(true);
        handleModalClose(true);
      }else{
        setOpenError(true);
      }
    }catch(err){
      console.error(err);
      setOpenError(true);

    }
  };

  // const handleSaveChange = () => {
  //   if (remarkValue.trim() !== ""){
  //     console.log(remarkValue);
  //     setMessageIconColor("orange");
  //     <MessageIcon/>
  
  //   }
    // return setMessageIconColor("orange"); 
    // console.log(messageIconColor);
  // }

  const handleModalClose = () =>{
    <MessageIcon sx={{ color: messageIconColor }} />

    setOpen(false);
  }

  // const handleRemarkChange = (event) =>{
  //   setRemarkValue(event.target.value);
  // }

  
  useEffect(() => {
    if (inputRef.current && inputRef.current.value !== "") {
      inputRef.current.focus();
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]:value
    })
  };

  const handleSuccessClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
  
    setOpenSuccess(false);
  };

  const handleErrorClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
  
    setOpenError(false);
  };
  
  

  return (
    <div>
      <IconButton
        onClick={handleOpen}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MessageIcon sx={{ color: messageIconColor }} />
      </IconButton>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              sx={{ color: "#2A777C" }}
            >
              Remark
            </Typography>
            <Typography>
              <Grid container spacing={6} sx={{ width: "100%", mt: 2, mx: 1 }}>
                <Grid
                  items
                  xs={12}
                  sx={{ padding: "1em 1em 0em 1em !important" }}
                >
                  <TextField
                    required
                    value={`${name} : ${detail}`}
                    sx={{ width: "100%" }}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </Grid>

                <Grid
                  items
                  xs={12}
                  sx={{ padding: "1em 1em 0em 1em !important" }}
                >
                  <TextField
                    required
                    name={column}
                    ref={inputRef}
                    value={data ? data[column]:""}
                    label="Remark"
                    sx={{ width: "100%" }}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid items xs={12} justifyContent='center'>
                  <Button onClick={handleNext} variant="contained" sx={{ width: "95%" , mx: 2  , mt:2, background:'#00A9BB'}}>
                    Save Changes
                  </Button>
                </Grid>
              </Grid>
            </Typography>
          </Box>
        </Fade>
      </Modal>

      <Snackbar
      open={openSuccess}
      autoHideDuration={6000}
      onClose={handleSuccessClose}
      anchorOrigin={{ vertical:"top" , horizontal:"right" }}
    >
      <Alert
        onClose={handleSuccessClose}
        severity="success"
        variant="filled"
        sx={{ width: "100%" }}
      >
        Remark added Successfully...      
      </Alert>
    </Snackbar>

    <Snackbar
      open={openError}
      autoHideDuration={6000}
      onClose={handleErrorClose}
      anchorOrigin={{ vertical:"top" , horizontal:"right" }}
    >
      <Alert
        onClose={handleErrorClose}
        severity="error"
        variant="filled"
        sx={{ width: "100%" }}
      >
        An error occured! Try again...      
      </Alert>
    </Snackbar>
    </div>
  );
}
