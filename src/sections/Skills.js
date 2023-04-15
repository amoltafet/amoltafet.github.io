
import React from 'react';
import Header from '../components/Header.js';
import { Grid, Typography } from '@mui/material';

export default function Skills() {
    return (
        <div>
            <Header title="Skills"/>
            <Grid container sx={{
                margin: 'auto',
                padding: "2%",
            }}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h4" color="black">
                        All Skills
                    </Typography>
                    <Typography variant="body1" color="black">
                        List of all frameworks and languages I have used in any setting.
                    </Typography>
                    <Typography variant="body1" color="black">
                        React, React Native, Node.js, Express.js, Bootstrap, Material-UI, jQuery, Django, Flask, Bootstrap, Material-UI, jQuery, Django, Flask
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h4" color="black">
                        Professional Experience 
                    </Typography>
                    <Typography variant="body1" color="black">
                        List of all frameworks and languages I have used in any professional settings.
                    </Typography>
                    <Typography variant="body1" color="black">
                        C, C++, Java, Python, JavaScript, HTML, CSS, SQL, PHP, C#, MATLAB, R, Assembly, Bash, Verilog, VHDL, MIPS, ARM, x86, x86_64, RISC-V, MIPS, ARM, x86, x86_64, RISC-V
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h4" color="black">
                        Educational Experience
                    </Typography>
                    <Typography variant="body1" color="black">
                        List of all frameworks and languages I have used in any educational settings.
                    </Typography>
                    <Typography variant="body1" color="black">
                        React, React Native, Node.js, Express.js, Bootstrap, Material-UI, jQuery, Django, Flask, Bootstrap, Material-UI, jQuery, Django, Flask
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h4" color="black">
                        My Own Projects
                    </Typography>
                    <Typography variant="body1" color="black">
                        List of all frameworks and languages I have used in my own projects.
                    </Typography>
                    <Typography variant="body1" color="black">
                        React, React Native, Node.js, Express.js, Bootstrap, Material-UI, jQuery, Django, Flask, Bootstrap, Material-UI, jQuery, Django, Flask
                    </Typography>
                </Grid>
            </Grid>
        </div>

    );
}

