import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
function Navigation() {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand title="Go to the main homepage.">
                        feBanc
                    </Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link title="Go to the main homepage.">
                                Home
                            </Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/deposit">
                            <Nav.Link title="Add an amount to the guest account balance.">
                                Deposit
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/withdraw">
                            <Nav.Link title="Subtract an amount from the guest account balance.">
                                Withdraw
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/create-account">
                            <Nav.Link title="Create a new account.">
                                Create Account
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/all-data">
                            <Nav.Link title="All of the data about every account.">
                                All Data
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
