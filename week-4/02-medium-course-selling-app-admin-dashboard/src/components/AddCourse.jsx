import { Typography, Card, Button, TextField } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";


export default function AddCourse() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageLink, setImageLink] = useState("");
    // const [published, setPublished] = useState();

    return (
        <div>
            <div style={{
                paddingTop: 150,
                marginBottom: 10,
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Typography variant='h6'>Add a new course</Typography>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <form>
                    <Card
                        variant='outlined'
                        style={{
                            width: 400,
                            padding: 20
                        }}>
                        <TextField
                            fullWidth={true}
                            variant="outlined"
                            label="title"
                            onChange={e => setTitle(e.target.value)}
                        />
                        <br />
                        <br />
                        <TextField
                            fullWidth={true}
                            variant="outlined"
                            label="description"
                            onChange={e => setDescription(e.target.value)}
                        />
                        <br />
                        <br />
                        <TextField
                            fullWidth={true}
                            variant="outlined"
                            label="price"
                            onChange={e => setPrice(e.target.value)}
                        />
                        <br />
                        <br />
                        <TextField
                            fullWidth={true}
                            variant="outlined"
                            label="image link"
                            onChange={e => setImageLink(e.target.value)}
                        />
                        <br />
                        <br />
                        <Button
                            variant="contained"
                            size='large'
                            onClick={() => {
                                function callback2(data) {
                                    // console.log(data);
                                    alert("Course added!");
                                }
                                function callback1(res) {
                                    res.json().then(callback2);
                                }
                                fetch("http://localhost:3000/admin/courses", {
                                    method: "POST",
                                    body: JSON.stringify({
                                        title: title,
                                        description: description,
                                        imageLink: imageLink,
                                        price: price,
                                        published: true
                                    }),
                                    headers: {
                                        "Content-type": "application/json",
                                        "Authorization": "Bearer " + localStorage.getItem("token")
                                    }
                                }).then(callback1);
                            }}>Add</Button>
                        <br />
                    </Card>
                </form>
            </div>
        </div>
    )
}