import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
function Navigation() {
    return (
        <Navbar bg="primary" variant='dark' expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/balance">
                            <Nav.Link>Balance</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/deposit">
                            <Nav.Link>Deposit</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/withdraw">
                            <Nav.Link>Withdraw</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                                <Nav.Link>Log In</Nav.Link>
                            </LinkContainer>
                        <LinkContainer to="/create-account">
                                <Nav.Link>Create Account</Nav.Link>
                            </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
