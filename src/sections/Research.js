import { Typography, Grid, Button, Divider } from "@mui/material";
import Header from "../components/Header";

export default function Research() {
  return (
    <div>
      <Header title="Research" />
      <div
        style={{
          textAlign: "left",
          paddingBottom: "2%",
          borderBottom: "1px solid #e0e0e0",
          marginLeft: "2%",
        }}
      >
        <Typography variant="h5" color="black">
          Gonzaga University - Daniel Olivares, Ph.D.
        </Typography>

        <Typography variant="h6" color="black">
          <b>Research Assistant</b>
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          fontSize="small"
          onClick={() => window.open("https://zaga.pages.dev", "_blank")}
          sx={{ marginTop: "1%" }}
        >
          <Typography variant="caption" color="primary">
            Prototype
          </Typography>
        </Button>
        <Button
          variant="outlined"
          color="primary"
          fontSize="small"
          onClick={() => window.open("https://zaga.pages.dev", "_blank")}
          sx={{ marginLeft: "1%", marginTop: "1%" }}
          disabled
        >
          <Typography variant="caption" color="primary">
            Research Paper
          </Typography>
        </Button>
        <Divider sx={{ marginTop: "1%" }} />
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography variant="overline" color="black">
              Abstract
            </Typography>
            <Typography variant="body2" color="black">
              This research proposes a new set of design principles for AI
              chatbots that prioritize human-centered design and ethical
              considerations. The study highlights existing and new design
              principles will lead to an improved user experience, engagement,
              satisfaction, and success of users while interacting with an AI
              chatbot. The proposed design principles aim to assist developers
              in creating chatbots that are more user-friendly and transparent,
              with an ethical and empathetic approach towards their users. The
              research proposes that AI platforms utilizing these principles
              will result in more efficient and effective communication between
              chatbots and users.
            </Typography>
            <Typography variant="overline" color="black">
              PENDING PUBLICATION
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ textAlign: "center", marginTop: "1%" }}>
            <img
            src={require("../img/poster.png")}
            alt="zaga"
            style={{ width: "70%", height: "auto" }}
          />
          </Grid>
          
        </Grid>
      </div>
      <div
        style={{
          textAlign: "left",
          paddingBottom: "2%",
          borderBottom: "1px solid #e0e0e0",
          marginLeft: "2%",
          marginTop: "2%",
        }}
      >
        <Typography variant="h5" color="black">
          University of Washington | Data Analysis & Intelligent Systems
          Research - Dong Si, Ph.D.
        </Typography>
        <Button
        disabled
          variant="outlined"
          color="primary"
          fontSize="small"
          onClick={() => window.open("https://zaga.pages.dev", "_blank")}
          sx={{ marginTop: "1%" }}
        >
          <Typography variant="caption" color="primary">
            Prototype
          </Typography>
        </Button>
        <Button
          variant="outlined"
          color="primary"
          fontSize="small"
          onClick={() => window.open("https://zaga.pages.dev", "_blank")}
          sx={{ marginLeft: "1%", marginTop: "1%" }}
          disabled
        >
          <Typography variant="caption" color="primary">
            Research Paper
          </Typography>
        </Button>
        <div sx={{ marginTop: "5%" }} />
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography variant="overline" color="black">
              Abstract
            </Typography>
            <Typography variant="body2" color="black">
              Conducting research in the field of Artificial Intelligence for
              Smart Health and Next Generation Biomedicine, contributing to the
              development of innovative AI-based solutions to improve patient
              outcomes and advance the field of biomedicine. Researching both
              qualitative and quantitative data, analyzing large datasets using
              statistical and machine learning techniques to derive insights and
              inform decision-making processes related to healthcare and
              biomedicine.
            </Typography>
            
          </Grid>
          <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
            <Typography variant="overline" color="black">
              Keywords
            </Typography>
            <Typography variant="body2" color="black">
              Artificial Intelligence, Smart Health, Biomedicine
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
