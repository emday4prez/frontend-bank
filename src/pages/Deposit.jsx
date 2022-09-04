import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { UserContext } from '../context';
function Deposit() {

  const context = useContext(UserContext)
    return (
        <div className="page">
            <Card>
                <Card.Header>Make A Deposit</Card.Header>
                <Card.Body>
                    <Card.Title>{`Account Balance: $${context.users[0].balance}`}</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to
                        additional content.
                    </Card.Text>
                    <Button variant="primary">Deposit</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Deposit;
