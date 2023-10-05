// import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar/NavBar'
import Main from './components/main-content/Main'
import {useState} from 'react'

function App() {
  const [weather,setWeather] = useState({})
  const getData = data => setWeather(data)
  return (
    <div>
      <NavBar dataWeather={getData} />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <Main dataWeather={weather}></Main>
        </div>
      </div>
    </div>
  )
}

export default App
