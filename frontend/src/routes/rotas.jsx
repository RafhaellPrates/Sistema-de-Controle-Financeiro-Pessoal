import { createBrowserRouter} from 'react-router-dom'


import Home from '../pages/home'
import Login from '../pages/login'
import Register from '../pages/register'

import PrivateRoute from '../components/privateRoutesComponents'


const router = createBrowserRouter([
  {path: '/', element:<PrivateRoute><Home /></PrivateRoute> , },
  {path: '/login', element: <Login />,},
  {path: '/register', element: <Register />,},
  {path: '*', element: <p>Rota não encontrada</p>}
])

export default router