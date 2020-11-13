import axios from 'axios'

export const getBusinesses = () => {
    return function (dispatch) {
        axios
            .get('/users')
            .then((res) => {
                const action = {
                    type: 'GET_BUSINESSES',
                    value: res.data,
                }
                dispatch(action)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

// export const getTicketInfo = () => {
//     return function (dispatch) {
//         axios.get(`http://localhost:9000/user/info/${id}`).then((res) => {
//             const action = {
//                 type: 'GET_BUSINESSES_INFO',
//                 value: res.data,
//             }
//             dispatch(action)
//         })
//     }
// }

export const createTicket = (postBody) => {
    return function (dispatch) {
        axios
            .post('/users', { postBody })
            .then((res) => {
                const action = {
                    type: 'POST_TICKET',
                    value: res.data,
                }
                dispatch(action)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const getQuotes = () => {
    return function (dispatch) {
        axios
            .get('https://type.fit/api/quotes')
            .then((res) => {
                const action = {
                    type: 'GET_QUOTES',
                    value: res.data,
                }
                dispatch(action)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
