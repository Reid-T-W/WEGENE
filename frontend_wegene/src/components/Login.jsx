import React from 'react'
import { Checkbox, Grid,Paper, Avatar, TextField, 
Button, Typography, Link, FormControlLabel, Stack } from'@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

const Login = () => {
    const paperStyle={padding :20, height:'60vh', width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#5800FF'}
    const btn={margin:'8px 0'}
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Stack gap='20px'>
                    <Grid  align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    <TextField label='Username' placeholder='Enter username' fullWidth required/>
                    <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                    <FormControlLabel
                    control={
                    <Checkbox
                        name='checkedB'
                        color='primary'
                    />
                    }
                    label="Remember me"
                />
                    <Button type='submit' color='primary' variant="contained" style={btn} fullWidth>Sign in</Button>
                    <Typography >
                        <Link href="#" >
                            Forgot Password ?
                        </Link>
                    </Typography>
                    <Typography > Do you have an account ?
                        <Link href="#" >
                            Sign Up
                        </Link>
                    </Typography>
                </Stack>
            </Paper>
        </Grid>
    )
}

export default Login