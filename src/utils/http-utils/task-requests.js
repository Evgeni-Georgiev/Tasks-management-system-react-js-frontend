import axios from "axios";

// const apiUrl = process.env.TASK_APP_URL;
const apiUrl = "http://localhost:8080/api/v1/task";

// N-numerator can imitate as objects that hold consts. N-numerator existis only in typed languages. JS officialy does not have N-numerator

export function getAllTasks() {
    return axios.get(apiUrl);
}

export function getTasksForAuthor(authorId) {
    return axios.get(`${apiUrl}?authorId=${authorId}`)
}

export function getTaskById(taskId) {
    return axios.get(`${apiUrl}/${taskId}`)
}

export function getTaskAndStudentById(taskId, studentId) {
    return axios.get(`${apiUrl}/${taskId}/student/${studentId}`);
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
    // return axios.put(`${apiUrl}/${task.id}/student/${task.student.id}`, task);
    return axios.put(`${apiUrl}/${task.id}`, task);
}
