import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
/// You need to add input boxes to take input for users to create a course.
/// I've added one input so you understand the api to do it.
function CreateCourse() {
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [imageLink, setImageLink] = React.useState("");
    const [published, setPublished] = React.useState();

    const handleCreateCourse = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/admin/courses", {
                title,
                description,
                price,
                imageLink,
                published,
            }, {
                headers: {
                    Authorization: "Bearer " + token
                }
            });
            const { token } = response.data;

            localStorage.getItem('token', token);
        } catch (error) {
            console.error(error);
        }

    }

    return <div>
        <form onSubmit={handleCreateCourse}>

            <div style={{ display: 'flex', justifyContent: "center", marginTop: 100, marginBottom: 10 }}>
                <Typography variant="h5">Create Course</Typography>
            </div>

            <div style={{ display: 'flex', justifyContent: "center" }}>
                {/* <Typography variant="h6">Title:</Typography> */}
                <TextField
                    label='title'
                    variant="outlined"
                    style={{ width: 400, marginBottom: 10 }}
                    onChange={e => setTitle(e.target.value)}
                />
            </div>

            <div style={{ display: 'flex', justifyContent: "center" }}>
                {/* <Typography variant="h6">Description:</Typography> */}
                <TextField
                    label='description'
                    variant="outlined"
                    style={{ width: 400, marginBottom: 10 }}
                    onChange={e => setDescription(e.target.value)}
                />
            </div>

            <div style={{ display: 'flex', justifyContent: "center" }}>
                <TextField
                    label='price'
                    variant="outlined"
                    style={{ width: 400, marginBottom: 10 }}
                    onChange={e => setPrice(e.target.value)}
                />
            </div>

            <div style={{ display: 'flex', justifyContent: "center" }}>
                <TextField
                    label='imageLink'
                    variant="outlined"
                    style={{ width: 400, marginBottom: 10 }}
                    onChange={e => setImageLink(e.target.value)}
                />
            </div>

            <div style={{ display: 'flex', justifyContent: "center", marginTop: 10 }}>
                <FormControl>
                    <InputLabel id="coursePublish">Published</InputLabel>
                    <Select
                        labelId="coursePublish"
                        id="demo-simple-select"
                        style={{ width: 200, marginBottom: 10 }}
                        value={published}
                        label="Published"
                        onChange={e => setPublished(e.target.value)}
                    >
                        <MenuItem value={true}>Yes</MenuItem>
                        <MenuItem value={false}>No</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div style={{ display: 'flex', justifyContent: "center" }}>
                <Button variant="contained" size="large" onClick={() => console.log(title)}>Create Course</Button>
            </div>
        </form>
    </div>
}
export default CreateCourse;