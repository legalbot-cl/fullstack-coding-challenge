import {Fragment} from 'react'
import Input from './input'
import {useState} from 'react'
import {useAuth} from '../contexts/auth'
import {Link} from 'react-router-dom'


const SignupForm = props => {
    const [user, setUser] = useState({
        name: '',
        lastName: '',
        gender: '',
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

    const onSumbit = e => {
        e.preventDefault()
        setMessage('')
        auth.signup(user, () => setMessage({type: 'success', msg: <Fragment>Success, login at <Link to="/login">link</Link></Fragment>}), () => setMessage({type: 'danger', msg: 'Error, please retry later'}))
    }

    return (
        <Fragment>
            {message?
                <div className={`alert alert-${message.type}`} role="alert">
                  {message.msg}
                </div>
                :''
            }
            <form onSubmit={onSumbit}>
                <Input 
                    label="name"
                    minLength="3"
                    name="name"
                    onChange={handleInputChange}
                    placeholder="name"
                    required={true}
                    valid={true}
                    value={user.name}
                />
                <Input 
                    label="last name"
                    name="lastName"
                    onChange={handleInputChange}
                    placeholder="last name"
                    valid={true}
                    value={user.lastName}
                />
                <div className="form-floating mb-3">
                    <select
                        className="form-select"
                        name="gender"
                        onChange={handleInputChange}
                        required
                        value={user.gender}
                    >
                        <option value="">gender</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                </div>
                <Input 
                    label="email"
                    name="email"
                    onChange={handleInputChange}
                    placeholder="email"
                    required={true}
                    type="email"
                    valid={true}
                    value={user.email}
                />
                <Input 
                    label="password"
                    name="password"
                    onChange={handleInputChange}
                    placeholder="password"
                    required={true}
                    type="password"
                    valid={true}
                    value={user.password}
                />
                <input 
                    className="btn btn-secondary  "
                    type="submit"
                    value="submit"
                />
            </form>
        </Fragment>
    )
}

export default SignupForm