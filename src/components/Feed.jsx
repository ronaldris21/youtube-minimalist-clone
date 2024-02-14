import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import  SideBar from "./Sidebar"

const Feed = () => (
  // mx o md????
  <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
    <Box
      sx={{
        height: { sx: "auto", md: "92vh" },
        borderRight: "1px solid #3d3d3d",
        px: { sx: 0, md: 2 },
      }}
    >
    <SideBar/>
      SideBar Ronald
      <Typography
        className="copyright"
        variant="body2"
        sx={{ mt: 1.5, color: "#fff" }}
      >
        Copyright 2024 Ronald Ris
      </Typography>
    </Box>
  </Stack>
);

export default Feed;
