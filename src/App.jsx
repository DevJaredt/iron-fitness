import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from './pages/index/Index';
import Nav from './componets/nav/Nav';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>
  },
  {
    path: "/about_us",
    lazy: async () => {
      const AboutUs = (await import("./pages/aboutUs/AboutUs")).default
      return {
        element: <AboutUs/>
      }
    }
  },
  {
    path : "/our_shop",
    lazy: async () => {
      const OurShop = (await import("./pages/ourShop/OurShop")).default 
      return{
        element: <OurShop/>
      }
    }
  }
]);

function App() {
  return (
    <>
      <Nav/>
      <RouterProvider router={router} />
    </>
  )
}

export default App
