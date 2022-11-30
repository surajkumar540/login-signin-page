import React, { useState } from 'react'
import { Grid, Paper, Avatar, TextField, FormControlLabel, Button, Typography, FormLabel, Radio, Box } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import { Link } from "react-router-dom";
const Signup = () => {

    // styling Varivble

    const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const textFieldStyle = { marginTop: 10 }
    const btnStyle = { margin: "8px 0" }

    return (
        <Grid >
            <Paper elevation={20} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><AddCircleIcon /></Avatar>
                    <h2>Sign up</h2>
                </Grid>
                <TextField label="name" placeholder='Enter name' size="small" fullWidth required style={textFieldStyle} />
                <TextField label="email" placeholder='Enter email' size="small" fullWidth required style={textFieldStyle} />
                <TextField label="phone no" placeholder='Enter phone no' size="small" type="number" fullWidth required style={textFieldStyle} />
                <TextField label="Password" placeholder='Enter password' size="small" type="password" style={textFieldStyle} fullWidth required />
                <TextField label="confirm Password" placeholder='Enter confirm password' size="small" type="password" style={textFieldStyle} fullWidth required />

                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label" style={textFieldStyle}>Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>

                <Button type="submit" color="primary" variant='contained' style={btnStyle} fullWidth>Sign up</Button>


                <Typography> Do you have an account ?
                    <Link to="/">
                        Sign in
                    </Link>
                </Typography>
            </Paper >
        </Grid>
    )
}

export default Signup;