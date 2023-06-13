import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main/Main";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Classes from "../Classes/Classes";
import MyClass from "../DashBoard/MyClass/MyClass";
import Dashing from "../LayOut/Dashing/Dashing";
import PrivateRoutes from "./PrivateRoutes";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path: 'singup',
          element:<Register></Register>
        },
        {
          path: 'classes',
          element: <Classes></Classes>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoutes><Dashing></Dashing></PrivateRoutes>,
      children:[
        {
          path:'selectedclass',
          element:<MyClass></MyClass>
        }
      ]
    }
  ]);