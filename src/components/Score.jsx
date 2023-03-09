import {PieChart, Pie, ResponsiveContainer} from 'recharts'
import "./Score.css"
import UserMainData from "./UserMainData"

function Score() {
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
        <div className="score-container">
            <h3 className="score-title">Score</h3>
            <ResponsiveContainer
                width="100%"
                height="100%"
            >
                <PieChart
                    width={150}
                    height={300}
                >
                    <Pie
                        data={score}
                        dataKey="value"
                        outerRadius={70}
                        fill="#FFF"
                        cx={115}
                        cy={80}
                    />
                    <Pie
                        data={score}
                        dataKey="value"
                        innerRadius={60}
                        outerRadius={70}
                        startAngle={80}
                        endAngle={180}
                        fill="#ff0000"
                        cx={115}
                        cy={80}
                    />
                </PieChart>
            </ResponsiveContainer>
            {userScoreValue && <p className="score-text">
                <span className="score-value">{userScoreValue}</span> <br/>
                de votre objectif
            </p>}
        </div>
    )
}

export default Score