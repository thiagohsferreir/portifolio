import React from 'react'
import { Tudo, AsideP, Textos } from './MainStyle'
//ASSETS
import DevImg from "./AssetsMain/programador.png"
export default function Main() {
  return (
    <Tudo>
    
    <AsideP>
    <Textos>
        <h1>Ola! 🛡️ Sou o Thiago!</h1>
        <h3>Desenvolvedor Web</h3>
    </Textos>
    <button>DOWNLOAD CV</button>
    </AsideP>
    <aside>
        <img src={DevImg} alt="" />
    </aside>


    </Tudo>
  )
}
