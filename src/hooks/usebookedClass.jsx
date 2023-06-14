import { useQuery } from "@tanstack/react-query";


const usebookedClass = () => {
    const {data: menu = [], isLoading: loading } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/class');
            return res.json();
        }
    })
    return [menu, loading]
};

export default usebookedClass;

