{
  /* <div>
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
    height="100%"
    flexDirection="column"
  >
    <Grid container spacing={3}>
    
      <Grid item xs={3} display={"flex"}>
        <SideBar />
      </Grid>
      
      <Grid item xs={9} style={{ paddingTop: "100px", paddingRight: "200px" }}>
       
        <div>
          <span className="text-xl text-[#2A777C] text-center font-bold">
            Baby Health
          </span>
        </div>
        <Box
          sx={{
            width: "100%",
            border: "1px solid #ccc",
            padding: "1em",
            paddingRight: "80px",
            display: "flex",
          }}
        >
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Box sx={{ p: 5 }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs value={value} onChange={handleChange}>
                    <Tab label="Basic Details" {...a11yProps(0)} />
                    <Tab label="Birth Infromation" {...a11yProps(1)} />
                    <Tab label="Neonatal Examination" {...a11yProps(2)} />
                    <Tab label="Special care " {...a11yProps(3)} />
                  </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                  <BabyProfileForm1 />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <BabyProfileForm1 />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                  <BabyProfileForm1 />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                  <BabyProfileForm1 />
                </CustomTabPanel>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  </Box>
</div>; */
}
