import Navigation from "../components/navigations/Navigation"
import VerticalNavigation from "../components/navigations/VerticalNavigation"
import DashboardHeader from "../components/DashboardHeader"
import UserActivity from "../components/UserActivity"
import UserAverageSession from "../components/AverageSession"
import "./Dashboard.css"
import UserPerformance from "../components/UserPerformance"
import Score from "../components/Score";


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
                            <UserAverageSession/>
                            <UserPerformance/>
                            <Score/>
                        </section>
                        <aside>
                        </aside>
                    </div>

                </div>

            </main>
        </div>
    )
}

export default Dashboard
