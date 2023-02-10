import Navigation from "../components/navigations/Navigation"
import VerticalNavigation from "../components/navigations/VerticalNavigation"
import DashboardHeader from "../components/DashboardHeader"
import UserActivity from "../components/UserActivity"
import UserAverageSession from "../components/AverageSession"
import userPerformance from "../components/UserPerformance";
import "./Dashboard.css"
import UserPerformance from "../components/UserPerformance";

function Dashboard() {
  return (
    <div>
      <Navigation />
      <main className="DashboardContainer">
        <VerticalNavigation />
        <section className="dashboardContent">
          <DashboardHeader />
          <UserActivity />
          <UserAverageSession />
            <UserPerformance />
        </section>
      </main>
    </div>
  )
}

export default Dashboard
