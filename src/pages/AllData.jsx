import { useContext} from 'react';
import { UserContext } from '../context';
import Card from 'react-bootstrap/Card';

function AllData() {
  const context = useContext(UserContext)
    return (
        <div className="page">
            <Card
                style={{
                    border: '0',
                    boxShadow:
                        'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
                }}
            >
                {context.users.map((user) => {
                    return (
                        <div key={user.name}>
                            <Card.Header>{user.name}</Card.Header>
                            <Card.Body>
                                <h5>{user.email}</h5>
                                <h5>password: {user.password}</h5>
                                <h6>
                                    Balance: ${user.balance.toLocaleString()}
                                </h6>
                            </Card.Body>

                            <div style={{ margin: '1rem' }}></div>
                        </div>
                    );
                })}
            </Card>
        </div>
    );
}

export default AllData;
