import { createBrowserRouter} from 'react-router-dom'


import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Register from '../pages/Register'

import PrivateRoute from '../components/PrivateRoutes'


const router = createBrowserRouter([
  {path: '/', element:<PrivateRoute><Dashboard /></PrivateRoute> , },
  {path: '/login', element: <Login />,},
  {path: '/register', element: <Register />,},
  {path: '*', element: <p>Rota não encontrada</p>}
])

export default router