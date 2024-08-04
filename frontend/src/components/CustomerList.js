import React, { useEffect } from 'react';
import axios from 'axios';

const CustomerList = ({ token, customers, setCustomers }) => {

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/customers/', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setCustomers(response.data);
            } catch (error) {
                console.error('Error fetching customers:', error);
            }
        };
        fetchCustomers();
    }, [token]);

    return (
        <div class="customer-list-container">
            <div class="customer-list">
                <h2>Customers List</h2>
                <ul>
                    {customers.map((customer) => (
                        <li key={customer.id}>
                            {customer.first_name} {customer.last_name} - {customer.phone_number}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CustomerList;
