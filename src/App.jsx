import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import Navbar from './Components/Sheared/Navbar';
import NavbarForPhone from './Components/Sheared/NavbarForPhone';
import Footer from './Components/Sheared/Footer';
function App() {
  return (
    <>
    <Navbar/>
    <NavbarForPhone/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
