import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import theme from "../styles/theme/darkTheme"
import { Web3Button } from './Web3Button';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#1A2027',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Login() {
    return (
        <ThemeProvider theme={theme}> 
            <Container component='main' maxWidth="lg">
                <CssBaseline />
                <Box
          sx={{
            flexGrow: 1
          }}
        > <Grid container spacing={1} rowSpacing={1} sx={{display: 'flex',
        alignItems: 'center', flexGrow:1, textAlign:'center', flexDirection:'column'}}>
         <Grid item xs={12}  ><Avatar sx={{ml:"auto", mr:"auto", mt:0, mb:0}}>
            <LockOutlinedIcon  />
          </Avatar> </Grid>
          <Grid item xs={12}> <Paper sx={{p:2, display:'flex'}}><Typography component="h5" variant="h5">
            Connect your wallet
          </Typography>
            </Paper> </Grid>
       
         
  <Grid xs={12} sx={{mb:10}}><Web3Button /></Grid></Grid></Box>
          
            </Container>
        </ThemeProvider>
    )
}