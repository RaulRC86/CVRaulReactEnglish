import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Footer, Navbar } from "./components"
import {Home, Experiencia, Educacion, Portafolio} from "./views"

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/experiencia" element={<Experiencia/>}/>
  <Route path="/educacion" element={<Educacion/>}/>
  <Route path="/portafolio" element={<Portafolio/>}/>
 </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
