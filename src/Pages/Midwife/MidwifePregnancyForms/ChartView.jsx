import React from 'react'
import WeightGain from './WeightGain';
import SfhChart from './SfhChart';
import { Box, Grid , Typography} from '@mui/material'

const ChartView = () => {
  return (
    <Box m={2} p={2}>
      <Grid container spacing={2} display="flex" justifyContent="space-between" alignItems="center" border={1} borderColor="primary.main" borderRadius={3}>
      <Grid container item xs={12} md={6} >
      <Typography variant='h6' color="#2a777c">Weight Gain Chart</Typography>
        <WeightGain/>
      </Grid>
      <Grid container item xs={12} md={6}>
      <Typography variant='h6' color="#2a777c">SFH Chart</Typography>
        <SfhChart/>
      </Grid>
      </Grid>
    </Box>
  )
}

export default ChartView
