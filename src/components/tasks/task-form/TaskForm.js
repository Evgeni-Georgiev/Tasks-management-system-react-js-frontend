import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {getTaskById, saveTask} from "../../../utils/http-utils/task-requests";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import "./TaskForm.scss";
import {getAllUsers} from "../../../utils/http-utils/user-requests";

export function TaskForm() {

    const navigate = useNavigate();
    const params = useParams(); // used when having parameters in the requests files
    const [task, setTask] = useState({
        title: "",
        description: "",
    });

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers().then(response => {
            setUsers(response.data);
        });
    }, []);

    // Update Task
    useEffect(() => {
        if(params.id) {
            getTaskById(params.id).then((response) => {
                setTask(response.data);
            });
        }
    }, [params.id]);


    const onInputChange = (event) => {
        setTask( (prevState) => {
            return {...prevState, [event.target.name]: event.target.value}
        } );
    }

    // create Task
    const onFormSubmit = (event) => {
        event.preventDefault();

        saveTask(task).then(() => {
            navigate('/tasks-list')
        });
    }

    console.log(task)

    return (
        <div className="task-form-wrapper">
            <Form onSubmit={onFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" name="title" value={task.title} onChange={onInputChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter Description" name="description" value={task.description} onChange={onInputChange} />
                </Form.Group>

                {/* {task.id ? <Form.Group className="mb-3" controlId="formBasicAssign">
                    <Form.Label>Assign</Form.Label>
                    <Form.Select placeholder="Select Assign" name="student" onChange={onInputChange}>
                        { users.map(user => <option key={user.id} value={JSON.stringify(user)}>{user.name}</option>)}
                    </Form.Select>
                </Form.Group> : "" } */}

                <Button variant="primary" type="submit">
                    {task.id ? "Edit Task" : "Create Task"}
                </Button>
            </Form>
        </div>
    );
}
