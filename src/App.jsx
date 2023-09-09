import Home from './pages/Home/Home'
import Cities from './pages/Cities/Cities'
import { RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom'
import LayoutMain from './pages/LayoutMain/LayoutMain'
import NotFound from './pages/NotFound/NotFound'
import Details from './pages/Details/Details'
import { useSelector } from 'react-redux'
import Signin from './pages/Signin/Signin'
import Signup from './pages/Signup/Signup'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer 
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default App