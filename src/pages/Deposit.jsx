import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { UserContext } from '../context';

function Deposit() {
    const context = useContext(UserContext);
    const [depositAmount, setDepositAmount] = useState(0);
    const [negativeError, setNegativeError] = useState(false);
    const [nanError, setNanError] = useState(false);
    const [successful, setSuccessful] = useState(false);

    const onDepositChange = (e) => {
        setDepositAmount(+e.target.value);
    };
    const submitDeposit = (e) => {
        e.preventDefault();
        if (depositAmount < 1) {
            setNegativeError(true);
            setTimeout(() => {
                setNegativeError(false);
            }, 3000);
            
        } else if (typeof depositAmount !== 'number') {
            setNanError(true);
            setTimeout(() => {
                setNanError(false);
            }, 3000);
        } else {
            let balance = context.users[0].balance;
            balance = balance + +depositAmount;

            context.users[0].balance = +balance;
            console.log(context.users[0].balance);
            setDepositAmount(0)
            setSuccessful(true);
            setTimeout(() => {
                setSuccessful(false);
            }, 3000);
        }
        return
    };

    return (
        <div className="page">
            <div style={{ minHeight: '75px' }}>
                {successful && (
                    <Alert variant={'success'}>Deposit Successful!</Alert>
                )}
                {negativeError && (
                    <Alert variant={'danger'}>
                        deposit amount must be more than 0!
                    </Alert>
                )}
                {nanError && (
                    <Alert variant={'danger'}>Input must be a number!</Alert>
                )}
            </div>
            <Card
                style={{
                    border: '0',
                    boxShadow:
                        'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
                }}
            >
                <Card.Header>Make A Deposit</Card.Header>
                <Card.Body>
                    <Card.Title>{`Account Balance: $${context.users[0].balance.toLocaleString()}`}</Card.Title>
                    <Form style={{ minWidth: '300px' }}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Deposit</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="deposit amount"
                                onChange={onDepositChange}
                                value={depositAmount}
                            />
                            <Form.Text className="text-muted">
                                Deposit amount must be a number.
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
