import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../../utils/http-utils/user-requests";
import { UserCard } from "../user-card/UserCard";
import {deleteTask, getTasksForAuthor, saveTask} from "../../../utils/http-utils/task-requests";
import { TaskCard } from "../../tasks/task-card/TaskCard";
import "./User.scss";

export function User(props) {

    // Get the "id" through the hook: useParams
    const params = useParams();

    const [user, setUser] = useState(null);
    const [userTasks, setUserTasks] = useState([]);

    useEffect(() => {
        getUserById(params.id).then(response => {
            setUser(response.data);
        });
        getTasksForAuthor(params.id).then(response => setUserTasks(response.data))
    }, [params.id]);

    const onDeleteHandler = async (id) => {
        await deleteTask(id);
        setUserTasks( (prevState) => {
            return prevState.filter((task) => task.id !== id)
        } )
    }

    const changeStatusHandler = (status, id) => {
        const task = userTasks.find(task => task.id === id); // will get the new status
        task.status = status;
        saveTask(task).then(() => {
            setUserTasks([...userTasks]);
        })
    }

    return (
        <div className="user">
            <UserCard user={user} isInDetails={true}/>
            <div className="user-tasks-holder">
                { !props.task ? <h2>No tasks assigned!</h2> : userTasks.map( (task) => {
                    if(task.student.name !== user.name) {
                        return "";
                    }
                    return <TaskCard key={task.id} task={task} onTaskDelete={onDeleteHandler} changeStatus={changeStatusHandler} />
                }) }
            </div>
        </div>
    );
}
