import Input from './input'
import {Fragment, useState} from 'react'
import {useAuth} from '../contexts/auth'


function LoginForm (props) {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const [message, setMessage] = useState('')
    const auth = useAuth()


    const handleInputChange = e => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }


    const onSubmit = e => {
        e.preventDefault()
        setMessage('')
        auth.signin(user, () => setMessage('Invalid username or password'))
    } 


    return (
        <Fragment>
            {message?
                <div className={`alert alert-danger`} role="alert">
                  {message.msg}
                </div>
                :''
            }
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <Input
                        label="email"
                        name="email"
                        onChange={handleInputChange}
                        placeholder="email"
                        type="email"
                        valid={true}
                    />
                    <Input
                        label="password"
                        name="password"
                        onChange={handleInputChange}
                        placeholder="password"
                        type="password"
                        valid={true}
                    />
                    <input 
                        className="btn btn-secondary"
                        type="submit" 
                        value="submit"
                    />
                </div>
            </form>
        </Fragment>    
    )
}

export default LoginForm