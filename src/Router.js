import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Landing from './components/Landing'
import Login from './components/Login'

const Router = () => {
    const checkAuth = () => {
        const cookies = cookie.parse(document.cookie)
        return cookies['loggedIn'] ? true : false
    }

    const ProtectedRoute = ({ component: Component, ...rest }) => {
        return (
            <Route
                {...rest}
                render={(props) =>
                    checkAuth() ? <Component {...props} /> : <Redirect to="/" />
                }
            />
        )
    }

    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/business/login" component={Login} />
            <Route path="/customer/login" component={Login} />
        </Switch>
    )
}

export default Router
