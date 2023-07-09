import React from "react";
import axios from 'axios';

/// File is incomplete. You need to add input boxes to take input for users to login.
function Login() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/admin/login", {
                username,
                password
            },{
                headers: {
                    username: username,
                    password: password      
                }
            });
            const { token } = response.data;

            localStorage.setItem('token', token);
            console.log(username,password);
            console.log(token);

        } catch (err) {
            console.error(err);
            console.log(username,password);
        }
    }

    return <div>
        <h1>Login to admin dashboard</h1>
        <form onSubmit={handleLogin}>
            <br />
            <label>Email: </label>
            <input type="username" value={username} onChange={e => setUsername(e.target.value)} /> <br />
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