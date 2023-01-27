const {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
} = require('../__mocks__/mock_data.js').default

function GetApiData(){
    //let x = fetch(USER_MAIN_DATA)
    //let y = JSON.stringify(x[0])
    let y = USER_MAIN_DATA
    let x = JSON.stringify(y)
    console.log(x);
    return x
    
 }

export default GetApiData

// const {
//     USER_MAIN_DATA,
//     USER_ACTIVITY,
//     USER_AVERAGE_SESSIONS,
//     USER_PERFORMANCE,
// } = require('../__mocks__/mock_data.js').default

// function GetApiData() {
//     const userMainData = JSON.stringify(USER_MAIN_DATA)
//     const userActiviy = JSON.stringify(USER_ACTIVITY)
//     const userAverageSession = JSON.stringify(USER_AVERAGE_SESSIONS)
//     const userPerformance = JSON.stringify(USER_PERFORMANCE)
//     console.log(userMainData);
//     return (
//         userMainData,
//         userActiviy,
//         userAverageSession,
//         userPerformance
//     )

// }
// export default GetApiData


