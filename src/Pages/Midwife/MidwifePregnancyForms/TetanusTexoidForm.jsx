import  React , {useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Grid, InputBase, IconButton, MenuItem,FormControl,InputLabel,Select} from '@mui/material';
import { Search } from '@mui/icons-material';
import Header from '../../../Components/Header';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateField } from "@mui/x-date-pickers/DateField";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, '2022/05/23', 'SF345K'),
  createData(2, '2022/10/03', 'AC512J'),

];

export default function TetanusTexoidForm() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const tetanusDose = [
    { value: '1', label: '1'},
    { value: '2', label: '2'},
    { value: '3', label: '3'},
    { value: '4', label: '4'},
    { value: '5', label: '5'},
    
  ];

  return (
    <Box>

        <Box m="20px">
                    {/* HEADER */}
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Header title="Tetanus Texoid Immunization"/>
                    </Box>
              </Box>

        <Grid container justifyContent="center" alignItems="center">

              <Grid item xs={6} pl={5}>
                    <TableContainer component={Paper}>
                    <Table  aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Dose</TableCell>
                          <TableCell align="right">Date</TableCell>
                          <TableCell align="right">Batch No.</TableCell>
                          
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
              </Grid>

              <Grid ml={5}>
                  <React.Fragment>
                    <Button variant="outlined" onClick={handleClickOpen}>
                      Add New Dose
                    </Button>
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      PaperProps={{
                        component: 'form',
                        onSubmit: (event) => {
                          event.preventDefault();
                          const formData = new FormData(event.currentTarget);
                          const formJson = Object.fromEntries(formData.entries());
                          const email = formJson.email;
                          console.log(email);
                          handleClose();
                        },
                        style:{maxWidth:'lg',width:'100%'}
                      }}
                      
                    >
                      <DialogTitle color="#2a777c">New Dose Details</DialogTitle>
                      <DialogContent>
                        {/* <DialogContentText>
                          To subscribe to this website, please enter your email address here. We
                          will send updates occasionally.
                        </DialogContentText> */}
                        <Grid item xs={8} sx={{ padding: "1em 1em 0em 1em !important" }}>
                          <FormControl  fullWidth>
                          <InputLabel>Dose</InputLabel>
                            <Select
                              required
                              name="tetanusDose"
                              label="Dose"
                              placeholder="Dose"
                              onChange={handleInputChange}
                              sx={{ width: "100%" }}
                            >
                              {tetanusDose.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                              {option.label}
                              </MenuItem>
                          ))}
                          </Select>
                        </FormControl>
                        </Grid>

                        <Grid item xs={8} sx={{ padding: "1em 1em 0em 1em !important" }}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DateField']}>
                              <DateField label="Date" required sx={{ width: "100%" }} />
                            </DemoContainer>
                          </LocalizationProvider>
                        </Grid>

                        <Grid item xs={8} sx={{ padding: "1em 1em 0em 1em !important" }}>
                          <TextField
                            required
                            name="tetanusBatchNo"
                            label="Batch No."
                            placeholder="Batch No."
                            onChange={handleInputChange}
                            sx={{ width: "100%" }}
                          />
                        </Grid>
                      </DialogContent>
                      <DialogActions>
                        <Button type="submit">Submit</Button>
                      </DialogActions>
                    </Dialog>
                  </React.Fragment>
                
              </Grid>
             
   
      </Grid>
    </Box>
   
  );
}