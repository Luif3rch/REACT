import React, { useEffect, useState } from "react";



import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import '@fontsource/roboto/500.css';

import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//componentes
import Copyright from '../components/Copyright';
import ChuckGif from '../img/ChuckGif.gif';

//servicios
import LoginService from '../services/login.js';

//


export default function SignInSide() {



 
  
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  


  const theme = createTheme({
    palette: {
      primary: {
        main: '#e53935',
      },
      secondary: {
        main: '#d32f2f',
      },
    },
  });
  



  useEffect(() => {
    console.log('SignInSide');
  }, [])

//
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get('username'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://www.pngitem.com/pimgs/m/157-1579962_chuck-norris-chuck-norris-cartoon-pics-transparent-hd.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <img src={ChuckGif} alt="Chuck" />
            </Avatar>


            <Typography component="h1" variant="h5" >
             CHUCK PAGE API
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                autoFocus
                label="username"
                autoComplete="username"


                id="username"
                name="username"
                value={username}
                onChange={({target}) => setUsername(target.value)}
                
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                value={password}
                type="password"
                id="password"
                autoComplete="password"
                onChange={({target}) => setPassword(target.value)}
              />


              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: 'error.main' } }
                
              >
                Sign In
              </Button>
              
              <Grid container>
                <Grid item xs>
                  <Link href="/ForgetPass" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/SignUp" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}



