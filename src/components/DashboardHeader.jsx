import { getUserMainData } from "../utils/api"
function DashboardHeader() {
  const userData = getUserMainData()
  return (
    <div className="dashboard-header-container">
      <h1>Bonjour&nbsp;
          <span className="redText">{userData.userInfos.firstName}</span>
      </h1>
      <p>Félicitation! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}

export default DashboardHeader
