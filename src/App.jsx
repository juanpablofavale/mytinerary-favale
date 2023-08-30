import Home from './pages/Home/Home'
import Cities from './pages/Cities/Cities'
import { RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom'
import LayoutMain from './pages/LayoutMain/LayoutMain'
import NotFound from './pages/NotFound/NotFound'
import Details from './pages/Details/Details'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const router = createBrowserRouter([
  {path: '/', element: <LayoutMain />, children:[
    {path: '/', element: <Home/>},
    {path: '/cities', element: <Cities/>},
    {path: '/details/:id', element: <Details />},
    {path: '*', element: <NotFound/>}
  ]},
])

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </>
  )
}

export default App