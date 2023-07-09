import Button from '@mui/material/Button';
import axios from "axios";
import React from "react";

/// File is incomplete. You need to add input boxes to take input for users to register.
function Register() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/admin/signup", {
                username,
                password
            }, {
                headers: {
                    "Content-Type": 'application/json'
                }
            });
            const { token } = response.data;

            localStorage.setItem('token', token);
            console.log(username, password);
            console.log(token);

        } catch (err) {
            console.error(err);
            console.log(username, password);
        }
    }

    return (
        <div>
            <h1>Register to the website</h1>
            <form onSubmit={handleSignUp}>
                <label>Email: </label>
                <TextField variant="outlined"></TextField>
                <input type="username" value={username} onChange={e => setUsername(e.target.value)} /> <br />
                <label>Password: </label>
                <input type={"password"} value={password} onChange={e => setPassword(e.target.value)} />
                <br />
                <Button variant="contained">Sign Up</Button>
                <br />
                Already a user? <a href="/login">Login</a>
            </form>
        </div>
    )
}

export default Register;