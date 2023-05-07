import React from "react";
import { Typography, Box } from "@mui/material";
import Chip from "@mui/joy/Chip";

export default function Skills() {
  const languages = ["Python", "C++", "Java", "JavaScript", "HTML/CSS", "SQL"];
  const frameworks = [
    "React",
    "Bootstrap",
    "Material-UI",
    "Node.js",
    "Express.js",
  ];
  const databases = ["MongoDB", "MySQL"];

  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        alignItems: "center",
        marginTop: "1%",
        marginLeft: "2%",
      }}
    >
      <Typography variant="h6" color="primary">
        Skills / Languages:
      </Typography>
      {languages.map((skill, index) => (
        <Chip variant="soft" key={index} sx={{ margin: "2px" }} color="primary">
          {skill}
        </Chip>
      ))}
      {frameworks.map((skill, index) => (
        <Chip variant="soft" key={index} sx={{ margin: "2px" }} color="primary">
          {skill}
        </Chip>
      ))}
      {databases.map((skill, index) => (
        <Chip variant="soft" key={index} sx={{ margin: "2px" }} color="primary">
          {skill}
        </Chip>
      ))}
    </Box>
  );
}
