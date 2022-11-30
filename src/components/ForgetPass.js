import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';

const ForgetPass = () => {
    
    // styling Varivble
    const paperStyle = { padding: 20, height: "50vh", width: "280px", margin: "13% auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const textFieldStyle = { marginTop: 20 }
    const btnStyle = { margin: "8px 0" }

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><MarkEmailUnreadIcon /></Avatar>
                    <h2>Forget Password</h2>
                </Grid>
                <TextField label="Email" type='email' placeholder='Enter your email' size="Small" fullWidth required style={textFieldStyle} />

                <Button type="submit" color="primary" variant='contained' style={btnStyle} fullWidth>Send</Button>
               

                <Typography style={textFieldStyle}> Do you have an account?
                    <Link to="/">
                        Sign in
                    </Link>
                </Typography>
            </Paper >
        </Grid>
    )
}

export default ForgetPass