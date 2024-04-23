import * as React from "react";
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

export default function RemarkModal({ name, detail, size }) {
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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [messageIconColor,setMessageIconColor] = React.useState("blue");
  const [remarkValue,setRemarkValue] = React.useState("");

  const handleSaveChange = () => {
    if (remarkValue.trim() !== ""){
      console.log(remarkValue);
      setMessageIconColor("orange");
      <MessageIcon/>
  
    }
    // return setMessageIconColor("orange"); 
    // console.log(messageIconColor);
  }

  const handleModalClose = () =>{
    <MessageIcon sx={{ color: messageIconColor }} />

    setOpen(false);
  }

  const handleRemarkChange = (event) =>{
    setRemarkValue(event.target.value);
  }





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
                    name="Remark"
                    label="Remark"
                    sx={{ width: "100%" }}
                    onChange={handleRemarkChange}
                  />
                </Grid>

                <Grid items xs={12} justifyContent='center'>
                  <Button onClick={()=>{handleSaveChange(); handleModalClose()}} variant="contained" sx={{ width: "95%" , mx: 2  , mt:2, background:'#00A9BB'}}>
                    Save Changes
                  </Button>
                </Grid>
              </Grid>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
