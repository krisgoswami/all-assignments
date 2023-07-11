import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


export default function AppBar() {

    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        function callback2(data) {
            console.log(data);
            if (data.username) {
                setUserEmail(data.username);
            }
        }
        function callback1(res) {
            res.json().then(callback2);
        }
        fetch("http://localhost:3000/admin/me", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(callback1);

    }, [])

    if (userEmail) {
        return <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 5
            }}>
            <div>
                <Typography variant="h5">SellCourse</Typography>
            </div>

            <div>
                {userEmail}
            </div>

            <div style={{ display: "flex" }}>
                <div style={{ marginRight: 10 }}>
                    <Button
                        variant="contained"
                        onClick={() => {
                            localStorage.setItem("token", null);
                            window.location = "/";
                        }}
                    > Logout
                    </Button>
                </div>
            </div>
        </div>
    }

    return (
        <div style={{ display: "flex", justifyContent: "space-between", padding: 5 }}>
            <div>
                <Typography variant="h5">SellCourse</Typography>
            </div>

            <div style={{ display: "flex" }}>
                <div style={{ marginRight: 10 }}>
                    <Button variant="contained" onClick={() => { navigate("/register") }}>Sign Up</Button>
                </div>
                <div style={{ marginRight: 0 }}>
                    <Button variant="contained" onClick={() => { navigate("/login") }}>Login</Button>
                </div>
            </div>
        </div>
    )
}