import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './root'
import Home from './routes/Home/Home'
import Featured from './routes/Featured/Featured'
import Women from './routes/Women/Women'
import Men from './routes/Men/Men'
import Kids from './routes/Kids/Kids'
import Register from './routes/Register/Register'
import Login from './routes/Login/login'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/featured',
        element: <Featured />,
      },
      {
        path: '/women',
        element: <Women />,
      },
      {
        path: '/men',
        element: <Men />,
      },
      {
        path: '/kids',
        element: <Kids />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
