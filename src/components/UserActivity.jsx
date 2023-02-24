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

    const CustomToolTip = ({active, payload}) =>{
        if (active){
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
          <h2 className='barchartTitle'>Activité quotidienne</h2>
          <ResponsiveContainer width="100%" height="100%">
              <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                      top: 5,
                      right: 30,
                      left: 30,
                      bottom: 5,
                  }}
                  // barGap={8}
              >
                  <CartesianGrid
                      strokeDasharray="1 1"
                      vertical={false} />
                  <XAxis
                      dataKey="day"
                      tickLine={false}
                      tick={{fontSize: 14}}
                      dy={15}
                      stroke="1 1"
                  />
                  <YAxis
                      orientation="right"
                      tickCount="4"
                      axisLine={false}
                      tickLine={false}
                      tick={{fontSize: 14}}
                  />
                  <Tooltip
                      content={CustomToolTip}
                  />
                  <Legend
                      verticalAlign="top"
                      align="center"
                      iconType="circle"
                      margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 30 }}
                      height={36}/>
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
