import {
   USER_MAIN_DATA,
  // USER_AVERAGE_SESSIONS,
  // USER_PERFORMANCE,
  // USER_ACTIVITY,
} from "../__mocks__/mock_data"

export const getUserMainData = async () => {
  return fetch('http://localhost:3000/user/12')
}

export const getUserAverageSessions =  () => {
  return fetch('http://localhost:3000/user/12/average-sessions')
}

export const getUserPerformance =  () => {
  return fetch('http://localhost:3000/user/12/performance')
}

export const getUserActivity = () => {
  return fetch('http://localhost:3000/user/12/activity')
}

//Retrieve mock data
export const getUserMockMainData = () => {
  return USER_MAIN_DATA[0]
}
