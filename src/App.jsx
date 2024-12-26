import { Route, Routes } from "react-router-dom"
import { Navbar } from "./Components/Navbar"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { FlageDetails } from "./pages/FlageDetails"
import { Footer } from "./Components/Footer"

function App() {
  return (
    <div className="bg-lightblack h-[100vh] overflow-y-auto">
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/flage/:id" element={<FlageDetails/>}/>
   </Routes>
   <Footer/>
    </div>
  )
}
export default App
