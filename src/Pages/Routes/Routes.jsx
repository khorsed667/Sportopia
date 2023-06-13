import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main/Main";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Classes from "../Classes/Classes";
import DefaultBoard from "../DashBoard/DefaultBoard/DefaultBoard";


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
      path:'deshbord',
      element:<DefaultBoard></DefaultBoard>
    }
  ]);