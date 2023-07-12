import { Button, Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import React from "react";

export default function Courses() {

    const [courses, setCourses] = useState([]);

    useEffect(() => {

        function callback2(data) {
            setCourses(data.courses);
        }
        function callback1(res) {
            res.json().then(callback2);
        }
        fetch("http://localhost:3000/admin/courses", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('token')
            }
        }).then(callback1);
    }, [])
    return (
        <div>
            <a href="/addcourse">Add Course</a>
            <div style={{ display: "flex", flexWrap: 'wrap' }}>
                {courses.map(course => {
                    return <Course courseprop={course} />
                })}
            </div>
        </div>
    )
}

export function Course(props) {
    return <Card variant='outlined'
        style={{
            margin: 10,
            width: 300,
            padding: 20,
            minHeight: 200
        }}>
        {/* <Typography variant="h6" style={{width: 300, margin: 10}}>{props.courseprop.imageLink}</Typography> */}
        <img src={props.courseprop.imageLink} style={{ width: 300 }}></img>
        <Typography variant="h4">{props.courseprop.title}</Typography>
        <Typography variant="h6">{props.courseprop.description}</Typography>
        <Typography variant="h6">{props.courseprop.price}</Typography><br />
        <Button variant="contained" onClick={() => {
            window.location = `/courses/${props.courseprop.id}`
        }}>Update</Button>
    </Card>
}