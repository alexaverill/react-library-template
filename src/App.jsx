import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, LoadConfig, Header, Logging } from '../lib/main'
import classes from './App.module.css';

function App() {

  LoadConfig();
  return (
    <>
    <Header className={classes.headerStyle}>Testing Header</Header>
    <Button onClick={()=> Logging.Warn("test")}>Test Button</Button>
     </>
  )
}

export default App
