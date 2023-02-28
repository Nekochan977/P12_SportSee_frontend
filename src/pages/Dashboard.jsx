import Navigation from "../components/navigations/Navigation"
import VerticalNavigation from "../components/navigations/VerticalNavigation"
import DashboardHeader from "../components/DashboardHeader"
import UserActivity from "../components/UserActivity"
import UserAverageSession from "../components/AverageSession"
import "./Dashboard.css"
import UserPerformance from "../components/UserPerformance"
import Score from "../components/Score";
import Card from "../components/Card";
import { getUserMainData } from "../utils/api"
import Calories from "../assets/calories-icon.svg"
import Carbs from "../assets/carbs-icon.svg"
import Protein from "../assets/protein-icon.svg"
import Fat from "../assets/fat-icon.svg"
const userMainData = getUserMainData()

function Dashboard() {
    return (
        <div>
            <Navigation/>
            <main className="main-container">
                <VerticalNavigation/>
                <div className="dashboard-container">
                    <DashboardHeader/>
                    <div className="dashboard-content">
                        <section className="charts-container">
                            <UserActivity/>
                            <div className="small-charts">
                                <UserAverageSession/>
                                <UserPerformance/>
                                <Score/>
                            </div>

                        </section>
                        <aside className="aside-container">
                            <Card
                                icon={Calories}
                                quantity={userMainData.keyData.calorieCount} unit="Kcal"
                                nutrimentType="Calories"
                            />
                            <Card
                                icon={Protein}
                                quantity={userMainData.keyData.proteinCount} unit="g"
                                nutrimentType="Protein"
                            />
                            <Card
                                icon={Carbs}
                                quantity={userMainData.keyData.carbohydrateCount} unit="g"
                                nutrimentType="Glucides"
                            />
                            <Card
                                icon={Fat}
                                quantity={userMainData.keyData.lipidCount} unit="g"
                                nutrimentType="Lipides"
                            />
                        </aside>
                    </div>

                </div>

            </main>
        </div>
    )
}

export default Dashboard
