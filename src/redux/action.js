import axios from 'axios'

export const getBusinesses = () => {
    return function (dispatch) {
        axios.get('/business').then((res) => {
            const action = {
                type: 'FETCH_MAKES',
                value: res.data,
            }
            dispatch(action)
        })
    }
}
