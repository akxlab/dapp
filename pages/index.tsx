import { Container, Box } from '@mui/material'
import type { NextPage } from 'next'

import Copyright from '../utils/Copyright'
import {  Login } from '../components/'



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