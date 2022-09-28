import React from 'react'
import { useWeb3 } from '../hooks/Web3Client'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button'
import {ThemeProvider} from '@mui/material'
import theme from '../styles/theme/darkTheme'

interface ConnectProps {
  connect: (() => Promise<void>) | null
}
export const ConnectButton = ({ connect }: ConnectProps) => {
  return connect ? (
    <Button variant="contained" onClick={connect}>Connect</Button>
  ) : (
    <Button variant="contained" >loading</Button>
  )
}

interface DisconnectProps {
  disconnect: (() => Promise<void>) | null
}

export const DisconnectButton = ({ disconnect }: DisconnectProps) => {
  return disconnect ? (
    <Button variant="contained" onClick={disconnect}>Disconnect</Button>
    ) : (
      <Button variant="contained" >loading</Button>
  )
}

export function Web3Button() {
  const { web3Provider, connect, disconnect } = useWeb3()

  return web3Provider ? (
    <DisconnectButton disconnect={disconnect} />
  ) : (
   
    <ConnectButton connect={connect} />
   
  )
}