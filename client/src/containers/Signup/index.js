import SignupForm from '../../components/signupForm'


function SignUpContainer() {

    return(
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-4">
                    <h2>SignUp</h2>
                    <SignupForm />            
                </div>
            </div>
        </div>
    )
}

export default SignUpContainer