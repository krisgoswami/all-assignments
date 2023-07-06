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
            });
            const { token } = response.data;

            localStorage.getItem('token', token);
        } catch (error) {
            console.error(error);
        }

    }

    return <div>
        <form onSubmit={handleCreateCourse}>

            <h1>Create Course Page</h1>

            <label>Title: </label>
            <input
                value={title}
                type={"text"}
                onChange={e => setTitle(e.target.value)}
            />

            <label>Description: </label>
            <input
                value={description}
                type={"text"}
                onChange={e => setDescription(e.target.value)}
            />

            <label>Price: </label>
            <input
                value={price}
                type={"text"}
                onChange={e => setPrice(e.target.value)}
            />

            <label>Image Link: </label>
            <input
                value={imageLink}
                type={"text"}
                onChange={e => setImageLink(e.target.value)}
            />
            <label for="published">Published: </label>
            <select
                name="published"
                value={published}
                onChange={e => setPublished(e.target.value)}
            >
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
            <button onClick={() => console.log(title)}>Create Course</button>
        </form>
    </div>
}
export default CreateCourse;