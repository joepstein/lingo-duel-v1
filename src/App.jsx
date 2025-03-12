import { Routes, Route } from 'react-router-dom'
import { Intro } from './Intro'
import { SkillChoice } from './SkillChoice'
import { ConjugationGame } from './ConjugationGame'
import "./styles.css"


export default function App(){

  return (

    <>
      <Routes>        
        <Route path="/" element={<Intro />} />
        <Route path="/skill-choice" element={<SkillChoice />} />
        <Route path="/conjugation" element={<ConjugationGame />} />
      </Routes>
    </>

    )
}