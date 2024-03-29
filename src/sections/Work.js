import Header from "../components/Header.js";
import { Divider, Typography } from "@mui/material";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/joy/Button";

export default function Work() {
  const data = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Expedia_Group_logo.svg",
      title: "Software Development Engineer I",
      company: "Expedia Group",
      date: "2023 - Present",
      description: "Enhancing traveler experience through recommendations using personalized and complementary products, resulting in increased member savings and higher EG trip bookings. Utilizing a tech stack comprising Kotlin, React JS, Typescript, and GraphQL to develop context-aware trip recommendations, ensuring relevance throughout the traveler's journey.",
      location: "Seattle, Washington, United States",
      link: "https://expedia.com",
    },
    {
      image:
        "https://media.licdn.com/dms/image/C4E0BAQEVZGXmk4fivg/company-logo_100_100/0/1519856250505?e=2147483647&v=beta&t=0TXFEmof3ISvKsSPf7g7WHiFpUYmMKxPZQ9vuO6q6ak",
      title: "Undergraduate Research Assistant",
      company: "Gonzaga University",
      date: "Feb 2023 - May 2023 [ 3 months ]",
      description: "Researched and proposed design principles for AI chatbots that prioritize human-centered design and ethical considerations using Figma, with the aim of improving user experience and engagement. Contributed to a study emphasizing the importance of ethical and empathetic approaches in the design of AI chatbots to improve communication and interaction with users. ",
      location: "Spokane, Washington, United States",
      link: "https://www.linkedin.com/company/gonzaga-university?trk=public_profile_experience-item_profile-section-card_subtitle-click",
    },
    {
      image:
        "https://media.licdn.com/dms/image/C4D0BAQGG2t3XtiqM7Q/company-logo_100_100/0/1519922046284?e=2147483647&v=beta&t=YZsaM1bv5sEhvwVlnT9Ww0U1zid8qVd8yuZWHGWz7Ig",
      title: "Software Engineer Intern",
      company: "IntelliTect",
      date: "Feb 2022 - April 2023 [ 1 year 3 months ]",
      description: 'Scripted data processing tasks using PowerShell, streamlining data management and analysis workflows for improved team productivity and accuracy. Contributed to the development of a backend system for an application utilizing Toggl time reporting and Azure Functions, enabling seamless tracking and management of time and project-related tasks. Enhanced website deployment and testing processes using testing libraries such as Jest and Mocha, resulting in improved website performance and faster turnaround times for client projects.',
      location: "Spokane, Washington, United States",
      link: "https://www.linkedin.com/company/intellitect?trk=public_profile_experience-item_profile-section-card_subtitle-click",
    },
    {
      image:
        "https://media.licdn.com/dms/image/C4E0BAQEVZGXmk4fivg/company-logo_100_100/0/1519856250505?e=2147483647&v=beta&t=0TXFEmof3ISvKsSPf7g7WHiFpUYmMKxPZQ9vuO6q6ak",
      title: "CS Lab Assistant",
      company: "Gonzaga University",
      date: "Aug 2021 - May 2022 [ 10 months ]",
      description:
        "Build & rebuild computer systems as needed. Diagnose and troubleshoot issues with computer systems. Perform clerical duties in support of the department. Assist professors in the development and implementation of experiments.",
      location: "Spokane, Washington, United States",
      link: "https://www.linkedin.com/company/gonzaga-university?trk=public_profile_experience-item_profile-section-card_subtitle-click",
    },
    {
      image:
        "https://media.licdn.com/dms/image/C4E0BAQEvmOY4jFGUEQ/company-logo_100_100/0/1549227302136?e=2147483647&v=beta&t=1bbNqZOUDrGhwXah9N_fW5fB4hs0lDkup3FGLgfCnSY",
      title: "Real Estate Broker",
      company: "Synergy Properties",
      date: "Jul 2019 - Feb 2021 [ 1 year 8 months ]",
      description:
        "Find new leads and convert them into buyers or sellers. Help clients purchase or sell properties. Advise clients about market conditions, conduct walkthroughs, and provide guidance and assistance through the process of buying, selling, or leasing properties",
      location: "Spokane, Washington, United States",
      link: "https://www.linkedin.com/company/synergy-properties-llc?trk=public_profile_experience-item_profile-section-card_subtitle-click",
    },
  ];

  return (
    <div>
      <Header title="Work History" />
      <Divider sx={{ marginBottom: "10px" }} />
      <Grid
        container
        sx={{
          margin: "auto",
          width: "70%",
          textAlign: "left",
          paddingBottom: "2%",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h6" color="primary">
            Experience
          </Typography>

          {data.map((item, index) => (
            <>
              <Grid
                container
                spacing={1}
                sx={{ marginTop: "10px" }}
                key={index}
              >
                <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5}>
                  <img src={item.image} width="110px" />
                  <Button
                    variant="outlined"
                    color="primary"
                    fontSize="small"
                    onClick={() => window.open(item.link, "_blank")}
                  >
                    <Typography variant="caption" color="primary">
                      Company Link{" "}
                    </Typography>
                  </Button>
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                  <Typography variant="h5" color="black">
                    <b>{item.title}</b>
                  </Typography>
                  <Typography variant="h6" color="black">
                    {item.company}
                  </Typography>
                  <Typography variant="body2" color="gray">
                    {item.date}
                  </Typography>
                  <Typography variant="body2" color="gray">
                    {item.location}
                  </Typography>
                  <Typography variant="body1" color="black">
                    {item.description}
                  </Typography>
                </Grid>
              </Grid>
            </>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
