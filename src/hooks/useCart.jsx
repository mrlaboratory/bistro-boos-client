import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"
import useAxiosSecure from "./useAxiossecure"

const useCart = () => {
    const [axiosSecure] = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const { refetch, isLoading, error, data } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            return res.data
        }
    })
    return [data, refetch, isLoading, error]
}


export default useCart