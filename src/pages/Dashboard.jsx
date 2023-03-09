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
import {useEffect, useState} from "react";

import UserMainData from "../components/UserMainData";
// const userMainData = getUserMainData()

function Dashboard() {
    const userData = UserMainData()
    if (userData === null) {
        return null
    }

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
