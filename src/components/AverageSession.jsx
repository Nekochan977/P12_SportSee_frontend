import { getUserAverageSessions } from "../utils/api"
import { LineChart, Line, XAxis, CartesianGrid, Legend } from "recharts"
import "./AverageSession.css"

function UserAverageSession() {
  const averageSession = getUserAverageSessions()
  const data = averageSession.sessions

let day = data.map((el)=>{

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
            {/*<CartesianGrid strokeDasharray="3 3" fill="#FF0000"/>*/}
            <LineChart
                width={200}
                height={220}
                margin={{
                    top: 60,
                    left: 0,
                    right: 0,
                    bottom: 40,
                }}
                data={data}>
                {/*<Legend/>*/}
                <XAxis dataKey="day"
                       height={20}
                       tickLine={true}
                       padding={{ left: 0, right: 5 }}
                       axisLine={false}
                       interval={0}
                       stroke="red"
                       dy={10}
                       style={{ transform: "scale(0.93)", transformOrigin: "bottom" }}
                       // margin={{top:15, right:5, left:5}}
                       tick={{ fontSize: 13, stroke: "#FFFF", opacity: 0.5, margin: 5}} />
                <Line
                    type="monotone"
                    dataKey="sessionLength"
                    stroke="#FFF"
                    strokeWidth={2}
                    activeDot={{ r: 5 }}
                    dot={false}
                />
            </LineChart>
        </div>

    </>
  )
}

export default UserAverageSession
