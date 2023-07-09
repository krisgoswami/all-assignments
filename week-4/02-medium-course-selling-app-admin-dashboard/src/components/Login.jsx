import { Card, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
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
            }, {
                headers: {
                    username: username,
                    password: password
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
            <div style={{
                paddingTop: 150,
                marginBottom: 10,
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Typography variant='h6'>Login to admin dashboard</Typography>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <form onSubmit={handleLogin}>
                    <Card
                        variant='outlined'
                        style={{
                            width: 400,
                            padding: 20
                        }}>
                        <TextField
                            fullWidth={true}
                            variant="outlined"
                            label="email"
                            onChange={e => setUsername(e.target.value)}
                        />
                        <br />
                        <br />
                        <TextField
                            fullWidth={true}
                            variant="outlined"
                            label="password"
                            type='password'
                            onChange={e => setUsername(e.target.value)}
                        ></TextField>
                        <br />
                        <br />
                        <Button variant="contained" size='large'>Sign Up</Button>
                        <br />
                        <br />
                        Don't have an account? <a href="/register">Sign Up</a>
                    </Card>
                </form>
            </div>
        </div>
    )
}

export default Login;