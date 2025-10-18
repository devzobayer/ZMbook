import React from 'react'
import { Outlet, Route, Routes } from 'react-router'
import LoginPage from './page/LoginPage'
import HomePage from './page/HomePage'
import Header from './Components/Header/Header'
import Search from './Components/Search/Search'

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
      </Route>
      <Route path='/search' element={<Search/>} />
      <Route path='/login' element={<LoginPage/>} />
   </Routes>
  )
}

export default App
