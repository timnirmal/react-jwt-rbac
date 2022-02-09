import React, {useState, useEffect} from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthService from "./services/auth.service";
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
    };

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/login" element={<Login/>}/>
                    <Route exact path="/register" element={<Register/>}/>
                    <Route
                        exact path="/profile"
                        element={<Profile currentUser={currentUser}/>}
                    />
                    <Route
                        exact path="/user"
                        element={<BoardUser currentUser={currentUser}/>}
                    />
                    <Route
                        exact path="/moderator"
                        element={<BoardModerator currentUser={currentUser}/>}
                    />
                    <Route
                        exact path="/admin"
                        element={<BoardAdmin currentUser={currentUser}/>}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;