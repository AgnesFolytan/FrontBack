import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import NewConcert from './pages/NewConcert.tsx'

const router = createBrowserRouter([
  {path: "/", element: <Home/>},
  {path: "/AddNewConcert", element: <NewConcert/>}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
