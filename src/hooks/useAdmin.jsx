import { useContext } from "react"
import { AuthContext } from "../Pages/Providers/AuthProviders"
import useAxiousSecure from "./useAxiousSecure";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () =>{
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiousSecure();
    const {data: isAdmin, isLoading: isLoadingAdmin} =useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/admin/${user?.email}`);
            console.log('is admin response', res);
            return res.data.admin;
        }
    })
    return [isAdmin, isLoadingAdmin]
}
export default useAdmin;