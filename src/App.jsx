import Home from './pages/Home/Home'
import Cities from './pages/Cities/Cities'
import { RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom'
import LayoutMain from './pages/LayoutMain/LayoutMain'
import NotFound from './pages/NotFound/NotFound'
import Details from './pages/Details/Details'
import { useSelector } from 'react-redux'
import Signin from './pages/Signin/Signin'
import Signup from './pages/Signup/Signup'

function App() {
  const { logged } = useSelector(store => store.authReducer)

  const router = createBrowserRouter([
    {path: '/', element: <LayoutMain />, children:[
      {path: '/', element: <Home/>},
      {path: '/cities', element: <Cities/>},
      {path: '/details/:id', element: <Details />},
      {path: '/signin', element: logged ? <Cities /> : <Signin />},
      {path: '/signup', element: logged ? <Home /> : <Signup />},
      {path: '*', element: <NotFound/>}
    ]},
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App