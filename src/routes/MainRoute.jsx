import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Order from "../pages/Order";



const router = createBrowserRouter([
    {path:'/', element : <Layout></Layout>, children : [
        {path:'/',element:<Home></Home>},
        {path:'/menu',element:<Menu></Menu>},
        {path:'/order/:catName',element:<Order></Order>},
        

    ]}
])


export default router