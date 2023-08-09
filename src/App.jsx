import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import Cities from './pages/Cities/Cities'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LayoutMain from './pages/LayoutMain/LayoutMain'
import NotFound from './pages/NotFound/NotFound'

const router = createBrowserRouter([
  {path: '/', element: <LayoutMain />, children:[
    {path: '/', element: <Home/>},
    {path: 'cities', element:<Cities/>},
    {path: '*', element: <NotFound/>}
  ]}
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
      {/*
        <Home />
        <Cities />
      */}
    </>
  )
}

export default App
