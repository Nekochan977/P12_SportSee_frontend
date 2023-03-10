import {PieChart, Pie, ResponsiveContainer} from 'recharts'
import "./Score.css"
import PropTypes from "prop-types";


function Score({score, userScoreValue}) {

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
            <p className="score-text">
                <span className="score-value">{userScoreValue}</span> <br/>
                de votre objectif
            </p>
        </div>
    )
}
Score.propTypes = {
    score: PropTypes.arrayOf(PropTypes.object),
    userScoreValue: PropTypes.string,
}

export default Score