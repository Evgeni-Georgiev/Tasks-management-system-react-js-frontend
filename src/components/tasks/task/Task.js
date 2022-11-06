import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getTaskById} from "../../../utils/http-utils/task-requests";
import {TaskCard} from "../task-card/TaskCard";
import {UserCard} from "../../users/user-card/UserCard";

export function Task(props) {

    const params = useParams();

    const [task, setTask] = useState(null);

    useEffect(() => {
        getTaskById(params.id).then((response) => {
            setTask(response.data)
        })
    }, [params.id])

    console.log(params)

    return (
        <div>
            <div className="task">
            <TaskCard task={task} isInDetails={true}/>
            <div className="user-tasks-holder">
                {!props.user ? <h2>No user assigned!</h2> : <UserCard key={task?.student.id} user={task?.student} />}
                {/* <UserCard key={task?.student.id} user={task?.student} /> */}
            </div>
        </div>
        </div>
    );
}
