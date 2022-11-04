import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getTaskById} from "../../../utils/http-utils/task-requests";
import {TaskCard} from "../task-card/TaskCard";
import {UserCard} from "/home/eugene/Desktop/tasks-management-system-frontend/src/components/users/user-card/UserCard.js";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export function Task(props) {

    const params = useParams();

    const [task, setTask] = useState(null);

    useEffect(() => {
        getTaskById(params.id).then((response) => {
            setTask(response.data)
        })
    }, [params.id])

    return (
        <div>
            <div className="task">
            <TaskCard task={task} isInDetails={true}/>
            <div className="user-tasks-holder">
                <UserCard key={task?.student.id} user={task?.student} />
            </div>
        </div>
        </div>
    );
}
