import { createBrowserRouter } from "react-router-dom"
import Login from "../components/Login"
import Validar from "../components/Validar";
import Error404 from "../components/Error404"
import Ingresar from "../components/Ingresar";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Login/>,
        errorElement: <Error404/>
        
    },

    {
        path:"/validar",
        element: <Validar/>,
        
    },
    {
        path:"/ingresar",
        element: <Ingresar/>,
        
    }
])

export default router