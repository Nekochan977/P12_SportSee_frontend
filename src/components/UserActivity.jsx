import { getUserActivity } from "../utils/api"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"

function UserActivity() {
  const userActivity = getUserActivity()
  console.log(userActivity.sessions)
  const data = userActivity.sessions
 
  return (
    <BarChart
      className="barchart"
      width={1000}
      height={500}
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
  )
}
export default UserActivity
