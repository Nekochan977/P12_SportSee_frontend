import { getUserPerformance } from "../utils/api"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import "./UserPerformance.css"

function UserPerformance(){
    const userPerformance = getUserPerformance()
    // console.log(userPerformance.data)
    const data = userPerformance.data
    const kind = userPerformance.kind
    // console.log(userPerformance.data.map((el)=>{
    //     console.log(el)
    // // }))
    // console.log(kind)
    // console.log(data)


    return(
        <>
            <div className="radar-chart-container">
                <ResponsiveContainer>
                    <RadarChart
                        cx={200}
                        cy={150}
                        outerRadius={150}
                        width={100}
                        height={100}
                        data={data}
                        classname ="radar-chart"
                    >
                        <PolarGrid radialLines={false} />
                        <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: 15 }} />
                        <PolarRadiusAxis />
                        <Radar
                            dataKey="value"
                            stroke="#8884d8"
                            fill="#8884d8"
                            fillOpacity={0.6}
                        />
                    </RadarChart>
                </ResponsiveContainer>

            </div>
        </>
    )
}
export default UserPerformance