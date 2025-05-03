import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Projectpage from "./components/FlowToCode/Projectpage.jsx"
import Homepage from "./components/HomePage/HomePage.jsx"
import AlgoToCodepage from "./components/AlgoToCode/AlgoToCodepage.jsx"

function ProjectPage(){
  return (
    <>
      <Projectpage/>
    </>
  )
}

function HomePage(){
  return (
    <>
      <Homepage/>
    </>
  )
}

function AlgoToCodePage(){
  return (
    <>
      <AlgoToCodepage/>
    </>
  )
}

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/FlowToCode' element={<ProjectPage/>}/>
        <Route path='/AlgoToCode' element={<AlgoToCodePage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
