import axios from "axios";
import {getLoggedUser} from "./user-requests";

const apiUrl = "http://localhost:8080/api/v1/task";

// N-numerator can imitate as objects that hold consts. N-numerator existis only in typed languages. JS officialy does not have N-numerator

export const TaskStatus = {
    NEW: "New",
    IN_PROGRESS: "In Progress",
    IN_REVIEW: "In Review",
    DONE: "Done"
}

export function getAllTasks() {
    return axios.get(apiUrl);
}

export function getTasksForAuthor(authorId) {
    return axios.get(`${apiUrl}?authorId=${authorId}`)
}

export function getTaskById(taskId) {
    return axios.get(`${apiUrl}/${taskId}`)
}

export function deleteTask(taskId) {
    return axios.delete(`${apiUrl}/${taskId}`);
}

export function saveTask(task) {
    // create task
    if(!task.id) {
        return axios.post(`${apiUrl}`, task);
    }

    // update task
    return axios.put(`${apiUrl}/${task.id}`, task);
}
