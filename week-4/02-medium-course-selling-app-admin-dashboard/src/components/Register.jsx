import React from "react";

/// File is incomplete. You need to add input boxes to take input for users to register.
function Register() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    return <div>
        <h1>Register to the website</h1>
        <br />
        Email - <input type={"email"} onChange={e => setEmail(e.target.value)} /> <br />
        Password - <input type={"password"} onChange={e => setPassword(e.target.value)} />
        <br />
        <button>Sign up</button>
        Already a user? <a href="/login">Login</a>
    </div>
}

export default Register;