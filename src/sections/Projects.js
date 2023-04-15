import React from "react";
import { Divider } from "@mui/material";
import Header from "../components/Header";
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import Chip from '@mui/joy/Chip';
import IconButton from '@mui/joy/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import { CardOverflow } from "@mui/joy";
import Button from '@mui/joy/Button';
import Grid from '@mui/material/Grid';
import LanguageIcon from '@mui/icons-material/Language';
import Skills from "./Skills";

export default function Projects() {

    const projectsList = [
        {
            title: "IntelliTerminal",
            description: "IntelliTerminal is an extension to Intellitect.com that adds a game for new hires. Please visit console.intellitect.com",
            image: "terminal.png",
            link: "https://console.intellitect.com",
            lastUpdated: "2022-10-02",
            repo: "https://github.com/amoltafet/IntellitectTerminal",
            languages: ["Python", "C++"],
        },
        {
            title: "Oval Real Estate",
            description: "Oval is a real estate dashboard that allows users to view and manage their properties. This project was built with React, Node, and MongoDB.",
            image: "oval.png",
            link: "https://amoltafet.github.io/Oval/",
            lastUpdated: "2021-10-01",
            repo: "https://github.com/amoltafet/Oval",
            languages: ["React", "Node", "MongoDB"],
        },
        {
            title: "Investment Club Website",
            description: "This project was more focused on the animations rather than the functionality. It was built with React and Framer Motion.",
            image: "investment.png",
            link: "https://amoltafet.github.io/guic/",
            lastUpdated: "2021-10-01",
            repo: "https://github.com/amoltafet/guic",
            languages: ["React", "Framer Motion"],
        },
        {
            title: "Rock Water",
            description: "My own programming language with the following capabilities: Module System, Lexer, AST Parser, Prettify, Call Expressions.",
            image: "rock.jpeg",
            link: "https://amoltafet.github.io/RockWater/", 
            lastUpdated: "2021-10-01",
            repo: "https://github.com/amoltafet/RockWater",
            languages: ["Python", "C++"]
        },
    ]

    return (
        <div>
            <Header title="Projects"/>
            <Grid item xs={12} sm={12} md={12} lg={12} id="skills">
                   
                    <Divider />
                    <Skills />
                </Grid>
            <MainProject />
            <Grid container
                spacing={2}
                sx={{
                    padding: "2%",
                }}
            >
                

                {projectsList.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={project.title}>
                        <ProjectCard 
                            key={`project-card-${index}`}
                            id={`project-card-${index}`}
                            value={project}
                        />
                    
                    </Grid> 
                ))}

              
             </Grid>    

        </div>

    );
}   

function ProjectCard({value}) {
    const {
        title,
        description,
        link,
        repo,
        languages,
        image,
      } = value;

    return (
        <Card variant="outlined" >
            <CardOverflow>
                <AspectRatio ratio="2">
                    <img
                        src={image}
                        srcSet={require(`../img/${image}`)}
                        alt=""
                        />
                </AspectRatio>
            </CardOverflow>
            <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}> {title} </Typography>
                            <Typography variant="subtitle2" gutterBottom sx={{ mt: 0.5, mb: 2 }}>
                                {description}
                            </Typography>
                            <Divider />
                            <CardOverflow
                                variant="soft"
                                sx={{
                                display: 'flex',
                                gap: 1.5,
                                py: 1.5,
                                px: 'var(--Card-padding)',
                                bgcolor: 'background.level1',
                                }}
                            >
                                {languages.map((language, index) => (
                                    <Chip
                                    size="sm"
                                    variant="outlined"
                                    color="neutral"
                                    key={`project-card-${index}`}
                                  >
                                    {language}
                                  </Chip>    
                                ))}
                                
                                <Divider orientation="vertical" />
                                <Button size="sm" variant="outlined" color="primary" sx={{ ml: 'auto' }} onClick={() => window.open(link, "_blank")}>
                                    Demo 
                                </Button>
                                <IconButton size="sm" color="neutral" onClick={() => window.open(repo, "_blank")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
                    </IconButton>
                  
                            </CardOverflow>
                            </Card>
)
}

