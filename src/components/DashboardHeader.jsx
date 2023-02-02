import {getUserMainData} from "../utils/api"
function DashboardHeader() {
  const userData = getUserMainData();
    return (
      <div>
        <h1>Bonjour {userData.userInfos.firstName}</h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      
    );
  }
  
  export default DashboardHeader;