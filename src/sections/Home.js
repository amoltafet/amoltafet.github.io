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
import MainCard from "../components/MainCards";

export default function Home() {

  const socials = [
    {
        name: "Phone",
        link: "tel:+1-509-992-9504",
        icon: <LocalPhoneIcon />,
    },
    {
        name: "Email",
        link: "moltafet.ahmad2015@gmail.com",
        icon: <MailOutlineIcon />,
    },
];

  return (
    <div>
            <Grid container sx={{
                display: "flex",
                marginTop: "-10%",
                flexDirection: "column",
                height: "95vh",
                borderRadius: "10px",
                justifyContent: "center",
                alignContent: "center",
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
                        src="https://amoltafet.github.io/ahmad.jpeg"
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
                    <div style={{ marginTop: "5%" }}/>
                    <Typography variant="h6" color="primary">
                        This is my personal website
                    </Typography>
                    </div>
                <Divider sx={{ margin: "1%", backgroundColor: "white" }} />
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
                <div style={{
                    marginLeft: "2%",
                    marginTop: "5%",
                }}>
                    <MainCard /> 
                </div>
               
            
            

        </Grid>
    </div>
  );
}
