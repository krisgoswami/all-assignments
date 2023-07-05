import axios from "axios";
import React from "react";

/// File is incomplete. You need to add input boxes to take input for users to register.
function Register() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/admin/signup", {
                email,
                password,
            });
            const { token } = response.data;

            localStorage.getItem('token', token);
        } catch (err) {
            console.error(err);
        }
    }

    return <div>
        <h1>Register to the website</h1>
        <form onSubmit={handleSignUp}>
            <label>Email: </label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} /> <br />
            <label>Password: </label>
            <input type={"password"} value={password} onChange={e => setPassword(e.target.value)} />
            <br />
            <button type="submit">Sign Up</button>
            <br />
            Already a user? <a href="/login">Login</a>
        </form>
    </div>
}

export default Register;