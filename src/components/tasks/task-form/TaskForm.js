import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {getTaskById, saveTask, TaskStatus} from "../../../utils/http-utils/task-requests";
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
            setUsers(response.data); // thus way, the variable 'users' will be updated and will now have an array of all users coming from the API
        });
    }, []);

    // Update Task
    // the useEffect will send a request for the id,
    // if there is an id, then get it and display the data by setting a state in the task const
    useEffect(() => {
        if(params.id) { // by checking the URL, if there are parameters...
                                        // when we get the task, save in the state
            getTaskById(params.id).then((response) => {
                setTask(response.data);
            });
        }
    }, [params.id]); // params.id is created outside the state of useEffect => the useEffect is not controlling it.
    // By adding params.id as an option to the array, the useEffect hook will execute everytime the id is changed


    const onInputChange = (event) => {
        setTask( (prevState) => {
            return {...prevState, [event.target.name]: event.target.value}
            // get all that was before as values +==,== the new field and its value will come from event.target.value
        } );
    }

    // create Task
    const onFormSubmit = (event) => {
        event.preventDefault();

        saveTask(task).then(() => {
            navigate('/tasks-list')
        });
    }

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

                <Button variant="primary" type="submit">
                    {task.id ? "Edit Task" : "Create Task"}
                </Button>
            </Form>
        </div>
    );
}
