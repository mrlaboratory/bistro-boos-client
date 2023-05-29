import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"

const useCart = () => {
    const {user} = useContext(AuthContext)
    const { refetch , isLoading, error, data } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res =  await fetch('http://localhost:3000/carts')
            return res.json()
        }
      })
      return [data,refetch, isLoading, error ]
}


export default useCart