import './App.scss';
import { Layout } from './components/layout/Layout';
import { Route, Routes } from "react-router-dom";
import {Register} from "./components/auth/register/Register";
import {UsersList} from "./components/users/users-list/UsersList";
import {User} from "./components/users/user/User";
import {UserForm} from "./components/users/user-form/UserForm";
import {Login} from "./components/auth/login/Login";
import {AuthenticatedRoute} from "./utils/guards/AuthenticatedRoute";
import {NonAuthenticatedGuard} from "./utils/guards/NonAuthenticatedGuard";
import {TasksList} from "./components/tasks/tasks-list/TasksList";
import {TaskForm} from "./components/tasks/task-form/TaskForm";
import {Task} from "./components/tasks/task/Task";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route exact path="/" element={<Layout/>} >
                <Route path="/users-list" element={<UsersList/>} />
                <Route path="/user/:id" element={<User />} />
                <Route path="/user/create-user" element={<UserForm />} />
                <Route path="/user/edit/:id" element={<UserForm />} />

                <Route path="/tasks-list" element={<TasksList />} />
                <Route path="/task/:id" element={<Task />} />
                <Route path="/tasks/:id" element={<TasksList />} />
                <Route path="/task/create" element={<TaskForm />} />
                <Route path="/task/edit/:id" element={<TaskForm />} />
            </Route>
        </Routes>
    </div>
  );
}

export default App;
