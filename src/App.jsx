import { Routes, Route } from 'react-router-dom'
import { LanguageGame } from "./LanguageGame"
import { Intro } from "./Intro"
import "./styles.css"


export default function App(){

  return (

    <>
      <Routes>        
        <Route path="/" element={<Intro />}/ >
        <Route path="/conjugation" element={<LanguageGame />}/ >
      </Routes>
    </>

    )
}