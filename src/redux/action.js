import axios from 'axios'

export const getBusinesses = () => {
    return function (dispatch) {
        axios.get('http://localhost:9000/business').then((res) => {
            const action = {
                type: 'FETCH_MAKES',
                value: res.data,
            }
            dispatch(action)
        })
    }
}
