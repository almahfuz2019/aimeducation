import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Sheared/Navbar';
import NavbarForPhone from './Components/Sheared/NavbarForPhone';
import Footer from './Components/Sheared/Footer';
import DeshboardHome from './Components/Deshboard/DeshboardHome';
function App() {
  return (
    <>
    <Navbar/>
    <NavbarForPhone/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/deshboard' element={< DeshboardHome/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
