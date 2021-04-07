import {Redirect, Route as RouteDom} from 'react-router-dom'
import {useAuth} from '../contexts/auth'

function PrivateRoute({ children, ...rest }) {
    let auth = useAuth();
    return (
        <RouteDom
            {...rest}
            render={({ location }) =>
                auth.authToken ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}


function Route({ children, ...rest }) {
    let auth = useAuth();
    return (
        <RouteDom
            {...rest}
            render={({ location }) =>
                auth.authToken ? (
                    <Redirect
                        to={{
                            pathname: "/home",
                            state: { from: location }
                        }}
                    />
                ) : (
                    children
                )
            }
        />
    );
}

export {PrivateRoute, Route}