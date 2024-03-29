import { Typography, Grid, Button, Divider } from "@mui/material";
import Header from "../components/Header";

export default function Education() {
  return (
    <div>
      <Header title="Education" />
      <Grid container 
        style={{
          textAlign: "left",
          paddingBottom: "2%",
          borderBottom: "1px solid #e0e0e0",
          marginLeft: "2%",
          
        }}
      >
        
        <Grid item sx={{
          marginTop: "1%",
        }}>
          <img src="https://www.usg.edu/assets/global/images/inst_logos/inst_gatech.svg" width="100px" />
        </Grid>
        <Grid item sx={{ 
          marginLeft: "2%",
        }}>
          <Typography variant="overline" color="black">
            PENDING
          </Typography>

          <Typography variant="h5" color="black">
            Georgia Institute of Technology
          </Typography>

          <Typography variant="h6" color="black">
            <b>Master of Computer Science</b> | OMSCS
          </Typography>

          <Typography variant="p3" color="black">
            <b>Concentration in Machine Learning</b> <br />
          </Typography>

          <Typography variant="overline" color="black">
             2023 - Present <br />
          </Typography>
          </Grid>
      </Grid>
      
      <Grid container
        style={{
          textAlign: "left",
          paddingBottom: "2%",
          borderBottom: "1px solid #e0e0e0",
          marginLeft: "2%",
        }}
      >
        <Grid item sx={{
          marginTop: "1%",
        }}>
          <img src="https://upload.wikimedia.org/wikipedia/en/b/bd/Gonzaga_Bulldogs_logo.svg" width="100px" />
        </Grid>
        <Grid item sx={{ 
          marginLeft: "2%",
        }}>
        <Typography variant="overline" color="black">
          Completed
        </Typography>

        <Typography variant="h5" color="black">
          Gonzaga University
        </Typography>

        <Typography variant="h6" color="black">
          <b>B.S. Computer Science</b>
        </Typography>
        <Typography variant="overline" color="black">
           Graduated: May 2023 <br />
        </Typography>
        </Grid>
        <Divider sx={{ marginTop: "1%" }} />
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography variant="overline" color="black">
              Relevant Corsework
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
          </Grid>
          <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
            <Typography variant="overline" color="black">
              Research Experience <br />
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              fontSize="small"
              onClick={() =>
                window.open("amoltafet.github.io/research", "_blank")
              }
            >
              <Typography variant="caption" color="primary">
                My Research with Dr. Olivares
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
