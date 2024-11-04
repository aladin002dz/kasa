import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from '@pages//root.jsx';
import Home from '@pages/home/index.jsx';
import About from '@pages/about/index.jsx';
import Surprise from '@pages/surprise/index.jsx';
import Annonce from '@pages/annonce/index.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />},
        {
          path: "/annonce",
          element: <Annonce />},
        {
        path: "/benji",
        element: <Surprise />}
    ],
  }
   
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
