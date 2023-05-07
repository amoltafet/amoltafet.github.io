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
        <Grid item xs={12} sm={6}>
          <MainCard />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{ width: 150, height: 150, marginRight: "5%" }}
            src="https://media.licdn.com/dms/image/D5603AQEY5P_-3hAe5g/profile-displayphoto-shrink_800_800/0/1682223262966?e=1687996800&v=beta&t=-kbYntj8QfHVOeWS16OcHkepGUhzaQ5qGNbUZ99Hf9A"
            alt="Ahmad Moltafet"
          />

          <div>
            <Typography variant="h3" color="primary">
              Ahmad Moltafet
            </Typography>
            <Socials />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
