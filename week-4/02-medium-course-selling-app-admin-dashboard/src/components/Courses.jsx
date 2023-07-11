import { Card } from "@mui/material";
import { useEffect, useState } from "react";
import React from "react";

export default function Courses() {

    const [courses, setCourses] = useState([]);

    useEffect(() => {

        function callback2(data) {
            console.log(data);
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
            <Card>
                courses
            </Card>
        </div>
    )
}