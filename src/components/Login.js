import { Grid, Checkbox, Paper, Avatar, TextField, FormControlLabel, Button, Typography} from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';

const Login = () => {
  
  // styling Varivble
  const paperStyle = {padding: 20, height: "70vh", width:280, margin:"20px auto"}
  const avatarStyle = {backgroundColor:'#1bbd7e'}
  const textFieldStyle = {marginTop:20}
  const btnStyle = {margin: "8px 0"}

    return (
    <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><LockIcon /></Avatar>
                    <h2>Login</h2>
                </Grid>
                <TextField label="Username" placeholder='Enter username' size="Small" fullWidth required  style={textFieldStyle}/>
                <TextField label="Password" placeholder='Enter password' type="password" style={textFieldStyle} fullWidth required />          
                <FormControlLabel
                control={
                    <Checkbox 
                        name="checkedB"
                        color="primary"
                    />
                }
                label="Remember me"
            />
                <Button type="submit" color="primary" variant='contained' style={btnStyle} fullWidth>Sign in</Button>
                <Typography> 
                    <Link to="/forgetpass">
                     Forgot password?
                </Link> 
                </Typography>

                <Typography> Don't have an account?  
                    <Link to="signup">
                     Sign up 
                    </Link>
                </Typography>
            </Paper >
    </Grid>
  )
}

export default Login;