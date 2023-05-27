import { useEffect, useState } from "react"

const useMenu = () => {
    const [menu, setMenu] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:3000/menu')
            .then(res => res.json())
            .then(d => {
                setMenu(d)
                setLoading(false)
            })
            .catch(e => console.log(e))

    }, [])
    return [menu,loading]
}

export default useMenu