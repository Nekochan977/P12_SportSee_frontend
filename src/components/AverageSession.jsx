import {getUserAverageSessions} from "../utils/api"
import {LineChart, Line, XAxis, Tooltip} from "recharts"
import "./AverageSession.css"
import {useEffect, useState} from "react";

/**
 * User's Average Session LineChart
 * @component
 * @param {object} userAverageSession data of user's sessions
 * @param {string} day day of week
 * @returns {react component} line chart by activity length
 */
function UserAverageSession() {

    const [userAverageSession, setUserAverageSession] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const result = await getUserAverageSessions()
            const response = await result.json()
            setUserAverageSession(response.data)
        }
        getData()
    }, [])

    if (userAverageSession === null) {
        return null
    }

    let day = userAverageSession.sessions.map((el) => {

        switch (el.day) {
            case 1 :
                el.day = "L"
                break
            case 2:
                el.day = "M"
                break
            case 3:
                el.day = "M"
                break
            case 4:
                el.day = "J"
                break
            case 5:
                el.day = "V"
                break
            case 6:
                el.day = "S"
                break
            case 7:
                el.day = "D"
                break
            default:
                break
        }
        return el.day

    })
    return (
        <>
            <div className="line-chart-container">
                <h2 className="line-chart-title">Durée moyenne des sessions</h2>
                <LineChart
                    width={215}
                    height={200}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "10px",
                        marginTop: "10px"
                    }}
                    data={userAverageSession.sessions}>
                    <XAxis
                        dataKey="day"
                        height={10}
                        tickLine={true}
                        padding={{left: 5, right: 5}}
                        axisLine={false}
                        interval={0}
                        stroke="red"
                        dy={5}
                        dx={2}
                        tick={{
                            fontSize: 13,
                            stroke: "#FFFF",
                            opacity: 0.5,
                            margin: 5
                    }}
                    />
                    <Tooltip
                        content={<CustomToolTip/>}
                        cursor={<CustomHover/>}
                    />
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="#FFF"
                        strokeWidth={2}
                        activeDot={{
                            background: "#FFF",
                            stroke: "rgba(255, 255, 255, 0.3)",
                            strokeWidth: 10,
                            r: 5,
                        }}
                        dot={false}
                    />
                </LineChart>
            </div>
        </>
    )
}

function CustomToolTip({active, payload}) {
    if (active) {
        return (
            <div className="custom-tooltip">
                <p>{`${payload[0].value}`} min</p>
            </div>
        );
    }
    return null;
}

const CustomHover = ({points}) => {
    return (
        <rect
            x={points[0].x}
            y={0}
            rx="5"
            ry="5"
            height="100%"
            width="100%"
            fill="rgba(0, 0, 0, 0.1)"
        />
    );
};

export default UserAverageSession
