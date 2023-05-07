import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";

export default function MainCard() {
  const data = [
    {
      title: "My Projects",
      image:
        "https://images.unsplash.com/photo-1527219525722-f9767a7f2884?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
      link: "/#projects",
    },
    {
      title: "Research",
      image:
        "https://images.unsplash.com/photo-1501290741922-b56c0d0884af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
      link: "/#research",
    },
    {
      title: "Work History",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
      link: "/#work",
    },
    {
      title: "Education",
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
      link: "/#education",
    },
  ];
  return (
    <div>
      {data &&
        data.map((item) => (
          <Card
            key={item.title}
            orientation="horizontal"
            variant="outlined"
            sx={{
              width: 260,
              bgcolor: "background.body",
              marginTop: 2,
              marginBottom: 2,
              // change the color of the card on hover
              "&:hover": {
                boxShadow: "0 0 0 1px #000000",
                width: 270,
              },
            }}
          >
            <CardOverflow>
              <AspectRatio ratio="1" sx={{ width: 90 }}>
                <Link href={item.link} overlay underline="none">
                  <img
                    src={item.image + "?auto=format&fit=crop&w=90"}
                    srcSet={`${
                      item.image + "?auto=format&fit=crop&w=90&dpr=2"
                    } 2x`}
                    loading="lazy"
                    alt=""
                  />
                </Link>
              </AspectRatio>
            </CardOverflow>
            <CardContent sx={{ px: 2 }}>
              <Typography
                fontWeight="md"
                textColor="success.plainColor"
                mb={0.5}
              >
                <Link href={item.link} overlay underline="none">
                  {item.title}{" "}
                </Link>
              </Typography>
            </CardContent>
            <Divider />
            <CardOverflow
              variant="soft"
              color="primary"
              sx={{
                px: 0.2,
                writingMode: "vertical-rl",
                textAlign: "center",
                fontSize: "xs2",
                fontWeight: "xl2",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              <Link href={item.link} overlay underline="none">
                View{" "}
              </Link>
            </CardOverflow>
          </Card>
        ))}
    </div>
  );
}
