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
import CardMedia from '@mui/material/CardMedia';

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
            
            <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={require('../img/ahmad.jpeg')}
            alt="Live from space  cover"
        />
               
                <Typography variant="h3" color="primary">
                    Ahmad Moltafet
                </Typography>
                <Socials />
              

            </Grid>

        </Grid>
    </div>
  );
}
