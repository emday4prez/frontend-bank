import { useContext, useState } from 'react';
import { UserContext } from '../context';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function CreateAccount() {
    const context = useContext(UserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hasInput, setHasInput] = useState(false);
    const [accountAdded, setAccountAdded] = useState(false);
    const [displaySuccessAlert, setDisplaySuccessAlert] = useState(false);
    const [displayNameFail, setDisplayNameFail] = useState(false);
    const [displayEmailFail, setDisplayEmailFail] = useState(false);
    const [displayPasswordFail, setDisplayPasswordFail] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
        if (!hasInput) setHasInput(true);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!hasInput) setHasInput(true);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (!hasInput) setHasInput(true);
    };
    const resetForm = () => {
        setName('');
        setEmail('');
        setPassword('');
        setHasInput(false);
        setAccountAdded(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim().length < 1) {
            setDisplayNameFail(true);
            setTimeout(() => {
                setDisplayNameFail(false);
            }, 3000);
            return;
        } else if (email.trim().length < 1) {
            setDisplayEmailFail(true);
            setTimeout(() => {
                setDisplayEmailFail(false);
            }, 3000);
            return;
        } else if (password.trim().length < 8) {
            setDisplayPasswordFail(true);
            setTimeout(() => {
                setDisplayPasswordFail(false);
            }, 3000);
            return;
        } else {
            const newUser = {
                name: name,
                email: email,
                password: password,
                balance: 0,
            };
            context.users = [...context.users, newUser];
            console.log(context.users);
            resetForm();
            setDisplaySuccessAlert(true);
            setTimeout(() => {
                setDisplaySuccessAlert(false);
            }, 5000);
        }
    };

    return (
        <div className="page">
            <div style={{ minHeight: '75px' }}>
                {displaySuccessAlert && (
                    <Alert variant={'success'}>
                        Successfully created user!
                    </Alert>
                )}
                {displayNameFail && (
                    <Alert variant={'danger'}>Name is required!</Alert>
                )}
                {displayEmailFail && (
                    <Alert variant={'danger'}>Email is required!</Alert>
                )}
                {displayPasswordFail && (
                    <Alert variant={'danger'}>
                        Password is required to be at least 8 characters!
                    </Alert>
                )}
            </div>
            <Card>
                <Card.Header as="h5">Create an Account</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                onChange={handleNameChange}
                                value={name}
                            />
                            <Form.Text className="text-muted">
                                Please enter your first name.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                onChange={handleEmailChange}
                                value={email}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange={handlePasswordChange}
                                value={password}
                            />
                            <Form.Text className="text-muted">
                                This is a fake bank, passwords are not securely
                                stored.
                            </Form.Text>
                        </Form.Group>

                        <Button
                            variant="primary"
                            onClick={handleSubmit}
                            className={hasInput ? '' : 'disabled'}
                            type="submit"
                        >
                            {accountAdded
                                ? 'Add Another Account'
                                : 'Create Account'}
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CreateAccount;
