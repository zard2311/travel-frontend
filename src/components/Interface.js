import React from 'react';
    
// custom component
import CustomerList from '../components/CustomerList';
import CreateCustomerEntry from '../components/CreateCustomerEntry';
import EditCustomerEntry from '../components/EditCustomerEntry';

// contexts
import { useTravelContext } from '../contexts/TravelContext';
const Interface = () => {
    const { nav_value } = useTravelContext();
    
    switch (nav_value) {
        case "CustomerList":
            return <CustomerList/>
        case "AddCustomer":
            return <CreateCustomerEntry/>
        case "EditCustomer":
            return <EditCustomerEntry/>
        default:
            return <CustomerList/>
    };
};
export default Interface;
