import {
  // USER_MAIN_DATA,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
  USER_ACTIVITY,
} from "../__mocks__/mock_data"

export const getUserMainData = async () => {
  // next time => fetch to API instead of mock data
  // return USER_MAIN_DATA[0]
  return fetch('http://localhost:3000/user/12')
}

export const getUserAverageSessions = () => {
  // next time => fetch to API instead of mock data
  return USER_AVERAGE_SESSIONS[0]
}

export const getUserPerformance = () => {
  // next time => fetch to API instead of mock data
  // return USER_PERFORMANCE[0]
  return fetch('http://localhost:3000/user/12/performance')
}

export const getUserActivity = () => {
  // next time => fetch to API instead of mock data
  // return USER_ACTIVITY[0]
  return fetch('http://localhost:3000/user/12/activity')
}
