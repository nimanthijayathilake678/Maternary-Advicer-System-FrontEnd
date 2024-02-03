import  React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';




const Calendar = () => {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
     <DateCalendar />
   </LocalizationProvider>
   </div>
  )
}

export default Calendar


