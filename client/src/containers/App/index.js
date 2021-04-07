import './App.css';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom"
import { ProvideAuth } from '../../contexts/auth'
import Home from '../Home'
import Login from '../Login'
import Signup from '../Signup'
import {PrivateRoute, Route} from '../../components/route'
import MainNavbar from '../../components/mainNavbar';

function App() {
    return (
        <ProvideAuth>
            <Router>
                <MainNavbar />
                <div className="mainContainer">
                    <Switch>
                        <Route path="/signup">
                            <Signup />
                        </Route>
                        <PrivateRoute path="/home">
                            <Home />
                        </PrivateRoute>
                        <Route path="/login">
                            <Login />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </ProvideAuth>
    );
}

export default App;
