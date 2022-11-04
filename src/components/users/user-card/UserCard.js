import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from 'react-router-dom'; // Importing Hooks from react-router-dom
import "./UserCard.scss";

export function UserCard({ user, deleteUser, isInDetails }) {

    const navigate = useNavigate();
    const loggedUser = "";
    const redirectToDetails = () => {
        navigate(`/user/${user.id}`);
    };

    const redirectToEdit = () => {
        navigate(`/user/edit/${user.id}`);
    };

    if (!user) {
        return <h2>No User!</h2>
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={user.picture} />
            <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                    <span className="key">Address: </span>
                    <span className="value">{user.address}</span>
                </Card.Text>
                <Card.Text>
                    <span className="key">Email: </span>
                    <span className="value">{user.email}</span>
                </Card.Text>
                <Card.Text>
                    <span className="key">Phone: </span>
                    <span className="value">{user.phone}</span>
                </Card.Text>
                <div className="btn-holder">
                    <Button variant="primary" onClick={redirectToEdit}>Edit</Button>
                    {user.id !== loggedUser.id && <Button variant="danger" onClick={() => deleteUser(user.id)}>Delete</Button>}
                    {!isInDetails ? <Button variant="info" onClick={redirectToDetails}>Details</Button> : ''}
                </div>
            </Card.Body>
        </Card>
    );
}
