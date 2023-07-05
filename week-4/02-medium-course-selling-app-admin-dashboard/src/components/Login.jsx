import React from "react";
// import { useHistory } from 'react-router-dom';
import axios from 'axios';

/// File is incomplete. You need to add input boxes to take input for users to login.
function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    // const history = useHistory();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/admin/login");
            const { token } = response.data;

            localStorage.setItem('token', token);

            // history.push('/');
        } catch (err) {
            console.error(err);
        }
    }

    return <div>
        <h1>Login to admin dashboard</h1>
        <form onSubmit={handleLogin}>
            <br />
            <label>Email: </label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} /> <br />
            <label>Password: </label>
            <input type={"password"} value={password} onChange={e => setPassword(e.target.value)} />
            <br />
            <button type="submit">Login</button>
            <br />
            New here? <a href="/register">Register</a>
        </form>
    </div>
}

export default Login;