import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from './pages/index/Index';
import Nav from './componets/nav/Nav';



// /* eslint-disable no-unused-vars */
// import { useState } from 'react'
// //importando Los modulos de firebase
// import appFirebase from '../src/credenciales'
// import {getAuth, onAuthStateChanged} from 'firebase/auth'
// const auth = getAuth(appFirebase)
// //importar nuestro componentes
// import Login from '../src/components/Login'
// import './App.css'

// function App(){

// const [usuario, setUsuario] = useState(null)
//   onAuthStateChanged (auth, (usuarioFirebase) =>{
//     if (usuarioFirebase) {
//       setUsuario(usuarioFirebase)
//   }
//     else
//   {
//       setUsuario (null)
//   }
// return (
// <div>
// {usuario? <HomeLogin correoUsuario = {usuario.email} /> <Login/>}
// </div>
// )
// }
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
