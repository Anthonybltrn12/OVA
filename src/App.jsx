import { useState } from 'react'
import {Routes, Route} from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Client from './components/Clients';
import About from './components/About';
import Header from './components/Header';
import Oraa from './components/Oraa';
import F1xnba from './components/F1xnba';
import Brands from './components/Brands';
import Footer from './components/Footer';
function App() {
  

  return (
    <>
   <Header /> 

    
    <Navbar />
      
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/Clients' element={<Client />} /> 
        <Route path='/Oraanetwork' element={<Oraa />} />
        <Route path='/F1xnba' element={<F1xnba />} />
        <Route path='/brands' element={<Brands />} />
      </Routes>
     
     <Footer />
      
    </>
  )
}

export default App
