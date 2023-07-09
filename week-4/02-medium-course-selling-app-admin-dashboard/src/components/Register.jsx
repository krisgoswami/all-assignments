import { Card, TextField, Typography } from '@mui/material';
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
			<div style={{
				paddingTop: 150,
				marginBottom: 10,
				display: 'flex',
				justifyContent: 'center'
			}}>
				<Typography variant='h6'>Register to the website</Typography>
			</div>
			<div style={{
				display: "flex",
				justifyContent: "center"
			}}>
				<form onSubmit={handleSignUp}>
					<Card
						variant='outlined'
						style={{
							width: 400,
							padding: 20
						}}>
						<TextField
							fullWidth={true}
							variant="outlined"
							label="username"
							onChange={e => setUsername(e.target.value)}
						/>
						<br />
						<br />
						<TextField
							fullWidth={true}
							variant="outlined"
							label="password"
							type='password'
							onChange={e => setPassword(e.target.value)}
						></TextField>
						<br />
						<br />
						<Button variant="contained" size='large' type='submit'>Sign Up</Button>
						<br />
						<br />
						Already a user? <a href="/login">Login</a>
					</Card>
				</form>
			</div>
		</div>
	)
}

export default Register;