import React, { useState } from 'react';
import Login from './components/Login';
import CustomerForm from './components/CustomerForm';
import CustomerList from './components/CustomerList';
import Register from './components/Register';

const App = () => {
    const [token, setToken] = useState('');
    const [customers,setCustomers]=useState([]);

    const [isRegistering, setIsRegistering] = useState(false);

    if(isRegistering) {
        return <Register setToken={setToken} setIsRegistering={setIsRegistering} />;
    }

    if (!token) {
        return <Login setToken={setToken} setIsRegistering={setIsRegistering} />;
    }

  

    return (
        <div>
            <CustomerForm token={token} customers={customers} setCustomers={setCustomers} setToken={setToken} />
            
            <CustomerList token={token} customers={customers} setCustomers={setCustomers} />
        </div>
    );
};

export default App;
