import Home from './pages/Home/Home'
import Cities from './pages/Cities/Cities'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LayoutMain from './pages/LayoutMain/LayoutMain'
import NotFound from './pages/NotFound/NotFound'
import Details from './pages/Details/Details'

const router = createBrowserRouter([
  {path: '/', element: <LayoutMain />, children:[
    {path: '/', element: <Home/>},
    {path: '/cities', element:<Cities/>},
    {path: '/cities/details/:id', element: <Details />},
    {path: '*', element: <NotFound/>}
  ]},
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App