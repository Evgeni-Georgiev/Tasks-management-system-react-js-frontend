import './header.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

export function Header() {

	return (
		<div className="header">
			<Navbar bg="light" expand="lg">
				<Container>
					<Link className="nav-link" to="/users-list">
						<Navbar.Brand to="/">Task Manager</Navbar.Brand>
					</Link>
					<Navbar.Toggle aria-controls="basic-navbar-nav"/>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Link className="nav-link" to="/users-list">Users List</Link>
							<Link className="nav-link" to="/tasks-list">Tasks List</Link>
							<Link className="nav-link" to="/user/create-user">Create User</Link>
							<Link className="nav-link" to="/task/create">Create Task</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}
