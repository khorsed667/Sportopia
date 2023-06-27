import { useContext, useEffect } from "react";
import { AuthContext } from "../Pages/Providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const useAxiousSecure = () => {
    const {logOut} = useContext(AuthContext);
    const nevigate = useNavigate();

    const axiosSecure = axios.create({
        baseURL: 'https://sportofia-server-khorsed667.vercel.app',
    })

    useEffect(()=>{
        axiosSecure.interceptors.request.use((config)=>{
            const token = localStorage.getItem('access-token');
            if(token){
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });
        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if(error.response && (error.response.status === 401 )){
                    await logOut();
                    nevigate('/login');
                }
                return Promise.reject(error);
            }
        );
    },[logOut, nevigate, axiosSecure]);

    return [axiosSecure]
};

export default useAxiousSecure;