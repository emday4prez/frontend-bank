import { Routes, Route, Link } from 'react-router-dom';
import { UserContext } from './context';

//styles
import './App.css';
//components
import Navigation from './components/Navigation';

//pages
import AllData from './pages/AllData';
import Balance from './pages/Balance';
import CreateAccount from './pages/CreateAccount';
import Deposit from './pages/Deposit';
import Home from './pages/Home';
import Login from './pages/Login';
import Withdraw from './pages/Withdraw';

function App() {
    return (
        <div className="App">
            <Navigation />
            <UserContext.Provider
                value={{
                    users: [
                        {
                            name: 'guest',
                            email: 'guest@aol.com',
                            password: 'password',
                            balance: 100,
                        },
                    ],
                }}
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/all-data" element={<AllData />} />
                    <Route path="/balance" element={<Balance />} />
                    <Route path="/create-account" element={<CreateAccount />} />
                    <Route path="/deposit" element={<Deposit />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/withdraw" element={<Withdraw />} />
                </Routes>
            </UserContext.Provider>
        </div>
    );
}

export default App;
