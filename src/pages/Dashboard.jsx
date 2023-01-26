import Navigation from "../components/navigations/Navigation"
import VerticalNavigation from "../components/navigations/VerticalNavigation"
// import VerticalNavigation from "./navigations/VerticalNavigation"
import "./Dashboard.css"

function Dashboard() {
    return (
      <div>
        <Navigation />
        <main className="DashboardContainer">
            <VerticalNavigation />
            <section className="dashboardContent">TOTO</section>
        </main>
      </div>
    );
  }
  
  export default Dashboard;