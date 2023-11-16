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
    path : "/our_shop",
    lazy: async () => {
      const OurShop = (await import("./pages/ourShop/OurShop")).default 
      return{
        element: <OurShop/>
      }
    }
  },
  {
    path : "/our_custom",
    lazy : async () => {
      const OurCustom = (await import("./pages/ourCustom/OurCustom")).default
      return{ 
        element: <OurCustom/>
      }
    }
  },
  {
    path : "/login",
    lazy : async () => {
      const Login = (await import("./pages/login/Login")).default
      return{ 
        element: <Login/>
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
