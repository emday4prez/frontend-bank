import { Routes, Route, Link } from 'react-router-dom'

import './App.css'
import AllData from './pages/AllData';
import Balance from './pages/Balance';
import CreateAccount from './pages/CreateAccount';
import Deposit from './pages/Deposit';
import Home from './pages/Home';
import Login from './pages/Login';
import Withdraw from './pages/Withdraw';
import Navigation from './components/Navigation';


function App() {
    return (
        <div className="App">
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/all-data" element={<AllData />} />
                <Route path="/balance" element={<Balance />} />
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="/deposit" element={<Deposit/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/withdraw" element={<Withdraw />} />
            </Routes>
        </div>
    );
}

export default App
