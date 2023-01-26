import Navigation from "../components/navigations/Navigation"
import VerticalNavigation from "../components/navigations/VerticalNavigation"
// import VerticalNavigation from "./navigations/VerticalNavigation"
import DashboardHeader from "../components/DashboardHeader"
import "./Dashboard.css"

function Dashboard() {
    return (
      <div>
        <Navigation />
        <main className="DashboardContainer">
            <VerticalNavigation />
            <section className="dashboardContent">
                <DashboardHeader />
            </section>
        </main>
      </div>
    );
  }
  
  export default Dashboard;