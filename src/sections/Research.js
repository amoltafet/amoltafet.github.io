import { Typography, Grid, Button, Divider } from "@mui/material";
import Header from "../components/Header";

export default function Research() {
    return (
        <div>
            <Header title="Research"/>
            <div style={{
                textAlign: 'left',
                paddingBottom: "2%",
                borderBottom: "1px solid #e0e0e0",
                marginLeft: "2%",
            }}>
                <Typography variant="h5" color="black">
                    Gonzaga University - Daniel Olivares, Ph.D.
                </Typography>

                <Typography variant="h6" color="black">
                    <b>Research Assistant</b>
                </Typography>
                <Button variant="outlined" color="primary" fontSize="small" onClick={() => window.open("https://zaga.pages.dev", "_blank")} sx={{marginTop: "1%"}}>
                    <Typography variant="caption" color="primary">
                        Prototype 
                    </Typography>
                </Button>
                <Button variant="outlined" color="primary" fontSize="small" onClick={() => window.open("https://zaga.pages.dev", "_blank")} sx={{marginLeft: "1%", marginTop: "1%"}} disabled>
                    <Typography variant="caption" color="primary">
                        Research Paper 
                    </Typography>
                </Button>
                <Divider sx={{marginTop: "1%"}}/>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="overline" color="black">
                        Abstract
                        </Typography>
                        <Typography variant="body2" color="black">
                        This research proposes a new set of design principles for AI chatbots that prioritize human-centered design and ethical considerations. The study highlights existing and new design principles will lead to an improved user experience, engagement, satisfaction, and success of users while interacting with an AI chatbot. The proposed design principles aim to assist developers in creating chatbots that are more user-friendly and transparent, with an ethical and empathetic approach towards their users. The research proposes that AI platforms utilizing these principles will result in more efficient and effective communication between chatbots and users.
                        </Typography>
                        <Typography variant="overline" color="black">
                            CURRENTLY IN PROGRESS
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{textAlign: "center"}}>
                        <Typography variant="overline" color="black">
                        Keywords
                        </Typography>
                        <Typography variant="body2" color="black">
                        AI, Chatbot, Design Principles, Human-Centered Design, Ethical Considerations
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </div>

    );
}

