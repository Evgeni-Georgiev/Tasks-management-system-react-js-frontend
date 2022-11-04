import './header.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useNavigate} from 'react-router-dom';
import {getLoggedUser, logout} from "../../utils/http-utils/user-requests";
import Button from "react-bootstrap/Button";

export function Header() {

    const navigate = useNavigate();
    // const currentLogged = getLoggedUser();
    // const taskUrl = `/tasks/${currentLogged.id}`;

    // const logoutHandler = () => {
    //     // await logout();
    //     // return navigate('/login');
    //     logout().then( () => {
    //         navigate('/login');
    //     } );
    // }

    return (
        <div className="header">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand to="/">Task Manager</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="nav-link" to="/users-list">Users List</Link>
                            <Link className="nav-link" to="/tasks-list">Tasks List</Link>
                            <Link className="nav-link" to="/user/create-user">Create User</Link>
                            <Link className="nav-link" to="/task/create">Create Task</Link>
                            {/* <Link className="nav-link" to={taskUrl}>My Task</Link> */}
                        </Nav>
                    </Navbar.Collapse>

                    {/* <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Navbar.Text>
                                Signed in as: <span>{currentLogged.name}</span>
                            </Navbar.Text>
                            <Navbar.Text>
                                { currentLogged && <Button onClick={logoutHandler}>Log Out</Button> }
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse> */}

                </Container>
            </Navbar>
        </div>
    );
}