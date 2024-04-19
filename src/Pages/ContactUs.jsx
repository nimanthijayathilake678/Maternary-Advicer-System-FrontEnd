// import React from 'react'


// export default function ContactUs() {
//   return (
//     <div>ContactUs</div>
//   )
// }


import React from 'react'

import Form from 'react-bootstrap/Form';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import '../css/ContactUs/ContactUs.css';


export default function ContactUs() {
  return (
    <div style={{padding:'50px'}}>
        <div>
            <h1 style={{color:'black',textAlign:'center',fontSize:'30px'}}>
                Contact Us
            </h1>
        </div>
        
        <div class="grid-container1">
            
            <div class="grid-item1" style={{textAlign:'left',fontSize:'20px'}}>
            
                <Form >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                    <Form.Label>Name</Form.Label><br></br>
                    <Form.Control type="text"  style={{width:'100%',border: '1px solid black',borderRadius:'5px'}} />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label><br></br>
                    <Form.Control type="email" placeholder="name@example.com"  style={{width:'100%',border: '1px solid black',borderRadius:'5px'}}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Subject</Form.Label><br></br>
                    <Form.Control type="text" placeholder="" style={{width:'100%',border: '1px solid black',borderRadius:'5px'}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label><br></br>
                    <Form.Control as="textarea" rows={3} style={{width:'100%',border: '1px solid black',borderRadius:'5px'}}/>
                </Form.Group>
                <div style={{display:'flex',justifyContent:'flex-end'}}>
                <Form.Group style={{}}>
                <Button variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </Form.Group>
                </div>
                </Form>
                

                
            </div>
            <div class="grid-item1" style={{fontSize:'20px'}}>
                <h2>Our Office</h2>
                <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <nav aria-label="main mailbox folders">
                    <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                        <ListItemIcon>
                            <AddLocationIcon></AddLocationIcon>
                        </ListItemIcon>
                        <ListItemText primary="Reginal Director of Health Services Office, Paramulla, Matara" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="matarardhs@yahoo.com" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                        <ListItemIcon>
                            <LocalPhoneIcon ></LocalPhoneIcon>
                        </ListItemIcon>
                        <ListItemText primary=" 041-2222154" />
                        </ListItemButton>
                    </ListItem>
                    </List>
                </nav>
                <Divider />
                
                </Box>
            </div>
        </div>
    </div>
  )
}