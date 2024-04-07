import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from '../lib/main'
import classes from './App.module.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header className={classes.headerStyle}>Testing Header</Header>
     </>
  )
}

export default App
