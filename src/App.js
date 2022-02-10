import React, {useState, useEffect} from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
//import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthService from "./services/auth.service";
//import AuthVerify from "./common/AuthVerify";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";


const App = () => {
    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);
    // const dispatch = useDispatch();

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
            setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
            setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
        }
    }, []);

    const logOut = () => {
        AuthService.logout();
        // Redirect page to login
        window.location.href = "/login";
    };

    return (
        <>
            <BrowserRouter>
                <nav>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                    <li>
                        <Link to="/admin">Admin</Link>
                    </li>
                    <li>
                        <Link to="/mod">Moderator</Link>
                    </li>
                    <li>
                        <Link to="/user">User</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        {/*call LogOut function when click on Logout*/}
                        <button onClick={logOut}>Logout</button>
                    </li>
                </nav>

                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/login" element={<Login/>}/>
                    <Route exact path="/signup" element={<Register/>}/>

                    <Route path="/admin" element={<BoardAdmin/>}/>
                    <Route path="/mod" element={<BoardModerator/>}/>
                    <Route path="/user" element={<BoardUser/>}/>
                    <Route path="/profile" element={<Profile/>}/>

                    {/*
                    <Route
                        exact path="/profile"
                        element={<Profile currentUser={currentUser}/>}
                    />
                    */}
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;