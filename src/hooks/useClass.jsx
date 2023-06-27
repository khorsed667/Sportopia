import { useContext } from "react";
import { AuthContext } from "../Pages/Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import useAxiousSecure from "./useAxiousSecure";


const useClass = () => {

    const {user} = useContext(AuthContext);
    // const token = localStorage.getItem('access-token')
    const [axiosSecure] = useAxiousSecure();
    const {refetch, data: carts = []} = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure(`/cart?email=${user?.email}`)
            console.log('res from axios', res);
            return res.data;
        }
        // queryFn: async () =>{
        //     const res = await fetch(`https://sportofia-server-khorsed667.vercel.app/cart?email=${user?.email}`,{
        //         headers: {
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     return res.json();
        // }
    })
    return [carts, refetch]

};

export default useClass;