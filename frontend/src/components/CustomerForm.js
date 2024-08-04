import React, { useState } from 'react';
import axios from 'axios';

const CustomerForm = ({ token, customers, setCustomers, setToken }) => {
    const initialCustomerState = {
        first_name: '',
        last_name: '',
        date_of_birth: '',
        phone_number: '',
    };

    const [newCustomer, setNewCustomer] = useState(initialCustomerState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewCustomer({ ...newCustomer, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/customers/new', newCustomer, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setCustomers([...customers, newCustomer]);
            setNewCustomer(initialCustomerState); // Reset form fields

        } catch (error) {
            if (error.response && error.response.data) {
                const errorMessages = Object.values(error.response.data).flat().join('\n');
                alert(`Error saving customer:\n${errorMessages}`);
            } else {
                console.error('Error saving customer:', error);
            }
        }
    };

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            setToken(null); // Clear token
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <div className="customer-container">
            <h2>Register New Customer</h2>
            <form onSubmit={handleSubmit}>   
                <div>
                    <label>First Name</label>
                </div>
                <div>
                    <input type="text" name="first_name" value={newCustomer.first_name} onChange={handleChange} />  
                </div>
                <div>
                    <label>Last Name</label>
                </div>
                <div>
                    <input type="text" name="last_name" value={newCustomer.last_name} onChange={handleChange} />
                </div>
                <div>
                    <label>Date of Birth</label>
                </div>
                <div>
                    <input type="date" name="date_of_birth" value={newCustomer.date_of_birth} onChange={handleChange} />
                </div>
                <div>
                    <label>Phone Number</label>
                </div>
                <div>
                    <input type="text" name="phone_number" value={newCustomer.phone_number} onChange={handleChange} />
                </div>
                <div>
                    <button className="savebtn" type="submit">Save</button>
                </div>
            </form>
            <div>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default CustomerForm;
