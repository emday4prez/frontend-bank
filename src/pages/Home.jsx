import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import piggyBank from '../assets/piggy-bank.jpg';
import { LinkContainer } from 'react-router-bootstrap';

export default function Home() {
    return (
        <div className="page">
            <Card style={{ width: '50vw'}}>
                <Card.Img variant="top" src={piggyBank} />
                <Card.Body>
                    <Card.Title>Frontend Banc</Card.Title>
                    <Card.Text>
                        Make today the day you take the next step toward your
                        financial goals.
                    </Card.Text>
                    <LinkContainer to='/create-account'>
                      <Button variant="primary">Create an Account</Button>
                    </LinkContainer>
                    
                </Card.Body>
            </Card>
        </div>
    );
}
