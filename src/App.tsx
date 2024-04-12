// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Col } from 'antd'
import './App.css'
import Searcher from './components/Searcher'
import PokemonCard from './components/PokemonCard'

function App() {

  return (
    <>    
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>     
      <PokemonCard />
    </>
  )
}

export default App
