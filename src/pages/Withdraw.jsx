import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { UserContext } from '../context';

function Withdraw() {
    const context = useContext(UserContext);
    const [withdrawAmount, setWithdrawAmount] = useState(null);
    const [negativeError, setNegativeError] = useState(false);
    const [nanError, setNanError] = useState(false);
    const [successful, setSuccessful] = useState(false);

    const onDepositChange = (e) => {
        setWithdrawAmount(+e.target.value);
    };
    const submitDeposit = (e) => {
        e.preventDefault();
        if (withdrawAmount > context.users[0].balance) {
            setNegativeError(true);
            setTimeout(() => {
                setNegativeError(false);
            }, 3000);
        } else if (typeof withdrawAmount !== 'number') {
            setNanError(true);
            setTimeout(() => {
                setNanError(false);
            }, 3000);
        } else {
            let balance = context.users[0].balance;
            balance = balance - +withdrawAmount;

            context.users[0].balance = +balance;
            setWithdrawAmount(0)
            setSuccessful(true);
            setTimeout(() => {
                setSuccessful(false);
            }, 3000);
        }
        return;
    };

    return (
        <div className="page">
            <div style={{ minHeight: '75px' }}>
                {successful && (
                    <Alert variant={'success'}>Withdraw Successful!</Alert>
                )}
                {negativeError && (
                    <Alert variant={'danger'}>
                        Cannot withdraw more than the balance!
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
                <Card.Header>Make A Withdrawal</Card.Header>
                <Card.Body>
                    <Card.Title>{`Account Balance: $${context.users[0].balance.toLocaleString()}`}</Card.Title>
                    <Form style={{ minWidth: '300px' }}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Withdraw</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="withdraw amount"
                                onChange={onDepositChange}
                                value={withdrawAmount}
                            />
                            <Form.Text className="text-muted">
                                Withdraw amount must be a number.
                            </Form.Text>
                        </Form.Group>
                    </Form>

                    <Button
                        variant="primary"
                        className={withdrawAmount !== 0 ? '' : 'disabled'}
                        onClick={submitDeposit}
                    >
                        Withdraw
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Withdraw;
