import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";

export function TaskCard({ task, onTaskDelete, changeStatus }) {
    const navigate = useNavigate();

    const navigateToEdit = () => {
        navigate(`/task/edit/${task.id}`)
    }

    const navigateToTasking = () => {
        navigate(`/task/${task.id}`)
    }

    if (!task) {
        return <h2>No task!</h2>
    }

    const renderButtons = () => {
        // if(loggedUser && (loggedUser.role === "admin" || loggedUser.id === task.authorId)) {
            return (
                <div>
                    <Button variant="primary" onClick={navigateToEdit}>Edit</Button>
                    <Button variant="danger" onClick={() => onTaskDelete(task.id)}>Delete</Button>
                    <Button variant="warning" onClick={() => navigateToTasking()}>Tasking</Button>
                </div>
            );
        // }
    };

    return(
        <div className="task-card-wrapper">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{task.title}</Card.Title>
                    <Card.Text>
                        <span className="key">Description: </span>
                        <span className="value">{task.description}</span>
                    </Card.Text>
                    <Card.Text>
                        <span className="key">Assigned To: </span>
                        <span className="value">{task.student?.name}</span>
                    </Card.Text>
                    <div className="btn-holder">
                        { renderButtons() }
                    </div>
                </Card.Body>
            </Card>
        </div>
    );

}
