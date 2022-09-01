import { useContext, useState } from 'react';
import { UserContext } from '../context';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CreateAccount() {
    const context = useContext(UserContext);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleNameChange = (e) => {
      setName(e.target.value)
    }
    const handleEmailChange = (e) => {
      setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
      setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(`name: ${name}, email: ${email}`)
      console.log(`password: ${password}`)
    }
    return (
        <div className="page">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        onChange={handleNameChange}
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
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={handlePasswordChange}
                    />
                    <Form.Text className="text-muted">
                        This is a fake bank, passwords are not securely stored.
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" onClick={handleSubmit} type="submit">
                    Create Account
                </Button>
            </Form>
        </div>
    );
}

export default CreateAccount;
