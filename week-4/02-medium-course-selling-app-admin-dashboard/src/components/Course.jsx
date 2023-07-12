import { Card, Typography, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function Course() {

    const { courseId } = useParams();
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

    let course = null;
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].id == courseId) {
            course = courses[i];
        }
    }

    if (!course) {
        return <div>
            Loading...
        </div>
    }

    return (
        <div>
            <CourseCard course={course} />
            <UpdateCard course={course} />
        </div>
    )
}

function CourseCard(props) {
    const course = props.course;
    return <div>
        <Card variant='outlined'
            style={{
                margin: 10,
                width: 300,
                padding: 20,
                minHeight: 300
            }}>
            <img src={course.imageLink} style={{ width: 300 }}></img>
            <Typography variant="h4">{course.title}</Typography>
            <Typography variant="h6">{course.description}</Typography>
            <Typography variant="h6">{course.price}</Typography>
        </Card>
    </div>
}

function UpdateCard(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageLink, setImageLink] = useState("");
    const course = props.course;

    return <div>
        <div >
            <Card
                variant='outlined'
                style={{
                    margin: 10,
                    width: 300, 
                    padding: 20,
                    minHeight: 300
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
                            window.location = "/courses";
                        }
                        function callback1(res) {
                            res.json().then(callback2);
                        }
                        fetch("http://localhost:3000/admin/courses/" + course.id, {
                            method: "PUT",
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
                    }}>Update</Button>
                <br />
            </Card>

        </div>
    </div>
}