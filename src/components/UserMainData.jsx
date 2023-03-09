import { getUserMainData } from "../utils/api"
import {useEffect, useState} from "react"

function UserMainData() {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const getData = async() => {
            const result = await getUserMainData()
            const response = await result.json()
            setUserData(response.data)
        }
        getData()
    }, [])

    return userData
}
export default UserMainData