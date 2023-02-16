import { getUserActivity } from "../utils/api"
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts"
import "./UserActivity.css"

function UserActivity() {
  const userActivity = getUserActivity()
  const data = userActivity.sessions
 
  return (
      <div className="barchart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis orientation="right" />
            <Tooltip />
            <Legend verticalAlign="top" align="center" iconType="circle" margin={{ top: 5, right: 30, left: 20, bottom: 30 }}/>
            <Bar dataKey="kilogram" fill="#282D30" radius={[20, 20, 0, 0]} maxBarSize={10} barCategoryGap={10}/>
            <Bar dataKey="calories" fill="#E60000" radius={[20, 20, 0, 0]} maxBarSize={10} barCategoryGap={10}/>
          </BarChart>
        </ResponsiveContainer>
      </div>

  )
}
export default UserActivity
