
import { Button, Typography } from "@mui/material";
import React from "react";

/// This is the landing page. You need to add a link to the login page here.
/// Maybe also check from the backend if the user is already logged in and then show them a logout button
/// Logging a user out is as simple as deleting the token from the local storage.
function Landing() {
    return <div style={{ margin: 10 }}>
        <Typography variant="h4">Welcome to course selling website!</Typography>
        <Button
            variant="text"
            onClick={() => {
                window.location = "/register"
            }}>Register</Button>
        <br />
        <Button
            variant="text"
            onClick={() => {
                window.location = "/login"
            }}>Login</Button>
        <br />
        <Button
            variant="text"
            onClick={() => {
                window.location = "/addcourse"
            }}>Add Course</Button>
        <br />
        <Button
            variant="text"
            onClick={() => {
                window.location = "/courses"
            }}>Courses</Button>
        <br />
    </div>
}

export default Landing;