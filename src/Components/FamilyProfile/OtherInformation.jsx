import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext'; 
import PersonalMedicalCondition from './PersonalMedicalCondition';
import ProfilePersonalInformation from "./ProfilePersonalInformation"
import ProfileSexualAndReproductiveHealth from "./ProfileSexualAndReproductiveHealth";
import ProfileFamilyHealthInformation from "./ProfileFamilyHealthInformation";
import ProfileFamilyNutrition from "./ProfileFamilyNutrition";
import ProfileLifeStyle from "./ProfileLifeStyle";
import ProfileHousingAndWorkspace from "./ProfileHousingAndWorkspace";
import { useState } from 'react';


export default function OtherInformation({id,data}) {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  return (
    <TabContext value={value}> {/* Wrap your Tabs and TabPanel inside TabContext */}
      <Box sx={{ width: '100%', typography: 'body1' , backgroundColor:'white', boxShadow:' rgba(0, 0, 0, 0.16) 0px 1px 4px'}}>
        <Tabs value={value} variant='scrollable' onChange={handleChange} aria-label="lab API tabs example" scrollButtons="auto">
          <Tab label="Personal Information" value="1" sx={{ textTransform: 'none', fontSize: '14px' }}/>
          <Tab label="Medical Condition" value="2" sx={{ textTransform: 'none', fontSize: '14px' }} />
          <Tab label="Sexual & Reproductive Health" value="3" sx={{ textTransform: 'none', fontSize: '14px' }} />
          <Tab label="Family Health Information" value="4" sx={{ textTransform: 'none', fontSize: '14px' }} />
          <Tab label="Family Nutrition" value="5" sx={{ textTransform: 'none', fontSize: '14px' }} />
          <Tab label="Life Style" value="6" sx={{ textTransform: 'none', fontSize: '14px' }} />
          <Tab label="Housing & Workspace" value="7" sx={{ textTransform: 'none', fontSize: '14px' }} />
        </Tabs>
        <TabPanel value="1"><ProfilePersonalInformation id={id} data={data}/></TabPanel>
        <TabPanel value="2"><PersonalMedicalCondition id={id}/></TabPanel>
        <TabPanel value="3"><ProfileSexualAndReproductiveHealth id={id}/></TabPanel>
        <TabPanel value="4"><ProfileFamilyHealthInformation id={id}/></TabPanel>
        <TabPanel value="5"><ProfileFamilyNutrition id={id}/></TabPanel>
        <TabPanel value="6"><ProfileLifeStyle id={id}/></TabPanel>
        <TabPanel value="7"><ProfileHousingAndWorkspace id={id}/></TabPanel>
      </Box>
    </TabContext>
  );
}
