// Authentication service
// The service uses Axios for HTTP requests and Local Storage for user information & JWT.
// It provides following important functions:
//      login(): POST {username, password} & save JWT to Local Storage
//      logout(): remove JWT from Local Storage
//      register(): POST {username, email, password}
//      getCurrentUser(): get stored user information (including JWT)

import axios from "axios";
const API_URL = "http://localhost:8081/api/auth/";

const register = (username, email, password) => {
    return axios.post(API_URL + "signup", {username, email, password});
};

const login = (username, password) => {
    return axios
        .post(API_URL + "signin", {username, password})
        .then(response => {
            console.log("Login Data", response.data);
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            console.log("Data Saved in Local Storage");
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    console.log(localStorage.getItem("user"));
    return JSON.parse(localStorage.getItem("user"))
};

export default {
    register,
    login,
    logout,
    getCurrentUser
}