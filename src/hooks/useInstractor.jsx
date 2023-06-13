

import { useContext } from "react"
import { AuthContext } from "../Pages/Providers/AuthProviders"
import useAxiousSecure from "./useAxiousSecure";
import { useQuery } from "@tanstack/react-query";

const useInstractor = () =>{
    const {user} = useContext(AuthContext);
    console.log(user.email);
    const [axiosSecure] = useAxiousSecure();
    const {data: isInstractor, isLoading: isLoadingInstractor} = useQuery({
        queryKey: ['isInstractor', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/user/instractor/${user?.email}`);
            console.log('is admin response', res);
            return res.data.instractor;
        }
    })
    return [isInstractor, isLoadingInstractor]
}
export default useInstractor;