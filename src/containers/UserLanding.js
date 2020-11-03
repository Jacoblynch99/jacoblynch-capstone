import { connect } from 'react-redux'
import UserLanding from '../components/UserLanding'
import { getBusinesses } from '../redux/action'

const mapStateToProps = (state) => {
    return {
        businesses: state.businesses,
        hello: 'hello world',
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBusinesses: () => dispatch(getBusinesses()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLanding)
