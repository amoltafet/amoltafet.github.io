import { Typography, Grid, Divider } from "@mui/material";
import Header from "../components/Header";
import { Avatar } from "@mui/joy";
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import { IconButton } from "@mui/joy";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Socials from "../components/Socials";
import Button from "@mui/joy/Button";

export default function Home() {

  const socials = [
    {
        name: "Phone",
        link: "tel:+1-647-573-6493",
        icon: <LocalPhoneIcon />,
    },
    {
        name: "Email",
        link: "moltafet.ahmad2015@gmail.com",
        icon: <MailOutlineIcon />,
    },
];

  return (
    <div style={{
        padding: "2%",
        backgroundColor: "#121212",
    }}>
        <Grid container spacing={2}>
            <Grid xs={3} sx={{
                backgroundColor: "#212121",
                display: "flex",
                flexDirection: "column",
                height: "95vh",
                borderRadius: "10px",
                padding: "1%",
            }}> 
                <div style={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                }}>
                <Avatar
                        sx={{ width: 150, height: 150, marginRight: "5%" }}
                        src="https://media.licdn.com/dms/image/D5603AQEY5P_-3hAe5g/profile-displayphoto-shrink_800_800/0/1682223262966?e=1687996800&v=beta&t=-kbYntj8QfHVOeWS16OcHkepGUhzaQ5qGNbUZ99Hf9A"
                        alt="Ahmad Moltafet"
                    />
                    <Typography variant="h3" color="primary">
                        Ahmad Moltafet
                    </Typography>
                    <Button variant="outlined" sx={{
                        marginTop: "5%",
                    }}>
                    Software Engineer
                    </Button>
                    </div>
                <Divider sx={{ margin: "5%", backgroundColor: "white" }} />
                {socials.map((social) => (
                    <>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "left",
                            gap: "5%",
                        }}>
                            <IconButton sx={{
                                marginTop: "5%",
                            }}>
                                {social.icon}
                            </IconButton>
                            <div>
                                <Typography variant="h6" color="primary">
                                    {social.name}
                                </Typography>
                                <Typography variant="body1" color="primary">
                                    {social.link}
                                </Typography>
                            </div>
                        </div>
                    </>
         

                ))}
                
                <Socials />


            </Grid>
            <Grid xs={8} sx={{
                backgroundColor: "#212121",
                height: "95vh",
                borderRadius: "10px",
                padding: "1%",
                marginLeft: "1%",
            }}>
                
            </Grid>

        </Grid>
    </div>
  );
}
