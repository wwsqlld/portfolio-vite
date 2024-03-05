
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home  from './pages/Home.jsx';
import About  from './pages/About.jsx';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {

  return (
    <div className='app'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} /> 
    </Routes>
    <Footer />
    </div>
  )
}

export default App
