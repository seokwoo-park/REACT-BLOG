import { Link } from 'react-router-dom'
import './signup.css'

export default function Signup() {
    return (
        <div className="signup">
            <span className="signupTitle">Sign-up</span>
            <form className="signupForm">
                <label>User name</label>
                <input className="signupInput" type="text" placeholder="Enter user name..." />
                <label>Email</label>
                <input className="signupInput" type="text" placeholder="Enter email" />
                <label>Password</label>
                <input className="signupInput" type="password" placeholder="Enter password" />
                <button className="signupButton">Sign up</button>

            <button className="signupLoginButton">
                <Link className="link" to="/login">LOGIN</Link>
            </button>
            </form>
        </div>
    )
}
