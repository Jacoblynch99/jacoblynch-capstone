import { connect } from 'react-redux'
import UserLanding from '../components/UserLanding'
import { getBusinesses, createTicket, getQuotes } from '../redux/action'

const mapStateToProps = (state) => {
    return {
        businesses: state.businesses,
        currentUser: state.currentUser,
        quotes: state.quotes,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBusinesses: () => dispatch(getBusinesses()),
        createTicket: (postBody) => dispatch(createTicket(postBody)),
        getQuotes: () => dispatch(getQuotes()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLanding)
