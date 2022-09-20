import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { UserContext } from '../context';

function Withdraw() {
    const context = useContext(UserContext);
    const [withdrawAmount, setWithdrawAmount] = useState(0);
    const [negativeError, setNegativeError] = useState(false);
    const [nanError, setNanError] = useState(false);
    const [successful, setSuccessful] = useState(false);

    const onDepositChange = (e) => {
        console.log(+e.target.value);
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
            console.log(context.users[0].balance);
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
            <Card>
                <Card.Header>Withdraw Cash</Card.Header>
                <Card.Body>
                    <Card.Title>{`Account Balance: $${context.users[0].balance}`}</Card.Title>
                    <Form style={{ minWidth: '300px' }}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Withdraw</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="deposit amount"
                                onChange={onDepositChange}
                                value={withdrawAmount}
                            />
                            <Form.Text className="text-muted">
                                Enter a number amount to withdraw.
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
