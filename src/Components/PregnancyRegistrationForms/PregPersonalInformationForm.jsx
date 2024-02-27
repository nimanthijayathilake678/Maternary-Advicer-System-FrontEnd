import React from 'react'
import { Grid,TextField,Box } from '@mui/material'

const PregPersonalInformationForm = () => {
  return (
    <form >
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
          noValidate
          autoComplete="off"
          display="flex"
          justifyContent="center"
          alignItems="center"
          //height="80vh"
          flexDirection="column"
        >
        <Grid container spacing={2} sx={{ width: "50%" }} border={1} borderColor="primary.main" borderRadius={3} m={2}> 
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Age"
                name="age"
                label="Age"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Age at Marriage"
                name="marriedAge"
                label="Age at Marriage"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Occupation"
                name="occupation"
                label="Occupation"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Distance to Workplace  from Home(km)"
                name="distanceToWorkspace"
                label="Distance to Workplace  from Home(km)"
                sx={{ width: "100%" }}
              />
            </Grid>
        </Grid>

        </Box>
        </form>
  )
}

export default PregPersonalInformationForm
