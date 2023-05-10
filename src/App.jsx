import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header/Header'
import styled from "styled-components"
//assets
import Background from "./assets/assets-default/background.png"
import Main from './Components/Main/Main'
function App() {
    const Appl = styled.body`
    display: flex;
    flex-direction: column;
    `
  


  return (
    <Appl>
      <Header/>
      <Main/>
    </Appl>
  )
}

export default App
