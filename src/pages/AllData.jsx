import { useContext} from 'react';
import { UserContext } from '../context';
import Card from 'react-bootstrap/Card';

function AllData() {
  const context = useContext(UserContext)
    return <div className='page'>
    <Card style={{padding: '1rem'}}>
      {context.users.map(user => {
      return <div key={user.name}>
        <h4>Username: {user.name}</h4>
        <h5>Password: {user.password}</h5>
        <h6>Balance: ${user.balance}</h6>
        <div style={{margin: '1rem'}}></div>
      </div>
    })}
    </Card>
    
    </div>;
}

export default AllData;
