import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../pages/News/News/News";
import LogingLayout from "../Layouts/LogingLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";


const router = createBrowserRouter([
    {
        path: '/',
        element: <LogingLayout></LogingLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Category></Category>,
                loader: () => fetch('http://localhost:5000/news/')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params})=> fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path:'/news',
        element: <NewsLayout></NewsLayout>,
        children:[
            {
                path: ':newsid',
                element: <News></News>,
                
            }
        ]
    }
])

export default router;