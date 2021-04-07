import { Fragment } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/auth'

function MainNavbar() {
    const auth = useAuth()
    let history = useHistory()

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {auth.authToken?
                            <li className="nav-item">
                                <a href="#" onClick={() => auth.signout(() => history.push('/login'))} className="nav-link">
                                    Logout
                                </a>
                            </li>
                            :
                            <Fragment>
                                <li className="nav-item">
                                    <Link to="/signup" className="nav-link">
                                        Register
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link">
                                        Login
                                    </Link>
                                </li>
                            </Fragment>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default MainNavbar