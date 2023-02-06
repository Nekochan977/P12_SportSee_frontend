import { getUserAverageSessions } from "../utils/api"
import { LineChart, Line, XAxis, CartesianGrid } from "recharts"
import "./AverageSession.css"

function UserAverageSession() {
  const averageSession = getUserAverageSessions()
  //console.log(averageSession)
  const data = averageSession.sessions
//   const newDay = {...data, 1: "L", 2:"M", 3:"M", 4:"J", 5:"V", 6:"S", 7:"D"}
//   console.log(newDay);

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
            <CartesianGrid strokeDasharray="3 3" fill="#FF0000"/>
            <XAxis dataKey={day} />
            <LineChart width={300} height={300} data={data}>
                <XAxis dataKey="day" height={60} />
                <Line
                    type="monotone"
                    dataKey="sessionLength"
                    stroke="#FFF"
                    strokeWidth={2}
                />
            </LineChart>
        </div>

    </>
  )
}

export default UserAverageSession
