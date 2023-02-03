import Navigation from "../components/navigations/Navigation"
import VerticalNavigation from "../components/navigations/VerticalNavigation"
import DashboardHeader from "../components/DashboardHeader"
import UserActivity from "../components/UserActivity"
import "./Dashboard.css"

function Dashboard() {
  return (
    <div>
      <Navigation />
      <main className="DashboardContainer">
        <VerticalNavigation />
        <section className="dashboardContent">
          <DashboardHeader />
          <UserActivity />
        </section>
      </main>
    </div>
  )
}

export default Dashboard
