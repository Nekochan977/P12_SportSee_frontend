import { getUserMainData } from "../utils/api"
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import "./Score.css"

function Score(){
    const userMainData = getUserMainData()
    const userScore = userMainData.score
    const userScoreValue = (userScore * 100) + "%"

    const score = [
        {value: userScore},
    ]

    return(
        <div className="score-container">
            <h3 className="score-title">Score</h3>
            <ResponsiveContainer
                width="100%"
                height="100%"
            >
                <PieChart
                    width={400}
                    height={400}
                >

                    <Pie
                        data={score}
                        dataKey="value"
                        outerRadius={90}
                        fill="#FFF"
                        cx={150}
                        cy={110}
                    />
                    <Pie
                        data={score}
                        dataKey="value"
                        innerRadius={90}
                        outerRadius={100}
                        startAngle={90}
                        endAngle={180}
                        fill="#ff0000"
                        cx={150}
                        cy={110}
                    />
                </PieChart>
            </ResponsiveContainer>
            <p className="score-text">
                <span className="score-value">{userScoreValue}</span> <br/>
                de votre objectif
            </p>
        </div>
    )


}
export default Score