import React from 'react'
import { Outlet, Route, Routes } from 'react-router'
import LoginPage from './page/LoginPage'
import HomePage from './page/HomePage'
import Header from './Components/Header/Header'
import Search from './Components/Search/Search'
import Composser from './Components/Composser/Composser'
import Videos from './page/Videos'
import Profile from './page/Profile'

const Layout= ()=>{
     return (
      <>
      <Header/>
      <Outlet/>
      </>
     )
}

const App = () => {
  return (
    <Routes>
      <Route element={<Layout/>}>
      <Route path='/' element={<HomePage/>} />
      <Route path='/videos' element={<Videos/>} />
      </Route>
      <Route path='/search' element={<Search/>} />
      <Route path='/composser' element={<Composser/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/profile' element={<Profile/>} />
   </Routes>
  )
}

export default App
