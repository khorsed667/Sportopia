import { useQuery } from "@tanstack/react-query";

const usebookedClass = () =>{
    const {data : classes = [], isLoading: loading} = useQuery({
        queryKey: ['class'],
        queryFn: async () =>{
            const res = await fetch('https://sportofia-server-khorsed667.vercel.app/class');
            return res.json();
        }
    })
    return [classes, loading]
}

export default usebookedClass;

