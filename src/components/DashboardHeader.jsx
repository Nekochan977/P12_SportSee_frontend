import {getUserData} from "../utils/api"
function DashboardHeader() {
  const userData = getUserData();
    return (
      <div>
        Bonjour {userData.userInfos.firstName}
      </div>
      
    );
  }
  
  export default DashboardHeader;