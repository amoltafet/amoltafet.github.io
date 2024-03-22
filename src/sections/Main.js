import MainCard from "../components/MainCards.js";
import Socials from "../components/Socials.js";
import { Typography } from "@mui/material";
import * as React from "react";
import Grid from "@mui/material/Grid";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Avatar from "@mui/joy/Avatar";

export default function Main() {
  return (
    <div>
      <MenuOutlinedIcon
        fontSize="large"
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          color: "primary.main",
          padding: "3%",
        }}
      />
      <Grid
        container
        sx={{
          margin: "auto",
          textAlign: "center",
          alignItems: "center",
          width: "80%",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
          <MainCard />
   

        
      </Grid>
    </div>
  );
}
