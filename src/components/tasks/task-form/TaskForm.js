import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {getTaskById, saveTask} from "../../../utils/http-utils/task-requests";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import "./TaskForm.scss";
import {getAllUsers} from "../../../utils/http-utils/user-requests";
import {saveUser} from "../../../utils/http-utils/user-requests";
import {getAllTasks} from "../../../utils/http-utils/task-requests";
import axios from "axios";

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


  const [students, setStudents] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    // Fetch students and tasks from the backend
    getAllUsers().then(response => {
      setStudents(response.data);
    });
    getAllTasks().then(response => {
      setTasks(response.data);
    });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .put(`http://localhost:8080/api/v1/student/${selectedStudent}/task/${selectedTask}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    }
    console.log(task)

    return (
        <div className="task-form-wrapper">

<form onSubmit={handleSubmit}>
      <label>
        Select a student:
        <select value={selectedStudent} onChange={event => setSelectedStudent(event.target.value)}>
          {students.map(student => (
            <option key={student.id} value={student.id}>
              {student.name}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Select a task:
        <select value={selectedTask} onChange={event => setSelectedTask(event.target.value)}>
          {tasks.map(task => (
            <option key={task.id} value={task.id}>
              {task.title}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button type="submit">Assign</button>
    </form>
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