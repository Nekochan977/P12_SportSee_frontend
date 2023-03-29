import {PieChart, Pie, ResponsiveContainer} from 'recharts'
import "./Score.css"
import PropTypes from "prop-types";

/**
 * User's score on the objectives of actual date
 * @component
 * @param {number} score of the user on daily objective
 * @param {string} userScoreValue value of score as percentage
 * @returns {react component} pie chart with user's score
 */

function Score({score, userScoreValue}) {

    return (
        <div className="score-container">
            <h3 className="score-title">Score</h3>
            <ResponsiveContainer>
                <PieChart>
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