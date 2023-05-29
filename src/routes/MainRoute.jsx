import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Order from "../pages/Order";
import Login from "../pages/Login";
import Register from "../pages/Register";



const router = createBrowserRouter([
    {path:'/', element : <Layout></Layout>, children : [
        {path:'/',element:<Home></Home>},
        {path:'/menu',element:<Menu></Menu>},
        {path:'/order/:catName',element:<Order></Order>},
        

    ]},
    {path:'/login' , element : <Login></Login>},
    {path:'/register' , element : <Register></Register>}
])


export default router