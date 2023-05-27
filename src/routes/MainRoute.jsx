import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";



const router = createBrowserRouter([
    {path:'/', element : <Layout></Layout>, children : [
        {path:'/',element:<Home></Home>},
        

    ]}
])


export default router