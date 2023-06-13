import { useContext } from "react";
import { AuthContext } from "../Pages/Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";


const useClass = () => {

    const {user} = useContext(AuthContext);

    const {refetch, data: carts = []} = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/cart?email=${user?.email}`)
            return res.json();
        }
    })
    return [carts, refetch]

};

export default useClass;