function MainProject() {
    return ( 
        <div style={{
            padding: "2%",
            display: "flex",
            flexDirection: "row",
            gap: "2%",
            width: "100%",
            height: "100%",
        }}>
        <Card
            sx={{
                width: '30%',
                bgcolor: 'initial',
                boxShadow: 'none',
                '--Card-padding': '0px',
            }}>
            <Box sx={{ position: 'relative' }}>
                <AspectRatio ratio="4/3">
                <figure>
                    <img
                    src="https://consultqd.clevelandclinic.org/wp-content/uploads/sites/2/2016/08/Micorsoft-Hololens-650x450.jpg"
                    srcSet="https://consultqd.clevelandclinic.org/wp-content/uploads/sites/2/2016/08/Micorsoft-Hololens-650x450.jpg"
                    loading="lazy"
                    alt="Ovicore Technologies"
                    />
                </figure>
                </AspectRatio>
                <CardCover
                className="gradient-cover"
                sx={{
                    '&:hover, &:focus-within': {
                    opacity: 1,
                    },
                    opacity: 0,
                    transition: '0.1s ease-in',
                    background:
                    'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
                }}
                >
                {/* The first box acts as a container that inherits style from the CardCover */}
                <Box>
                    <Box
                    sx={{
                        p: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        flexGrow: 1,
                        alignSelf: 'flex-end',
                    }}
                    >
                    <Typography level="h2" noWrap sx={{ fontSize: 'lg' }}>
                        <Link
                        href="#dribbble-shot"
                        overlay
                        underline="none"
                        sx={{
                            color: '#fff',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            display: 'block',
                        }}
                        >
                        AR Platform for Medical Education
                        </Link>
                    </Typography>
                    <IconButton size="sm" color="neutral" sx={{ ml: 'auto' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
                    </IconButton>
                    <IconButton size="sm" color="neutral" onClick={() => window.open("https://ovicore.com", "_blank")}>
                        <LanguageIcon />
                    </IconButton>
                    </Box>
                </Box>
                </CardCover>
            </Box>
            <Box sx={{ display: 'flex', gap: 1, mt: 1.5, alignItems: 'center' }}>
                <Avatar
                src="https://media.licdn.com/dms/image/D560BAQFcDRsgYuT8eQ/company-logo_200_200/0/1667338740279?e=2147483647&v=beta&t=chW3QbUnoNOecC1c5dpnB-34DbA9uwqgsXcMnjvCrrM"
                size="sm"
                sx={{ '--Avatar-size': '1.5rem' }}
                />
                <Typography sx={{ fontSize: 'sm', fontWeight: 'md' }}>
                Ovicore Lab
                </Typography>
                <Chip
                variant="outlined"
                color="neutral"
                size="sm"
                sx={{
                    borderRadius: 'sm',
                    py: 0.25,
                    px: 0.5,
                }}
                >
                My Passion
                </Chip>
              
                <Link
                href="#dribbble-shot"
                level="body3"
                underline="none"
                startDecorator={<Visibility />}
                sx={{
                    fontWeight: 'md',
                    color: 'text.secondary',
                    '&:hover': { color: 'primary.plainColor' },
                }}
                >
                ovicore.com
                </Link>
            </Box>
         </Card>
         <div style={{
            width: '80%',
         }}>
            <Typography variant="h3" sx={{ fontSize: 'lg', mt: 2 }}>
                Ovicore Lab | AR Platform for Medical Education
    
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 'lg', mt: 2 }}>
            Ovicore creates tools that enable the implementation of augmented reality technology in educational environments.
            </Typography>
            <Typography variant="h5" sx={{ fontSize: 'lg', mt: 2 }}>
                I started working on this project in 2022. I was responsible for the development of the AR platform and the integration of the AR content. My goal was to create a platform that would allow the student to interact with the educational content in a more immersive way.
                
            </Typography>

         </div>
                </div> 

    )
}

