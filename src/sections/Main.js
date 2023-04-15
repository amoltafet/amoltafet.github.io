import MainCard from '../components/MainCards.js';
import Socials from '../components/Socials.js';
import { Typography } from '@mui/material';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import Chip from '@mui/joy/Chip';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';
import PublicIcon from '@mui/icons-material/Public';
import CreateNewFolder from '@mui/icons-material/CreateNewFolder';

export default function Main() {
  return (
    <div>
        
        <MenuOutlinedIcon fontSize='large' sx={{position: 'absolute', top: 0, right: 0, color: 'primary.main', padding: "3%"}}/>
        <Grid container sx={{
            margin: 'auto',
            textAlign: 'center',
            alignItems: 'center',
            width: '80%',
            justifyContent: 'center',
            minHeight: '100vh',
        }}>
            <Grid item xs={12} sm={6}>
                <MainCard />
               
            </Grid>
            <Grid item xs={12} sm={6} sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Typography variant="h1" color="primary">
                    Ahmad Moltafet
                </Typography>
                <Socials />
                <Grid container sx={{
                    marginTop: "3%",
                    justifyContent: 'center',
                }}>
                    <Grid item xs={12} sm={6}>
                        <Passion />
                    </Grid>
                </Grid>

            </Grid>

        </Grid>
    </div>
  );
}


function Passion() {
  return (
        <Card
          sx={{
            width: 300,
            bgcolor: 'initial',
            boxShadow: 'none',
            '--Card-padding': '0px',
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <AspectRatio ratio="4/3">
              <figure>
                <img
                  src="https://i.pinimg.com/originals/9b/3e/a8/9b3ea8029e0147f2600231d79537dc44.jpg"
                  srcSet="https://i.pinimg.com/originals/9b/3e/a8/9b3ea8029e0147f2600231d79537dc44.jpg"
                  loading="lazy"
                  alt="Yosemite by Casey Horner"
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
                      ovicore.com
                    </Link>
                  </Typography>
                  <IconButton size="sm" color="neutral" sx={{ ml: 'auto' }} onClick={() => window.open("https://ovicore.com", "_blank")}>
                    <PublicIcon />
                  </IconButton>
                 
                </Box>
              </Box>
            </CardCover>
          </Box>
          <Box sx={{ display: 'flex', gap: 1, mt: 1.5, alignItems: 'center' }}>
            
            <Typography sx={{ fontSize: 'sm', fontWeight: 'md' }}>
             Ovicore Lab | AR Platform
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
              Featured
            </Chip>
            
          </Box>
        </Card>
  );
}

