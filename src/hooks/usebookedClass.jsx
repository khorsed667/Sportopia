import { useQuery } from "@tanstack/react-query";

const usebookedClass = () =>{
    const {data : classes = [], isLoading: loading} = useQuery({
        queryKey: ['class'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/class');
            return res.json();
        }
    })
    return [classes, loading]
}

export default usebookedClass;

