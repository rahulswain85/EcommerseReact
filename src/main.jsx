import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import Products from './components/Products.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import GetStarted from './components/GetStarted.jsx'
import { UserProvider } from './components/UserContext.jsx'
import Admin from './components/Admin.jsx'
import { ProductProvider } from './components/ProductContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProductProvider>
        <UserProvider>
          <Layout />
        </UserProvider>
      </ProductProvider>
    ),
    children: [
      {
        path: "/",
        element: <GetStarted />,
      },
      {
        path: "/admindashboard",
        element: <Admin />,
      },

      {
        path: "/home",
        element: <Home />,
      },

      {
        path: "/explore",
        element: <Products />,
      },
      {
        path: "/contactus",
        element: <Contact />,
      },
      {
        path: "/aboutus",
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
