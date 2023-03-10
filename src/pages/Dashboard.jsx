import Navigation from "../components/navigations/Navigation"
import VerticalNavigation from "../components/navigations/VerticalNavigation"
import DashboardHeader from "../components/DashboardHeader"
import UserActivity from "../components/UserActivity"
import UserAverageSession from "../components/AverageSession"
import "./Dashboard.css"
import UserPerformance from "../components/UserPerformance"
import Score from "../components/Score"
import Card from "../components/Card"
import Calories from "../assets/calories-icon.svg"
import Carbs from "../assets/carbs-icon.svg"
import Protein from "../assets/protein-icon.svg"
import Fat from "../assets/fat-icon.svg"
import UserMainData from "../components/UserMainData"

/**
 * If using mock data:
 * import {getUserMockMainData} from "../utils/api"
 * const mockData = getUserMockMainData()
 * console.log(mockData)
*/


function Dashboard() {
    const userData = UserMainData()
    if (userData === null) {
        return null
    }
    const userScore = userData.todayScore || userData.score
    const userScoreValue = (userScore * 100) + "%"

    const score = [
        {value: userScore},
    ]

    return (
        <div>
            <Navigation/>
            <main className="main-container">
                <VerticalNavigation/>
                <div className="dashboard-container">
                    {userData &&
                        <DashboardHeader
                            firstName={userData.userInfos.firstName}/>
                    }
                    <div className="dashboard-content">
                        <section className="charts-container">
                            <UserActivity/>
                            <div className="small-charts">
                                <UserAverageSession/>
                                <UserPerformance/>
                                <Score
                                    score={score}
                                    userScoreValue={userScoreValue}
                                />
                            </div>

                        </section>
                        {userData && <aside className="aside-container">
                            <Card
                                icon={Calories}
                                quantity={userData.keyData.calorieCount} unit="Kcal"
                                nutrimentType="Calories"
                            />
                            <Card
                                icon={Protein}
                                quantity={userData.keyData.proteinCount} unit="g"
                                nutrimentType="Protein"
                            />
                            <Card
                                icon={Carbs}
                                quantity={userData.keyData.carbohydrateCount} unit="g"
                                nutrimentType="Glucides"
                            />
                            <Card
                                icon={Fat}
                                quantity={userData.keyData.lipidCount} unit="g"
                                nutrimentType="Lipides"
                            />
                        </aside>}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Dashboard
