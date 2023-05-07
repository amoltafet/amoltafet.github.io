import React, { useEffect } from "react";
import { Button, Divider, Grid, Typography } from "@mui/material";
import Socials from "./Socials.js";
import Link from "@mui/joy/Link";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Home } from "@mui/icons-material";

export default function Header({ title }) {
  const backBtn = () => {
    window.history.back();
  };

  return (
    <Grid
      container
      sx={{
        margin: "auto",
        padding: "2%",
      }}
    >
      <Grid item xs={9}>
        <Button onClick={backBtn} variant="outlined" sx={{ color: "black", marginBottom: "1%" }}>
         Go Back
        </Button>
    
        <Typography variant="h3" color="black">
          {title}
        </Typography>
      </Grid>

      <Divider />
    </Grid>
  );
}
