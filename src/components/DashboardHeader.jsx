import "./DashboardHeader.css"

import UserMainData from "./UserMainData";

function DashboardHeader() {

    const userData = UserMainData()


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
