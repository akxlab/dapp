import { Container, Typography, Box } from '@mui/material'
import type { NextPage } from 'next'
import { styled } from '@mui/material/styles';
import Copyright from '../utils/Copyright'
import { Web3Button, Web3Address, Login } from '../components/'
import Link from 'next/link';



const Home: NextPage = () => {
  return (
    <Container maxWidth="lg"><Box   sx={{
      my: 4,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
  

      <Login />

   

       
   

      <footer className="justify-end p-4">
        <Copyright />
      </footer>
    </Box></Container>
  )
}

export default Home