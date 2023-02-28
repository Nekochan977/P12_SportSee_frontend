import { getUserPerformance } from "../utils/api"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import "./UserPerformance.css"

function UserPerformance(){
    const userPerformance = getUserPerformance()
    const data = userPerformance.data
    const formatKindData=(kind)=>{
        switch (kind) {
            case 1:
                return "Cardio"
                break
            case 2:
                return "Energy"
                break
            case 3:
                return "Endurance"
                break
            case 4:
                return "Strength"
                break
            case 5:
                return "Speed"
                break
            case 6:
                return "Intensity"
                break
            default:
                return null

        }
    }


    return(
            <div className="radar-chart-container">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart
                        cx={115}
                        cy={110}
                        outerRadius={70}
                        width={40}
                        height={40}
                        data={data}
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