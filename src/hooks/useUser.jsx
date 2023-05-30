import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiossecure"

const useUser = () => {
    const [axiosSecure] = useAxiosSecure()
    const {data, refetch, isLoading, error} = useQuery({
        queryKey:['users'],
        queryFn: async () => {
            const res = await axiosSecure('/users')
            return res.data
        }
    })
    return {data, refetch, isLoading, error}
}


export default useUser