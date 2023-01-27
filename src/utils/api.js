import { USER_MAIN_DATA, USER_AVERAGE_SESSIONS, USER_PERFORMANCE, USER_ACTIVITY } from "../__mocks__/mock_data";

export const getUserData = () => {
    // next time => fetch to API instead of mock data
    return USER_MAIN_DATA[0];
}