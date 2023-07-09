import { Button, Typography } from "@mui/material";

export default function AppBar() {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", padding: 5 }}>
            <div>
                <Typography variant="h5">SellCourse</Typography>
            </div>

            <div style={{ display: "flex" }}>
                <div style={{ marginRight: 10 }}>
                    <Button variant="contained">Sign Up</Button>
                </div>
                <div style={{ marginRight: 0 }}>
                    <Button variant="contained">Sign In</Button>
                </div>
            </div>
        </div>
    )
}