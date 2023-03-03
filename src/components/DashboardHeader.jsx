import { getUserMainData } from "../utils/api"
import "./DashboardHeader.css"
import {useEffect, useState} from "react";
function DashboardHeader() {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const getData = async() => {
            const result = await getUserMainData()
            const response = await result.json()
            setUserData(response.data)
            // console.log(response.data)
        }
        getData()
    }, [])


  return (

    <div className="dashboard-header-container">
        {userData && <h1 className="dashboard-header-title">Bonjour&nbsp;
          <span className="red-text">{userData.userInfos.firstName}</span>
      </h1>}
      <p className="dashboard-header-text">Félicitation! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}

export default DashboardHeader
