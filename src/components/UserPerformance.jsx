import {getUserPerformance} from "../utils/api"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import "./UserPerformance.css"
import {useEffect, useState} from "react";

/**
 * User's performance RadarChart
 * @component
 * @param {object} userPerformance data of user's performance
 * @param {string} kind type of activity
 * @returns {react component} radar chart by activity type
 */
function UserPerformance(){
    const [userPerformance, setUserPerformance] = useState(null)

    useEffect(() => {
        const getData = async() => {
            const result = await getUserPerformance()
            const response = await result.json()
            setUserPerformance(response.data)
        }
        getData()
    }, [])

    if (userPerformance === null) {
        return null
    }
    const formatKindData=(kind)=>{
        switch (kind) {
            case 1:
                return "Cardio"
            case 2:
                return "Energie"
            case 3:
                return "Endurance"
            case 4:
                return "Force"
            case 5:
                return "Vitesse"
            case 6:
                return "Intensité"
            default:
                return null

        }
    }


    return(
            <div className="radar-chart-container">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart
                        cx={100}
                        cy={100}
                        outerRadius={60}
                        width={35}
                        height={35}
                        data={userPerformance.data}
                        classname ="radar-chart"
                    >
                        <PolarGrid radialLines={false} />
                        <PolarAngleAxis
                            dataKey="kind"
                            tick={{ fill: "white", fontSize: 10, dy: 3, padding: 5}}
                            tickFormatter={formatKindData}
                        />
                        <PolarRadiusAxis
                            tick={false}
                            axisLine={false}
                        />
                        <Radar
                            dataKey="value"
                            stroke="#ff0101"
                            fill="#ff0101"
                            fillOpacity={0.6}
                        />
                    </RadarChart>
                </ResponsiveContainer>

            </div>
    )
}
export default UserPerformance