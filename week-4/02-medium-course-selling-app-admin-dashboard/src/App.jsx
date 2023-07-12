import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Landing from "./components/Landing";
// import CreateCourse from './components/CreateCourse';
import Register from './components/Register';
// import ShowCourses from './components/ShowCourses';
import AppBar from './components/AppBar';
import Courses from './components/Courses';
import AddCourse from './components/AddCourse';
import Course from './components/Course';

// This file shows how you can do routing in React.
// Try going to /login, /register, /about, /courses on the website and see how the html changes
// based on the route.
// You can also try going to /random and see what happens (a route that doesnt exist)
function App() {
    return (
        <Router>
            <AppBar />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/addcourse" element={<AddCourse />} />
                <Route path="/course/:courseId" element={<Course />} />
                <Route path="/courses" element={<Courses />} />
            </Routes>
        </Router>
    );
}

export default App;