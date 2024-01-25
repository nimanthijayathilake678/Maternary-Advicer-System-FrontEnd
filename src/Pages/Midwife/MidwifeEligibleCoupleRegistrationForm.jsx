import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function MidwifeEligibleCoupleRegistrationForm() {
  return (
    <div className='flex w-2/3 px-5 pt-5' >
        <div>
          <span className=' text-xl  text-[#2A777C] text-center font-bold '>Create New Account For Married Couple</span>

        <form>
          <div className='flex w-full'>
              <Box
                      component="form"
                      sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch'  },
                      }}
                      noValidate
                      autoComplete="off"
                  >
                  </Box>

                  <div className='pt-3 w-full my-4 flex'>
                      <div className='w-6/12 '>
                      <TextField
                        className='w-full'
                        required
                        id="outlined-required"
                        label="Division of Reginal Ministry of Health Services"
                        type="text"
                        style={{marginBottom: '1rem'}}
                        
                      />
                    
                      <TextField
                        className='w-full'
                        required
                        id="outlined-required"
                        label="Reference No"
                        type="text"
                        style={{marginBottom: '1rem'}} 
                      />

                      <TextField
                        className='w-full'
                        required
                        id="outlined-required"
                        label="Reference No"
                        type="text"
                        style={{marginBottom: '1rem'}}
                        
                      />

                      <TextField
                        className='w-full'
                        required
                        id="outlined-required"
                        label="Email"
                        type="email"
                        style={{marginBottom: '1rem'}}
                        
                      />
                      </div>

                      <div className='px-2 w-6/12'>
                        <TextField
                        className='w-full'
                        required
                        id="outlined-required"
                        label="Division of Medical Officer"
                        type="text"
                        style={{marginBottom: '1rem'}}
                        />

                        <TextField
                        className='w-full'
                        required
                        id="outlined-required"
                        label="Wife's name"
                        type="text"
                        style={{marginBottom: '1rem'}}
                        />

                        <TextField
                        className='w-full'
                        required
                        id="outlined-required"
                        label="Telephone No"
                        type="text"
                        style={{marginBottom: '1rem'}}
                        />

                        <TextField
                        className='w-full'
                        required
                        id="outlined-required"
                        label="Address"
                        style={{marginBottom: '1rem'}}
                        />
                      </div>
                  </div>           
          </div>
          <Button className='w-full' variant="contained">Submit</Button>
        </form>

        </div>
        <div></div>        
    </div>
  )
}
