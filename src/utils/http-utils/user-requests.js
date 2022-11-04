import axios from "axios";

// define requests to the JSON-server in different functions
// when we want to use certain request, 
// import in the file we want to use only the function for the wanted request
// Note: do not need to import axios in every file, config urls etc.

// variable to hold the url for the server

const apiUrl = 'http://localhost:8080/api/v1/student';
const loggedUserKey = 'loggedUser';

// function to return all users that exist in the server

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

// Auth


// Function to return result for the logged user to use it on another place
export function getLoggedUser() {
    return JSON.parse(localStorage.getItem(loggedUserKey))
}

export async function logout() {
    localStorage.removeItem(loggedUserKey);
}


export async function registerUser(user) {
    // search for user by some criteria
    const existingUser = (await axios.get(`${apiUrl}?email=${user.email}`)).data;

    if(!{...user}) {
        return <h2>There are unfilled Fields!!!</h2>
    }

    // check if user's "name" and "email" does not already exist in db
    if(existingUser.length > 0) {
        throw new Error("User with this email already exists!");
    }

    return saveUser(user)
    // Alternative: return axios.post(`${apiUrl}`, user);
}

// Can also happen with: filter existingUser
// or read all users and search by them
export async function loginUser(user) {
    const allUsers = (await getAllUsers()).data; // read all users -- return response -- is an array with all users

    // find -- from the array "allUsers" the email and password should match with the user that we have as a parameter - "user" as a parameter
    const foundUser = allUsers.find( (u) => { return u.email === user.email && u.password === user.password });
    // find iterator -- return undefined, if nothing is found; or user Object
    if(!foundUser) { // if user with these matches does not exist
        throw new Error('Invalid username/password');
    }

    if(!foundUser.isActive) {
        throw new Error('User is blocked!');
    }

    localStorage.setItem(loggedUserKey, JSON.stringify(foundUser));

    return foundUser;
}