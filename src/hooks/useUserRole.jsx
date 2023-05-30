import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiossecure"
import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"


const useUserRole = () => {
    const [axiosSecure]  = useAxiosSecure()
    const {user} = useContext(AuthContext)
    const {data,refetch,isLoading,error}  = useQuery({
        queryKey:['userRole',user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/userRole/${user?.email}`)
            return res.data
        }

    })
    return {data,refetch,isLoading,error}

}

export default useUserRole