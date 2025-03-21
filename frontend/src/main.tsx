import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import NewConcert from './pages/NewConcert.tsx'
import NavBar from './pages/NavBar.tsx'

const router = createBrowserRouter([
  {path: "/", element: <Home/>},
  {path: "/AddNewConcert", element: <NewConcert/>}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar />
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
