import axios from "axios";

// define requests to the JSON-server in different functions
// when we want to use certain request, 
// import in the file we want to use only the function for the wanted request
// Note: do not need to import axios in every file, config urls etc.

// variable to hold the url for the server

// const apiUrl = process.env.STUDENT_APP_URL;
const apiUrl = "http://localhost:8080/api/v1/student";

export function getAllUsers() {
    return axios.get(apiUrl);
}

export function getUserById(id) {
    return axios.get(`${apiUrl}/${id}`);
}

export function deleteUser(id) {
    return axios.delete(`${apiUrl}/${id}`);
}

export function saveUser(user) {
    if(!user.picture) {
        user.picture = `https://picsum.photos/200/300?random=${Math.random()}`;
    }

    if(user.id) {
       return axios.put(`${apiUrl}/${user.id}`, user);
    }
    // axios.post/put/patch functions require a body alongside.
    // This body is the info that we send to json server
    return axios.post(`${apiUrl}`, user)
}