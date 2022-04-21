import React from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'

export default function App () {
  return (
    <div className='App'>
      <Header />

      <div className='container md:max-w-3xl'>
        <p className='text-lg'>
          Esta es una aplicación para la organización de tu colección de FunkoPop! Sobre Marvel.<br />
          Esta aplicación esta desarrollada solo para fines educativos.
        </p>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/wishlist' element={<Wishlist />} />
        </Routes>
      </div>
    </div>
  )
}
