import  React , {useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Grid,  MenuItem,FormControl,InputLabel,Select,Radio,RadioGroup,FormControlLabel, FormLabel} from '@mui/material';
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

function RadioInputGroup({ label, options, disabled }) {
    return (
      <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
        <FormControl>
          <FormLabel id={`radio-group-label-${label}`}>{label}</FormLabel>
          <RadioGroup row aria-labelledby={`radio-group-label-${label}`} name={`row-radio-buttons-group-${label}`} 
           disabled={disabled}>
            {options.map((option, index) => (
              <FormControlLabel key={index} value={option.value} control={<Radio />} label={option.label} disabled={disabled}/>
            ))}
          </RadioGroup>
        </FormControl>
      </Grid>
    );
  }
function createData(session,date,husband,wife,other) {
  return { session,date,husband,wife,other };
}

const rows = [
  createData(1, '2022/05/23', 'Yes','Yes','No'),
  
];

export default function SessionAttendanceForm() {
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
  ];

  const radioGroupOptions = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' }, 
  ];

  return (
    <Box>

        <Box m="20px">
                    {/* HEADER */}
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Header title="Attendance at Antenatal Sessions"/>
                    </Box>
              </Box>

        <Grid container justifyContent="center" alignItems="center">

              <Grid item xs={6} pl={5}>
                    <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Session</TableCell>
                          <TableCell align="right">Date</TableCell>
                          <TableCell align="right">Husband</TableCell>
                          <TableCell align="right">Wife</TableCell>
                          <TableCell align="right">Other</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.session}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              {row.session}
                            </TableCell>
                            {/* <TableCell align="right">{row.session}</TableCell> */}
                            <TableCell align="right">{row.date}</TableCell>
                            <TableCell align="right">{row.husband}</TableCell>
                            <TableCell align="right">{row.wife}</TableCell>
                            <TableCell align="right">{row.other}</TableCell>


                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
              </Grid>

              <Grid ml={5}>
                  <React.Fragment>
                    <Button variant="outlined" onClick={handleClickOpen}>
                      Add
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
                      <DialogTitle color="#2a777c">New Attendance Details</DialogTitle>
                      <DialogContent>

                        <Grid item xs={8} sx={{ padding: "1em 1em 0em 1em !important" }}>
                          <FormControl  fullWidth>
                          <InputLabel>Session</InputLabel>
                            <Select
                              required
                              name="tetanusDose"
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

                        
                        <Grid item xs={10} sx={{ padding: "1em 1em 0em 1em !important" }}>
                            <RadioInputGroup label="Husband" options={radioGroupOptions} required  />
                        </Grid> 
                        <Grid item xs={10} sx={{ padding: "1em 1em 0em 1em !important" }}>
                            <RadioInputGroup label="Wife" options={radioGroupOptions} required  />
                        </Grid>
                        <Grid item xs={10} sx={{ padding: "1em 1em 0em 1em !important" }}>
                            <RadioInputGroup label="Other" options={radioGroupOptions} required  />
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