import { Routes, Route } from "react-router-dom";
import { User } from "../users/user/User";
import { UsersList } from "../users/users-list/UsersList";
import { UserForm } from "../users/user-form/UserForm";
import { TasksList } from "../tasks/tasks-list/TasksList";
import {TaskForm} from "../tasks/task-form/TaskForm";
import {Task} from "/home/eugene/Desktop/tasks-management-system-frontend/src/components/tasks/task/Task.js";

export function Main() {
    return (
        <div className="main-content">
            <Routes>
                <Route path="/users-list" element={<UsersList />} />
                <Route path="/user/:id" element={<User />} />
                <Route path="/user/create-user" element={<UserForm />} />
                <Route path="/user/edit/:id" element={<UserForm />} />

                <Route path="/task/:id" element={<Task />} />
                <Route path="/tasks-list" element={<TasksList />} />
                <Route path="/tasks/:id" element={<TasksList />} />
                <Route path="/task/create" element={<TaskForm />} />
                {/* <Route path="/task/edit/:id/student/:studentId" element={<TaskForm />} /> */}
                <Route path="/task/edit/:id" element={<TaskForm />} />
            </Routes>
        </div>
    );
}