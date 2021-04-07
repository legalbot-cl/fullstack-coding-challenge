import LoginForm from "../../components/loginForm"


function Login() {

    return(
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-4">
                    <h2>Login</h2>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default Login