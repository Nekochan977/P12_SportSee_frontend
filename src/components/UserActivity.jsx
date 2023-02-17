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
                right: 20,
                left: 20,
                bottom: 5,
              }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" tickLine={false} tick={{fontSize: 14}} dy={15} stroke="1 1"/>
            <YAxis orientation="right" tickCount="4" axisLine={false} tickLine={false} tick={{fontSize: 14}} dx={25}/>
            <Tooltip />
            <Legend verticalAlign="top" align="center" iconType="circle" margin={{ top: 5, right: 30, left: 20, bottom: 30 }} height={36}/>
            <Bar dataKey="kilogram" fill="#282D30" radius={[20, 20, 0, 0]} maxBarSize={10} barCategoryGap={0}/>
            <Bar dataKey="calories" fill="#E60000" radius={[20, 20, 0, 0]} maxBarSize={10} barCategoryGap={0}/>
          </BarChart>
        </ResponsiveContainer>
      </div>

  )
}
export default UserActivity
