import React from 'react'
import SubSideBar from '../Components/SubSideBar'
import EligibleCoupleRegistration from './EligibleCoupleRegistration'
import ViewEligibleCouple from './ViewEligibleCouple'
import AddRemark from './AddRemark'
import EligibleCoupleRegistrationForm from './Midwife/MidwifeEligibleCoupleRegistrationForm';
import EligibleFamilyList from './EligibleFamilyList'
import Pregnancies from './Pregnancies';

export default function EligibleFamilies() {
  return (
    <div className='flex  w-full'>
       <div className=' ml-3 w-8/12 '>
        {/* <EligibleCoupleRegistrationForm/> */}
        {/* <EligibleFamilyList/> */}
        <Pregnancies/>

       </div>

       <div className='pb-14 w-4/12 opacity-95 bg-cover' style={{ backgroundImage: "url('marriedCouple.jpg')" }}>
       
      </div>
          

        
    </div>
    
  )
}
