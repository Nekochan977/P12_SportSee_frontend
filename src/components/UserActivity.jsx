import {getUserActivity} from "../utils/api"
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts"
import "./UserActivity.css"
import {useEffect, useState} from "react"

/**
 * User's daily activity Barchart
 * @component
 * @param {object} data of user activity
 * @param {string} day date of activity
 * @returns {react component} Chart bar of daily activities
 */

function UserActivity() {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        /**
         * Retrieve data from call API
         * @returns {object} Json object with user id & sessions data
         */
        const getData = async() => {
            const result = await getUserActivity()
            const response = await result.json()
            setUserData(response.data)
        }
        getData()
    }, [])

    if (userData === null) {
        return null
    }

    const data = userData.sessions
    const CustomToolTip = ({active, payload}) => {
        /**
         * payload: Array of object
         * @param {array} The source data of the content to be displayed in the tooltip, usually calculated internally.
         */
        if (active) {
            return (
                <div className="custom-tooltip">
                    <p>{`${payload[0].value}`} kg</p>
                    <p>{`${payload[1].value}`} Kcal</p>
                </div>
            )
        }
        return null
    }

    return (
        <div className="barchart">
            <div className="barchart-header">
                <div className="barchart-titletitle">
                    <h2>Activité quotidienne</h2>
                </div>
                <div className="barchart-icons">
                    <div className="weight">
                        <div className="black"></div>
                        <p className="header-text"> Poids (kg)</p>
                    </div>
                    <div className="calories">
                        <div className="red"></div>
                        <p className="header-text"> Calories brûlées (Kcal)</p>
                    </div>
                </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 29,
                        left: 43,
                        bottom: 20,
                    }}
                >
                    <CartesianGrid
                        strokeDasharray="1 1"
                        vertical={false}
                    />

                    <XAxis
                        dataKey="day"
                        tickLine={false}
                        tick={{fontSize: 14}}
                        dy={15}
                        stroke="#9B9EAC"
                        padding={{
                            top: 0,
                            right: -10,
                            left: -10,
                            bottom: 0,
                        }}
                        tickFormatter={(day) => new Date(day).getDate().toString()}
                    />
                    <YAxis
                        orientation="right"
                        tickCount="4"
                        axisLine={false}
                        tickLine={false}
                        tick={{fontSize: 14}}
                        stroke="#9B9EAC"
                    />
                    <Tooltip
                        content={CustomToolTip}
                    />
                    <Bar
                        dataKey="kilogram"
                        fill="#282D30"
                        radius={[20, 20, 0, 0]}
                        maxBarSize={10}
                        barCategoryGap={0}
                    />
                    <Bar
                        dataKey="calories"
                        fill="#E60000"
                        radius={[20, 20, 0, 0]}
                        maxBarSize={10}
                        barCategoryGap={0}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default UserActivity
