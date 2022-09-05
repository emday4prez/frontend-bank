import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { UserContext } from '../context';

function Deposit() {
    const context = useContext(UserContext);
    const [depositAmount, setDepositAmount] = useState(0);
    const submitDeposit = (e) => {
        e.preventDefault();
        let balance = context.users[0].balance;
        balance = balance + +depositAmount;

        context.users[0].balance = +balance;
        console.log(context.users[0].balance);
    };

    return (
        <div className="page">
            <Card>
                <Card.Header>Make A Deposit</Card.Header>
                <Card.Body>
                    <Card.Title>{`Account Balance: $${context.users[0].balance}`}</Card.Title>
                    <Form style={{ minWidth: '300px' }}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Deposit</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="deposit amount"
                                value={depositAmount}
                                onChange={(e) =>
                                    setDepositAmount(e.target.value)
                                }
                            />
                            <Form.Text className="text-muted">
                                Enter a number amount to deposit.
                            </Form.Text>
                        </Form.Group>
                    </Form>

                    <Button
                        variant="primary"
                        className={depositAmount !== 0 ? '' : 'disabled'}
                        onClick={submitDeposit}
                    >
                        Deposit
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Deposit;
